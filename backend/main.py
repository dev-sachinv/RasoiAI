"""
FastAPI Server for AI Voice Cooking Assistant (RasoiAI).
Integrates with Supabase (Postgres) database with local fallback support.
"""

import os
import sys
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Patch httpx to bypass Windows local SSL CA certificate store verification errors
import httpx

_original_httpx_init = httpx.Client.__init__
def _patched_httpx_init(self, *args, **kwargs):
    kwargs['verify'] = False
    _original_httpx_init(self, *args, **kwargs)

httpx.Client.__init__ = _patched_httpx_init

# Suppress insecure request warnings if urllib3 is available
try:
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
except ImportError:
    pass

from backend.services.matching import match_recipes, get_all_ingredients

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY") or os.getenv("SUPABASE_SERVICE_ROLE_KEY")

supabase_client = None

if SUPABASE_URL and SUPABASE_KEY:
    try:
        from supabase import create_client
        supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
        print("Connected to Supabase PostgreSQL Database.")
    except Exception as e:
        print(f"Warning: Failed to initialize Supabase client: {e}")

# Import static backup fallback
from backend.data.recipes_data import RECIPES as FALLBACK_RECIPES

app = FastAPI(
    title="RasoiAI Backend",
    description="API for AI Voice Cooking Assistant - Phase 1 (Supabase Powered)",
    version="1.0.0"
)

# Dynamic CORS configuration for deployment
raw_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:3000,*")
allowed_origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins if "*" not in allowed_origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MatchRequest(BaseModel):
    ingredients: List[str]
    min_match_percent: Optional[float] = 30.0

def fetch_all_recipes_from_db() -> List[Dict[str, Any]]:
    """Helper to fetch recipes along with joined recipe_ingredients from Supabase."""
    if not supabase_client:
        return FALLBACK_RECIPES

    try:
        # Fetch recipes
        recipes_res = supabase_client.table("recipes").select("*").execute()
        if not recipes_res.data:
            return FALLBACK_RECIPES

        recipes_list = recipes_res.data

        # Fetch joined recipe_ingredients
        rel_res = supabase_client.table("recipe_ingredients").select(
            "recipe_id, quantity, unit, is_optional, ingredients(id, name)"
        ).execute()

        recipe_ing_map = {}
        if rel_res.data:
            for item in rel_res.data:
                r_id = item["recipe_id"]
                if r_id not in recipe_ing_map:
                    recipe_ing_map[r_id] = []
                
                ing_details = item.get("ingredients") or {}
                recipe_ing_map[r_id].append({
                    "name": ing_details.get("name", "unknown"),
                    "quantity": item.get("quantity"),
                    "unit": item.get("unit"),
                    "is_optional": item.get("is_optional", False)
                })

        # Attach ingredients array to each recipe
        for r in recipes_list:
            r["ingredients"] = recipe_ing_map.get(r["id"], [])

        return recipes_list
    except Exception as e:
        print(f"Supabase query error: {e}. Falling back to seed data.")
        return FALLBACK_RECIPES


@app.get("/")
def read_root():
    db_status = "Supabase PostgreSQL" if supabase_client else "In-Memory Seed Backup"
    return {
        "status": "online",
        "app": "RasoiAI - AI Voice Cooking Assistant Backend",
        "database": db_status
    }

@app.get("/api/recipes")
def get_recipes(
    query: Optional[str] = Query(None, description="Search term for recipe name or category"),
    region: Optional[str] = Query(None, description="Filter by region (e.g. Tamil Nadu, North Indian)")
):
    if supabase_client:
        try:
            db_query = supabase_client.table("recipes").select("*")
            if region and region.lower() != "all":
                db_query = db_query.ilike("region", region)
            
            res = db_query.execute()
            results = res.data or []

            if query and query.strip():
                q = query.strip().lower()
                results = [
                    r for r in results 
                    if q in r["name"].lower() or (r.get("region") and q in r["region"].lower())
                ]
            return {"recipes": results, "count": len(results)}
        except Exception as e:
            print(f"Supabase query error in GET /recipes: {e}")

    # Fallback execution
    results = FALLBACK_RECIPES
    if region and region.lower() != "all":
        results = [r for r in results if r.get("region", "").lower() == region.lower()]
        
    if query and query.strip():
        q = query.strip().lower()
        results = [
            r for r in results 
            if q in r["name"].lower() or q in r.get("category", "").lower() or q in r.get("description", "").lower()
        ]
        
    return {"recipes": results, "count": len(results)}

@app.get("/api/recipes/{recipe_id}")
def get_recipe(recipe_id: str):
    if supabase_client:
        try:
            # Query recipes table
            res = supabase_client.table("recipes").select("*").eq("id", recipe_id).execute()
            if res.data and len(res.data) > 0:
                recipe = res.data[0]
                
                # Fetch joined recipe_ingredients
                rel_res = supabase_client.table("recipe_ingredients").select(
                    "quantity, unit, is_optional, ingredients(id, name)"
                ).eq("recipe_id", recipe_id).execute()
                
                ingredients_list = []
                if rel_res.data:
                    for item in rel_res.data:
                        ing_details = item.get("ingredients") or {}
                        ingredients_list.append({
                            "name": ing_details.get("name", "unknown"),
                            "quantity": item.get("quantity"),
                            "unit": item.get("unit"),
                            "is_optional": item.get("is_optional", False)
                        })
                
                recipe["ingredients"] = ingredients_list
                return recipe
        except Exception as e:
            print(f"Supabase query error in GET /recipes/{recipe_id}: {e}")

    # Fallback search
    recipe = next((r for r in FALLBACK_RECIPES if r["id"] == recipe_id), None)
    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return recipe

@app.post("/api/match-ingredients")
def match_user_ingredients(payload: MatchRequest):
    if not payload.ingredients:
        raise HTTPException(status_code=400, detail="Ingredients list cannot be empty")
    
    dataset = fetch_all_recipes_from_db()
    matches = match_recipes(payload.ingredients, min_match_percent=payload.min_match_percent or 30.0, recipes_list=dataset)
    
    return {
        "user_ingredients": payload.ingredients,
        "total_matched_recipes": len(matches),
        "matches": matches
    }

@app.get("/api/ingredients")
def list_ingredients():
    if supabase_client:
        try:
            res = supabase_client.table("ingredients").select("name").order("name").execute()
            if res.data:
                names = [row["name"] for row in res.data if row.get("name")]
                return {"ingredients": names}
        except Exception as e:
            print(f"Supabase query error in GET /ingredients: {e}")

    # Fallback ingredients list
    dataset = fetch_all_recipes_from_db()
    return {"ingredients": get_all_ingredients(recipes_list=dataset)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
