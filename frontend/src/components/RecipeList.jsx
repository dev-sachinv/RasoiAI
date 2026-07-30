import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { fetchRecipes } from '../services/api';

const REGIONS = ['All', 'Tamil Nadu', 'North Indian', 'South Indian', 'Punjabi', 'Kerala', 'Hyderabadi'];

export default function RecipeList({ onSelectRecipe }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    loadRecipes();
  }, [selectedRegion]);

  const loadRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes(searchQuery, selectedRegion);
      setRecipes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadRecipes();
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Header & Description */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
          Explore <span className="gradient-text">Authentic Indian Recipes</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Pick a dish to get step-by-step voice guidance with automated cooking timers.
        </p>
      </div>

      {/* Search & Region Filters */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '36px'
      }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '12px' }}>
          <div style={{
            position: 'relative',
            flex: 1
          }}>
            <Search 
              size={18} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search dishes (e.g. Sambar, Paneer, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                borderRadius: '12px',
                background: 'rgba(22, 30, 46, 0.9)',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border 0.2s ease'
              }}
            />
          </div>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>

        {/* Region Chips */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          {REGIONS.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={selectedRegion === reg ? "btn-primary" : "btn-secondary"}
              style={{ padding: '6px 16px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
          <RefreshCw className="animate-spin" size={32} color="#f59e0b" style={{ margin: '0 auto 16px auto', display: 'block' }} />
          Loading delicious recipes...
        </div>
      ) : recipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }} className="glass-card">
          <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>No recipes found matching your filter.</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedRegion('All'); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              item={recipe} 
              onSelectRecipe={onSelectRecipe} 
              isMatchMode={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
