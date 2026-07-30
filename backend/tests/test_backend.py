import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from backend.services.matching import match_recipes, normalize_ingredient, get_all_ingredients
from backend.data.recipes_data import RECIPES

def test_recipes_seed_count():
    assert len(RECIPES) >= 25
    for r in RECIPES:
        assert "id" in r
        assert "name" in r
        assert "steps" in r
        assert len(r["steps"]) > 0

def test_synonym_normalization():
    assert normalize_ingredient("pyaz") == "onion"
    assert normalize_ingredient("vengayam") == "onion"
    assert normalize_ingredient("haldi") == "turmeric powder"
    assert normalize_ingredient("tamatar") == "tomato"

def test_ingredient_matching():
    user_ingredients = ["onion", "tomato", "toor dal", "mustard seeds", "tamarind"]
    matches = match_recipes(user_ingredients, min_match_percent=30.0)
    assert len(matches) > 0
    top_match = matches[0]
    assert "recipe" in top_match
    assert top_match["match_percent"] > 40.0

def test_all_ingredients_list():
    ings = get_all_ingredients()
    assert len(ings) > 10
    assert "onion" in ings or "tomato" in ings

if __name__ == "__main__":
    print("Running backend tests...")
    test_recipes_seed_count()
    test_synonym_normalization()
    test_ingredient_matching()
    test_all_ingredients_list()
    print("ALL BACKEND TESTS PASSED SUCCESSFULLY!")

