import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { Sparkles, Plus, X, Flame, ChefHat } from 'lucide-react';
import { matchIngredients, fetchIngredientsList } from '../services/api';

const POPULAR_STAPLES = [
  "onion", "tomato", "potato", "toor dal", "tamarind", 
  "mustard seeds", "garlic", "ginger", "paneer", "chickpeas", 
  "curry leaves", "black pepper", "egg", "cauliflower"
];

export default function IngredientMatcher({ onSelectRecipe }) {
  const [selectedIngredients, setSelectedIngredients] = useState(["onion", "tomato", "toor dal"]);
  const [inputVal, setInputVal] = useState('');
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [availableList, setAvailableList] = useState([]);

  useEffect(() => {
    fetchIngredientsList().then(setAvailableList);
    // Initial match
    handleFindRecipes(["onion", "tomato", "toor dal"]);
  }, []);

  const handleAddIngredient = (item) => {
    const trimmed = item.trim().toLowerCase();
    if (trimmed && !selectedIngredients.includes(trimmed)) {
      const updated = [...selectedIngredients, trimmed];
      setSelectedIngredients(updated);
      setInputVal('');
      handleFindRecipes(updated);
    }
  };

  const handleRemoveIngredient = (item) => {
    const updated = selectedIngredients.filter(i => i !== item);
    setSelectedIngredients(updated);
    if (updated.length > 0) {
      handleFindRecipes(updated);
    } else {
      setMatches([]);
    }
  };

  const handleFindRecipes = async (ingredientsList = selectedIngredients) => {
    if (!ingredientsList || ingredientsList.length === 0) return;
    setLoading(true);
    try {
      const res = await matchIngredients(ingredientsList);
      setMatches(res.matches || []);
    } catch (err) {
      console.error('Error matching ingredients:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '20px',
          background: 'rgba(245, 158, 11, 0.15)',
          color: '#fbbf24',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          <Sparkles size={14} /> Mode B: Smart Pantry Matcher
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
          What ingredients do you <span className="gradient-text">have right now?</span>
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Enter your pantry items (e.g. <i>onion, pyaz, toor dal</i>) — our algorithm finds the best matching recipes and highlights any gaps.
        </p>
      </div>

      {/* Pantry Builder Card */}
      <div className="glass-card" style={{ padding: '28px', marginBottom: '40px' }}>
        {/* Ingredient Tag Input */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
            Your Selected Pantry Items:
          </label>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            alignItems: 'center',
            padding: '12px',
            borderRadius: '12px',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid var(--border-glass)',
            minHeight: '56px'
          }}>
            {selectedIngredients.map((item) => (
              <span key={item} className="tag-pill" style={{ padding: '6px 14px', fontSize: '0.9rem' }}>
                {item}
                <X 
                  size={14} 
                  style={{ cursor: 'pointer', marginLeft: '4px' }} 
                  onClick={() => handleRemoveIngredient(item)}
                />
              </span>
            ))}

            <input
              type="text"
              placeholder="Type ingredient (e.g., pyaz, tomato)..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ',') {
                  e.preventDefault();
                  handleAddIngredient(inputVal);
                }
              }}
              style={{
                flex: 1,
                minWidth: '200px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>
        </div>

        {/* Quick Add Staples */}
        <div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', marginBottom: '10px' }}>
            Tap to quick add staples:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {POPULAR_STAPLES.map((staple) => {
              const isSelected = selectedIngredients.includes(staple);
              return (
                <button
                  key={staple}
                  onClick={() => isSelected ? handleRemoveIngredient(staple) : handleAddIngredient(staple)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--accent-saffron)' : 'var(--border-glass)',
                    background: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: isSelected ? '#fbbf24' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isSelected ? <X size={12} /> : <Plus size={12} />} {staple}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ChefHat color="#f59e0b" size={24} /> 
            Matched Recipes ({matches.length})
          </h3>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            Calculating ingredient match scores...
          </div>
        ) : matches.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            Add a few more ingredients above to discover matching recipes!
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {matches.map((item) => (
              <RecipeCard
                key={item.recipe.id}
                item={item}
                onSelectRecipe={onSelectRecipe}
                isMatchMode={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
