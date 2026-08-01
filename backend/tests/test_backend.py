import sys
import os
from unittest.mock import patch, MagicMock
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from backend.services.matching import match_recipes, normalize_ingredient, get_all_ingredients
from backend.data.recipes_data import RECIPES
from backend.llm_fallback import generate_fallback_recipe, RecipeGenerationError

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

@patch("backend.llm_fallback.Groq")
@patch.dict(os.environ, {"GROQ_API_KEY": "mock-api-key"})
def test_llm_fallback_recipe_generation(mock_groq_class):
    mock_client = MagicMock()
    mock_groq_class.return_value = mock_client
    
    mock_completion = MagicMock()
    mock_completion.choices = [
        MagicMock(message=MagicMock(content='```json\n{"name": "AI Special Bhindi", "region": "Pan-Indian", "cook_time_mins": 15, "servings": 2, "steps": [{"step_number": 1, "instruction": "Fry bhindi with capsicum.", "timer_seconds": 300}], "ingredients_used": ["bhindi", "capsicum"], "source": "ai_generated"}\n```'))
    ]
    mock_client.chat.completions.create.return_value = mock_completion
    
    result = generate_fallback_recipe(["bhindi", "capsicum"])
    assert result["name"] == "AI Special Bhindi"
    assert result["source"] == "ai_generated"
    assert len(result["steps"]) == 1

@patch("backend.llm_fallback.Groq")
@patch.dict(os.environ, {"GROQ_API_KEY": "mock-api-key"})
def test_llm_fallback_malformed_json(mock_groq_class):
    mock_client = MagicMock()
    mock_groq_class.return_value = mock_client
    
    mock_completion = MagicMock()
    mock_completion.choices = [
        MagicMock(message=MagicMock(content='This is not valid JSON content!'))
    ]
    mock_client.chat.completions.create.return_value = mock_completion
    
    try:
        generate_fallback_recipe(["unknown_item"])
        assert False, "Should have raised RecipeGenerationError"
    except RecipeGenerationError:
        assert True

if __name__ == "__main__":
    print("Running backend tests...")
    test_recipes_seed_count()
    test_synonym_normalization()
    test_ingredient_matching()
    test_all_ingredients_list()
    test_llm_fallback_recipe_generation()
    test_llm_fallback_malformed_json()
    print("ALL BACKEND TESTS PASSED SUCCESSFULLY!")
