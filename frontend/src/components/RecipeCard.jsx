import React from 'react';
import { Clock, Users, Flame, Volume2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function RecipeCard({ item, onSelectRecipe, isMatchMode = false }) {
  const recipe = isMatchMode ? item.recipe : item;
  const matchPercent = isMatchMode ? item.match_percent : null;
  const missing = isMatchMode ? item.missing_ingredients : [];

  return (
    <div className="glass-card" style={{
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Banner & Region */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <span className="tag-pill">
            <Flame size={12} /> {recipe.region}
          </span>
          
          {isMatchMode && matchPercent !== null && (
            <span className={matchPercent >= 70 ? "tag-pill tag-pill-emerald" : "tag-pill tag-pill-rose"} style={{ fontWeight: 700 }}>
              <CheckCircle2 size={13} /> {matchPercent}% Match
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#fff' }}>
          {recipe.name}
        </h3>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {recipe.description}
        </p>

        {/* Recipe Stats */}
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} color="#f59e0b" /> {recipe.cook_time_mins} mins
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={14} color="#06b6d4" /> {recipe.servings} Servings
          </span>
        </div>

        {/* Missing Ingredients Warning for Mode B */}
        {isMatchMode && missing && missing.length > 0 && (
          <div style={{
            background: 'rgba(244, 63, 94, 0.08)',
            border: '1px dashed rgba(244, 63, 94, 0.25)',
            padding: '8px 12px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontSize: '0.8rem',
            color: '#fb7185'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, marginBottom: '2px' }}>
              <AlertCircle size={13} /> Missing ({missing.length}):
            </div>
            <span>{missing.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <button 
        className="btn-primary" 
        onClick={() => onSelectRecipe(recipe)}
        style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
      >
        <Volume2 size={18} /> Cook with Voice
      </button>
    </div>
  );
}
