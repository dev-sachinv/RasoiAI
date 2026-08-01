import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ArrowLeft, ArrowRight, Play, Check, Flame, Clock, Users, Lightbulb, RefreshCw, Sparkles } from 'lucide-react';
import Timer from './Timer';
import { fetchRecipeById } from '../services/api';

export default function CookingWizard({ recipe, onBack }) {
  const [fullRecipe, setFullRecipe] = useState(recipe);
  const [loading, setLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.95);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Load voices asynchronously for Web Speech API
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        setAvailableVoices(v);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Load full details if steps or ingredients are missing
  useEffect(() => {
    if (!recipe) return;
    if (!recipe.steps || !recipe.ingredients || recipe.ingredients.length === 0) {
      setLoading(true);
      fetchRecipeById(recipe.id)
        .then(data => {
          setFullRecipe(data);
        })
        .catch(err => {
          console.warn('Using provided recipe data fallback:', err);
          setFullRecipe(recipe);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setFullRecipe(recipe);
    }
  }, [recipe]);

  const steps = fullRecipe?.steps || [];
  const ingredients = fullRecipe?.ingredients || [];
  const totalSteps = steps.length;
  const currentStep = steps[currentStepIndex] || null;

  // Robust speak function using Web Speech API
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Web Speech API is not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech & resume if stuck
    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    utterance.volume = 1.0;
    utterance.pitch = 1.0;
    
    // Select best available English voice
    const voicesList = availableVoices.length > 0 ? availableVoices : window.speechSynthesis.getVoices();
    const standardEnglishVoice = voicesList.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && !v.name.includes('Hindi'))
                              || voicesList.find(v => v.lang && v.lang.startsWith('en'))
                              || voicesList[0];

    if (standardEnglishVoice) {
      utterance.voice = standardEnglishVoice;
      utterance.lang = standardEnglishVoice.lang;
    } else {
      utterance.lang = 'en-US';
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
    setHasUserInteracted(true);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Auto speak on step change if autoSpeak is enabled and user has interacted
  useEffect(() => {
    if (autoSpeak && currentStep && hasUserInteracted) {
      const speechPrompt = `Step ${currentStep.step_number || currentStepIndex + 1}. ${currentStep.instruction}`;
      speakText(speechPrompt);
    }
    return () => {
      stopSpeech();
    };
  }, [currentStepIndex, autoSpeak, currentStep]);

  const handleNextStep = () => {
    setHasUserInteracted(true);
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
    }
    if (currentStepIndex < totalSteps - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      if (autoSpeak && steps[nextIdx]) {
        speakText(`Step ${steps[nextIdx].step_number || nextIdx + 1}. ${steps[nextIdx].instruction}`);
      }
    }
  };

  const handlePrevStep = () => {
    setHasUserInteracted(true);
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      if (autoSpeak && steps[prevIdx]) {
        speakText(`Step ${steps[prevIdx].step_number || prevIdx + 1}. ${steps[prevIdx].instruction}`);
      }
    }
  };

  const handleTimerComplete = () => {
    const alertMessage = "Timer finished! You can proceed to the next step.";
    speakText(alertMessage);
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '900px', margin: '60px auto', textAlign: 'center', color: 'var(--text-muted)' }}>
        <RefreshCw className="animate-spin" size={32} color="#f59e0b" style={{ margin: '0 auto 16px auto', display: 'block' }} />
        Loading recipe steps & preparation guide...
      </div>
    );
  }

  if (!fullRecipe || totalSteps === 0) {
    return (
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '32px' }} className="glass-card">
        <h3 style={{ marginBottom: '16px', color: '#fff' }}>Preparation details coming soon!</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
          Step-by-step instructions for {recipe?.name || 'this dish'} are being updated.
        </p>
        <button className="btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Recipe Explorer
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 20px' }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <button className="btn-secondary" onClick={() => { stopSpeech(); onBack(); }}>
          <ArrowLeft size={16} /> Exit Cooking Mode
        </button>

        {/* Voice Auto-Play Toggle & Test Voice Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button 
            className="btn-secondary" 
            onClick={() => {
              const newAuto = !autoSpeak;
              setAutoSpeak(newAuto);
              if (newAuto && currentStep) {
                speakText(`Step ${currentStep.step_number || currentStepIndex + 1}. ${currentStep.instruction}`);
              } else {
                stopSpeech();
              }
            }}
            style={{
              borderColor: autoSpeak ? 'var(--accent-saffron)' : 'var(--border-glass)',
              color: autoSpeak ? '#fbbf24' : 'var(--text-muted)'
            }}
          >
            {autoSpeak ? <Volume2 size={16} /> : <VolumeX size={16} />}
            Auto-read: {autoSpeak ? 'ON' : 'OFF'}
          </button>

          <button 
            className="btn-secondary"
            onClick={() => speakText("Voice audio is working perfectly! Welcome to Rasoi AI voice cooking assistant.")}
            style={{ fontSize: '0.8rem', padding: '6px 12px' }}
          >
            🔊 Test Audio Voice
          </button>
        </div>
      </div>

      {/* Autoplay Browser Notice Banner */}
      {!hasUserInteracted && (
        <div style={{
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '12px 18px',
          borderRadius: '12px',
          marginBottom: '20px',
          fontSize: '0.88rem',
          color: '#fef08a',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Volume2 size={18} color="#fbbf24" />
            <span>Tap below to start English voice narration for this recipe.</span>
          </div>
          <button 
            className="btn-primary"
            onClick={() => {
              if (currentStep) {
                speakText(`Welcome to ${fullRecipe.name}. Step 1. ${currentStep.instruction}`);
              }
            }}
            style={{ padding: '6px 14px', fontSize: '0.8rem' }}
          >
            🔊 Start Voice Assistant
          </button>
        </div>
      )}

      {/* Recipe Header Card */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="tag-pill" style={{ marginBottom: '8px' }}>
              <Flame size={12} /> {fullRecipe.region || 'Indian'}
            </span>
            <h2 style={{ fontSize: '1.8rem', marginTop: '6px' }}>{fullRecipe.name}</h2>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span><Clock size={14} color="#f59e0b" /> {fullRecipe.cook_time_mins || 25} mins</span>
            <span><Users size={14} color="#06b6d4" /> {fullRecipe.servings || 4} Servings</span>
          </div>
        </div>
      </div>

      {/* Step Progress Tracker */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <span>Step {currentStepIndex + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% Complete</span>
        </div>
        
        <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${((currentStepIndex + 1) / totalSteps) * 100}%`,
            background: 'linear-gradient(90deg, #f59e0b, #f43f5e)',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Main Step Instruction Card */}
      {currentStep && (
        <div className="glass-card" style={{ padding: '36px 32px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#fbbf24',
              padding: '6px 14px',
              borderRadius: '20px',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}>
              STEP {currentStep.step_number || currentStepIndex + 1}
            </span>

            <button 
              className="btn-primary" 
              onClick={() => isSpeaking ? stopSpeech() : speakText(`Step ${currentStep.step_number || currentStepIndex + 1}. ${currentStep.instruction}`)}
              style={{ padding: '8px 20px', fontSize: '0.9rem' }}
            >
              {isSpeaking ? (
                <>
                  <VolumeX size={18} /> Stop Voice ⏹️
                </>
              ) : (
                <>
                  <Volume2 size={18} /> Read Aloud 🔊
                </>
              )}
            </button>
          </div>

          <h3 style={{ fontSize: '1.45rem', lineHeight: '1.6', fontWeight: 500, color: '#f8fafc', marginBottom: '20px' }}>
            {currentStep.instruction}
          </h3>

          {/* Optional Chef Tip */}
          {currentStep.tips && (
            <div style={{
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}>
              <Lightbulb size={18} color="#38bdf8" style={{ minWidth: '18px', marginTop: '2px' }} />
              <div>
                <strong>Chef Tip:</strong> {currentStep.tips}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step Countdown Timer Component */}
      {currentStep?.timer_seconds && (
        <Timer 
          durationSeconds={currentStep.timer_seconds} 
          onComplete={handleTimerComplete}
          stepTitle={`Step ${currentStep.step_number}`}
        />
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
        <button 
          className="btn-secondary" 
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          style={{ opacity: currentStepIndex === 0 ? 0.4 : 1, cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer' }}
        >
          <ArrowLeft size={16} /> Previous Step
        </button>

        {currentStepIndex < totalSteps - 1 ? (
          <button className="btn-primary" onClick={handleNextStep}>
            Next Step <ArrowRight size={16} />
          </button>
        ) : (
          <button className="btn-primary" onClick={() => { stopSpeech(); onBack(); }} style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
            <Check size={16} /> Complete Cooking 🎉
          </button>
        )}
      </div>

      {/* Recipe Ingredients Reference Accordion */}
      {ingredients.length > 0 && (
        <div className="glass-card" style={{ padding: '24px', marginTop: '36px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '14px', color: 'var(--text-muted)' }}>
            Recipe Ingredients Checklist:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
            {ingredients.map((ing, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                color: ing.is_optional ? 'var(--text-dim)' : 'var(--text-main)',
                padding: '6px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)'
              }}>
                <Check size={14} color="#f59e0b" />
                <span>
                  <strong>{ing.quantity} {ing.unit}</strong> {ing.name} {ing.is_optional && '(optional)'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
