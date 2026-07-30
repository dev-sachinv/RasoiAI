import React from 'react';
import { Utensils, Sparkles, Search, Volume2 } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(9, 13, 22, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-glass)',
      padding: '16px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand */}
        <div 
          onClick={() => setActiveMode('explore')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
          }}>
            <Utensils size={22} color="#000" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
              Rasoi<span className="gradient-text">AI</span>
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Volume2 size={12} color="#f59e0b" /> Voice Cooking Assistant
            </p>
          </div>
        </div>

        {/* Mode Switcher Navigation */}
        <nav style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: '14px',
          border: '1px solid var(--border-glass)'
        }}>
          <button
            onClick={() => setActiveMode('explore')}
            style={{
              padding: '8px 18px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              background: activeMode === 'explore' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'transparent',
              color: activeMode === 'explore' ? '#000' : 'var(--text-muted)'
            }}
          >
            <Search size={16} /> Mode A: Recipes
          </button>
          
          <button
            onClick={() => setActiveMode('matcher')}
            style={{
              padding: '8px 18px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              background: activeMode === 'matcher' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'transparent',
              color: activeMode === 'matcher' ? '#000' : 'var(--text-muted)'
            }}
          >
            <Sparkles size={16} /> Mode B: Pantry Matcher
          </button>
        </nav>
      </div>
    </header>
  );
}
