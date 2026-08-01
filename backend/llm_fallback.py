"""
Groq LLM Fallback Module for RasoiAI

Setup Instructions:
1. Obtain an API key from Groq Console (https://console.groq.com/keys).
2. Set `GROQ_API_KEY` in your `.env` file locally:
   GROQ_API_KEY=your_groq_api_key_here
3. In production (Render dashboard), add `GROQ_API_KEY` under Environment Variables.
"""

import os
import json
import re
from typing import List, Dict, Any

try:
    from groq import Groq
except ImportError:
    Groq = None

class RecipeGenerationError(Exception):
    """Custom exception raised when AI recipe generation fails or returns malformed JSON."""
    pass

def generate_fallback_recipe(ingredients: List[str]) -> Dict[str, Any]:
    """
    Generates a custom Indian recipe using Groq API when no curated recipe meets the match threshold.
    
    Args:
        ingredients: List of user-provided ingredient strings.
        
    Returns:
        Dict conforming to the recipe schema with source="ai_generated".
        
    Raises:
        RecipeGenerationError: If the Groq API call fails, times out, or returns invalid JSON.
    """
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise RecipeGenerationError("GROQ_API_KEY environment variable is not configured.")

    if Groq is None:
        raise RecipeGenerationError("groq Python package is not installed.")

    try:
        client = Groq(api_key=api_key)
    except Exception as err:
        raise RecipeGenerationError(f"Failed to initialize Groq client: {err}")

    ingredients_str = ", ".join(ingredients)
    
    prompt = f"""You are an expert Indian home chef. Create a simple, authentic, and delicious Indian recipe using ONLY the following available ingredients: {ingredients_str}. You may also assume standard kitchen staples: salt, oil, and water.

Return ONLY a single valid JSON object. Do NOT include markdown formatting, backticks, code fences, preambles, or postscripts. The JSON structure MUST strictly follow this exact format:
{{
  "name": "Recipe Name",
  "region": "Region or Cuisine Style",
  "cook_time_mins": 20,
  "servings": 2,
  "steps": [
    {{
      "step_number": 1,
      "instruction": "Detailed step instruction...",
      "timer_seconds": 300
    }}
  ],
  "ingredients_used": ["ingredient1", "ingredient2"],
  "source": "ai_generated"
}}"""

    try:
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a helpful Indian culinary AI assistant that outputs raw JSON only."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.4,
            timeout=15.0
        )
    except Exception as e:
        raise RecipeGenerationError(f"Groq API completion failed: {e}")

    if not completion.choices or not completion.choices[0].message.content:
        raise RecipeGenerationError("Groq API returned an empty response.")

    raw_content = completion.choices[0].message.content.strip()

    # Strip markdown code blocks (```json ... ``` or ``` ...)
    cleaned_content = re.sub(r"^```(?:json)?\s*", "", raw_content, flags=re.IGNORECASE)
    cleaned_content = re.sub(r"\s*```$", "", cleaned_content)
    cleaned_content = cleaned_content.strip()

    try:
        recipe_data = json.loads(cleaned_content)
    except json.JSONDecodeError as json_err:
        raise RecipeGenerationError(f"Failed to parse LLM response as JSON: {json_err}")

    # Validate essential schema fields
    if not isinstance(recipe_data, dict) or "name" not in recipe_data or "steps" not in recipe_data:
        raise RecipeGenerationError("LLM response structure does not match the required recipe schema.")

    # Ensure source field is explicitly set
    recipe_data["source"] = "ai_generated"
    
    # Ensure recipe has an ID if missing
    if "id" not in recipe_data:
        recipe_data["id"] = "ai-gen-" + os.urandom(4).hex()
        
    return recipe_data
