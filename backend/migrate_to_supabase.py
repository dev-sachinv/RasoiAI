"""
One-time migration script to populate Supabase Postgres tables from recipes_data.py.

Usage:
    python backend/migrate_to_supabase.py
"""

import os
import sys
import ssl
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Patch httpx to bypass Windows local SSL CA certificate store verification errors
import httpx

_original_httpx_init = httpx.Client.__init__
def _patched_httpx_init(self, *args, **kwargs):
    kwargs['verify'] = False
    _original_httpx_init(self, *args, **kwargs)

httpx.Client.__init__ = _patched_httpx_init

# Suppress insecure request warnings
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Ensure backend package can be imported
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from backend.data.recipes_data import RECIPES

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY") or os.getenv("SUPABASE_SERVICE_ROLE_KEY")

def determine_category(ing_name: str) -> str:
    """Classify ingredient into basic category."""
    name = ing_name.lower()
    if any(k in name for k in ["dal", "chickpeas", "lentil"]):
        return "lentil"
    elif any(k in name for k in ["powder", "seeds", "hing", "masala", "pepper", "salt"]):
        return "spice"
    elif any(k in name for k in ["onion", "tomato", "potato", "cauliflower", "drumstick", "garlic", "ginger", "leaves"]):
        return "vegetable"
    elif any(k in name for k in ["oil", "ghee", "butter"]):
        return "oil/fat"
    elif any(k in name for k in ["paneer", "curd", "cream"]):
        return "dairy"
    elif any(k in name for k in ["egg"]):
        return "protein"
    elif any(k in name for k in ["rice", "batter"]):
        return "grain"
    return "general"

def run_migration():
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("ERROR: SUPABASE_URL and SUPABASE_KEY environment variables must be set.")
        sys.exit(1)

    try:
        from supabase import create_client
    except ImportError:
        print("ERROR: supabase-py package not installed. Run: pip install supabase")
        sys.exit(1)

    print(f"Connecting to Supabase at: {SUPABASE_URL}")
    
    try:
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    except Exception as e:
        print(f"Error creating client: {e}")
        sys.exit(1)

    # 1. Collect and insert unique normalized ingredients
    unique_ingredients = {}
    for r in RECIPES:
        for ing in r.get("ingredients", []):
            norm_name = ing["name"].strip().lower()
            if norm_name not in unique_ingredients:
                unique_ingredients[norm_name] = determine_category(norm_name)

    print(f"Extracting {len(unique_ingredients)} unique ingredients...")
    
    ingredient_id_map = {}
    for name, cat in unique_ingredients.items():
        try:
            # Check if already exists in DB
            res = supabase.table("ingredients").select("id, name").eq("name", name).execute()
            if res.data and len(res.data) > 0:
                ingredient_id_map[name] = res.data[0]["id"]
            else:
                ins = supabase.table("ingredients").insert({
                    "name": name,
                    "category": cat
                }).execute()
                if ins.data:
                    ingredient_id_map[name] = ins.data[0]["id"]
        except Exception as err:
            print(f"Ingredient insert note for '{name}': {err}")

    print(f"Migrated {len(ingredient_id_map)} ingredients to database successfully.")

    # 2. Insert Recipes and Recipe Ingredients relationships
    recipes_migrated_count = 0
    recipe_ingredients_count = 0

    for r in RECIPES:
        try:
            res = supabase.table("recipes").select("id").eq("name", r["name"]).execute()
            if res.data and len(res.data) > 0:
                recipe_id = res.data[0]["id"]
                print(f"Recipe '{r['name']}' existing. Updating...")
                supabase.table("recipes").update({
                    "region": r.get("region"),
                    "cook_time_mins": r.get("cook_time_mins"),
                    "servings": r.get("servings"),
                    "steps": r.get("steps")
                }).eq("id", recipe_id).execute()
            else:
                ins = supabase.table("recipes").insert({
                    "name": r["name"],
                    "region": r.get("region"),
                    "cook_time_mins": r.get("cook_time_mins"),
                    "servings": r.get("servings"),
                    "steps": r.get("steps")
                }).execute()
                if ins.data:
                    recipe_id = ins.data[0]["id"]
                    recipes_migrated_count += 1
                else:
                    recipe_id = None

            if recipe_id:
                # Link recipe_ingredients
                for ing in r.get("ingredients", []):
                    norm_name = ing["name"].strip().lower()
                    ing_id = ingredient_id_map.get(norm_name)
                    if ing_id:
                        try:
                            supabase.table("recipe_ingredients").upsert({
                                "recipe_id": recipe_id,
                                "ingredient_id": ing_id,
                                "quantity": ing.get("quantity"),
                                "unit": ing.get("unit", ""),
                                "is_optional": ing.get("is_optional", False)
                            }).execute()
                            recipe_ingredients_count += 1
                        except Exception as e:
                            pass
        except Exception as err:
            print(f"Recipe migration note for '{r['name']}': {err}")

    print("\n==========================================")
    print("MIGRATION SUMMARY:")
    print(f"  * Total Recipes Processed: {len(RECIPES)}")
    print(f"  * New Recipes Inserted: {recipes_migrated_count}")
    print(f"  * Total Ingredients Migrated: {len(ingredient_id_map)}")
    print(f"  * Total Recipe-Ingredient Relations Linked: {recipe_ingredients_count}")
    print("==========================================")

if __name__ == "__main__":
    run_migration()
