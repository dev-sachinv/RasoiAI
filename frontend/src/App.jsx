import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import IngredientMatcher from './components/IngredientMatcher';
import CookingWizard from './components/CookingWizard';
import { Heart, Github } from 'lucide-react';

export default function App() {
  const [activeMode, setActiveMode] = useState('explore'); // 'explore' or 'matcher'
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activeMode={activeMode} setActiveMode={(mode) => {
        setActiveMode(mode);
        setActiveRecipe(null);
      }} />

      <main style={{ flex: 1, paddingBottom: '60px' }}>
        {activeRecipe ? (
          <CookingWizard 
            recipe={activeRecipe} 
            onBack={() => setActiveRecipe(null)} 
          />
        ) : activeMode === 'explore' ? (
          <RecipeList 
            onSelectRecipe={(recipe) => setActiveRecipe(recipe)} 
          />
        ) : (
          <IngredientMatcher 
            onSelectRecipe={(recipe) => setActiveRecipe(recipe)} 
          />
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '24px',
        borderTop: '1px solid var(--border-glass)',
        color: 'var(--text-dim)',
        fontSize: '0.85rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          Crafted with <Heart size={14} color="#f43f5e" fill="#f43f5e" /> for Indian Cuisine • RasoiAI Phase 1 MVP
        </div>
      </footer>
    </div>
  );
}
