const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const API_BASE_URL = rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl.replace(/\/$/, '')}/api`;

export async function fetchRecipes(query = '', region = 'All') {
  try {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (region && region !== 'All') params.append('region', region);
    
    const response = await fetch(`${API_BASE_URL}/recipes?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.warn('Backend API unavailable:', error);
    return [];
  }
}

export async function fetchRecipeById(id) {
  const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
  if (!response.ok) throw new Error('Recipe not found');
  return response.json();
}

export async function matchIngredients(ingredientsList) {
  const response = await fetch(`${API_BASE_URL}/match-ingredients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients: ingredientsList, min_match_percent: 25.0 })
  });
  if (!response.ok) throw new Error('Failed to match ingredients');
  return response.json();
}

export async function fetchIngredientsList() {
  try {
    const response = await fetch(`${API_BASE_URL}/ingredients`);
    if (!response.ok) throw new Error('Failed');
    const data = await response.json();
    return data.ingredients;
  } catch (e) {
    return [
      "onion", "tomato", "potato", "toor dal", "tamarind", "mustard seeds", 
      "curry leaves", "black pepper", "cumin seeds", "garlic", "ginger", 
      "paneer", "butter", "chickpeas", "basmati rice", "egg", "cauliflower"
    ];
  }
}
