"""
Matching logic for AI Voice Cooking Assistant (RasoiAI).
"""

from typing import List, Dict, Any
import re
from backend.data.recipes_data import RECIPES as FALLBACK_RECIPES, SYNONYM_MAP

def normalize_ingredient(name: str) -> str:
    """Clean string, strip whitespace/punctuation, convert to lowercase and resolve synonyms."""
    cleaned = re.sub(r'[^\w\s]', '', name.strip().lower())
    return SYNONYM_MAP.get(cleaned, cleaned)

def match_recipes(
    user_ingredients: List[str], 
    min_match_percent: float = 40.0,
    recipes_list: List[Dict[str, Any]] = None
) -> List[Dict[str, Any]]:
    """
    Match user ingredients against recipe dataset.
    Accepts recipes_list (from Supabase DB or static fallback).
    Returns ranked recipes with match score and missing ingredients list.
    """
    if recipes_list is None:
        recipes_list = FALLBACK_RECIPES

    normalized_user_set = {normalize_ingredient(ing) for ing in user_ingredients if ing.strip()}
    
    results = []

    for recipe in recipes_list:
        required_ingredients = [ing for ing in recipe.get("ingredients", []) if not ing.get("is_optional", False)]
        optional_ingredients = [ing for ing in recipe.get("ingredients", []) if ing.get("is_optional", False)]
        
        required_names_set = set()
        for ing in required_ingredients:
            normalized_name = normalize_ingredient(ing["name"])
            required_names_set.add(normalized_name)
            
        if not required_names_set:
            continue
            
        matched_required = set()
        for user_ing in normalized_user_set:
            for req_ing in required_names_set:
                if user_ing == req_ing or user_ing in req_ing or req_ing in user_ing:
                    matched_required.add(req_ing)

        match_count = len(matched_required)
        total_required = len(required_names_set)
        match_percent = round((match_count / total_required) * 100, 1)

        missing_required = []
        for ing in required_ingredients:
            norm_name = normalize_ingredient(ing["name"])
            if norm_name not in matched_required:
                missing_required.append(ing["name"])

        matched_optional = []
        for ing in optional_ingredients:
            norm_name = normalize_ingredient(ing["name"])
            if any(user_ing == norm_name or user_ing in norm_name for user_ing in normalized_user_set):
                matched_optional.append(ing["name"])

        results.append({
            "recipe": recipe,
            "match_percent": match_percent,
            "matched_count": match_count,
            "total_required": total_required,
            "missing_ingredients": missing_required,
            "matched_optional": matched_optional
        })

    results.sort(key=lambda x: (x["match_percent"], x["matched_count"]), reverse=True)

    filtered = [res for res in results if res["match_percent"] >= min_match_percent]
    if not filtered and results:
        filtered = results[:3]

    return filtered

def get_all_ingredients(recipes_list: List[Dict[str, Any]] = None) -> List[str]:
    """Get list of unique ingredient names across all recipes."""
    if recipes_list is None:
        recipes_list = FALLBACK_RECIPES

    unique_set = set()
    for recipe in recipes_list:
        for ing in recipe.get("ingredients", []):
            unique_set.add(ing["name"])
    return sorted(list(unique_set))
