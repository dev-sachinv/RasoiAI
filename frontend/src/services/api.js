// Frontend API service for RasoiAI with resilient fallback client engine

import { SEED_RECIPES, clientMatchIngredients } from '../data/seedRecipes';

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const API_BASE_URL = rawBaseUrl.endsWith('/api') ? rawBaseUrl : `${rawBaseUrl.replace(/\/$/, '')}/api`;

export async function fetchRecipes(query = '', region = 'All') {
  try {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (region && region !== 'All') params.append('region', region);
    
    const response = await fetch(`${API_BASE_URL}/recipes?${params.toString()}`);
    if (!response.ok) throw new Error('Backend HTTP error');
    const data = await response.json();
    if (data.recipes && data.recipes.length > 0) {
      return data.recipes;
    }
  } catch (error) {
    console.warn('Backend API connecting or starting up, using client fallback dataset:', error);
  }

  // Resilient fallback client dataset
  let results = SEED_RECIPES;
  if (region && region !== 'All') {
    results = results.filter(r => r.region.toLowerCase() === region.toLowerCase());
  }
  if (query && query.strip()) {
    const q = query.toLowerCase();
    results = results.filter(r => r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q));
  }
  return results;
}

export async function fetchRecipeById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
    if (response.ok) return await response.json();
  } catch (e) {
    console.warn('Backend API fallback for single recipe:', e);
  }
  const recipe = SEED_RECIPES.find(r => r.id === id);
  if (recipe) return recipe;
  throw new Error('Recipe not found');
}

export async function matchIngredients(ingredientsList) {
  try {
    const response = await fetch(`${API_BASE_URL}/match-ingredients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: ingredientsList, min_match_percent: 25.0 })
    });
    if (response.ok) {
      const data = await response.json();
      if (data.matches) return data;
    }
  } catch (err) {
    console.warn('Backend matching connecting, running client matching engine:', err);
  }

  // Resilient fallback matching
  const matches = clientMatchIngredients(ingredientsList, 25.0);
  return {
    user_ingredients: ingredientsList,
    total_matched_recipes: matches.length,
    matches
  };
}

export async function fetchIngredientsList() {
  try {
    const response = await fetch(`${API_BASE_URL}/ingredients`);
    if (response.ok) {
      const data = await response.json();
      if (data.ingredients) return data.ingredients;
    }
  } catch (e) {
    console.warn('Backend API fallback for ingredients list');
  }

  return [
    "onion", "tomato", "potato", "toor dal", "tamarind", "mustard seeds", 
    "curry leaves", "black pepper", "cumin seeds", "garlic", "ginger", 
    "paneer", "butter", "chickpeas", "basmati rice", "egg", "cauliflower"
  ];
}
