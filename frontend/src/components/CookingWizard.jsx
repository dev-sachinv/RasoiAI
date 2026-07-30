import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowLeft, ArrowRight, Play, Check, Flame, Clock, Users, Lightbulb } from 'lucide-react';
import Timer from './Timer';

export default function CookingWizard({ recipe, onBack }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [completedSteps, setCompletedSteps] = useState([]);

  const currentStep = recipe.steps[currentStepIndex];
  const totalSteps = recipe.steps.length;

  // Speak function using Web Speech API
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Web Speech API not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;
    
    // Select clean standard English voice (en-US or en-GB)
    const voices = window.speechSynthesis.getVoices();
    const standardEnglishVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && !v.name.includes('Hindi'));
    if (standardEnglishVoice) {
      utterance.voice = standardEnglishVoice;
    }
    utterance.lang = 'en-US';

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Auto speak on step change if autoSpeak is enabled
  useEffect(() => {
    if (autoSpeak && currentStep) {
      const speechPrompt = `Step ${currentStep.step_number}. ${currentStep.instruction}`;
      speakText(speechPrompt);
    }
    return () => {
      stopSpeech();
    };
  }, [currentStepIndex, autoSpeak]);

  const handleNextStep = () => {
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
    }
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleTimerComplete = () => {
    const alertMessage = "Timer finished! You can proceed to the next step.";
    speakText(alertMessage);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 20px' }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button className="btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} /> Exit Cooking Mode
        </button>

        {/* Voice Auto-Play Toggle & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn-secondary" 
            onClick={() => setAutoSpeak(!autoSpeak)}
            style={{
              borderColor: autoSpeak ? 'var(--accent-saffron)' : 'var(--border-glass)',
              color: autoSpeak ? '#fbbf24' : 'var(--text-muted)'
            }}
          >
            {autoSpeak ? <Volume2 size={16} /> : <VolumeX size={16} />}
            Auto-read: {autoSpeak ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Recipe Header Card */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="tag-pill" style={{ marginBottom: '8px' }}>
              <Flame size={12} /> {recipe.region}
            </span>
            <h2 style={{ fontSize: '1.8rem', marginTop: '6px' }}>{recipe.name}</h2>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span><Clock size={14} color="#f59e0b" /> {recipe.cook_time_mins} mins</span>
            <span><Users size={14} color="#06b6d4" /> {recipe.servings} Servings</span>
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
      <div className="glass-card" style={{ padding: '36px 32px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{
            background: 'rgba(245, 158, 11, 0.2)',
            color: '#fbbf24',
            padding: '6px 14px',
            borderRadius: '20px',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            STEP {currentStep.step_number}
          </span>

          <button 
            className="btn-primary" 
            onClick={() => isSpeaking ? stopSpeech() : speakText(`Step ${currentStep.step_number}. ${currentStep.instruction}`)}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            {isSpeaking ? (
              <>
                <VolumeX size={16} /> Stop Voice
              </>
            ) : (
              <>
                <Volume2 size={16} /> Read Aloud 🔊
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

      {/* Step Countdown Timer Component */}
      {currentStep.timer_seconds && (
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
          <button className="btn-primary" onClick={onBack} style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
            <Check size={16} /> Complete Cooking 🎉
          </button>
        )}
      </div>

      {/* Recipe Ingredients Reference Accordion */}
      <div className="glass-card" style={{ padding: '24px', marginTop: '36px' }}>
        <h4 style={{ fontSize: '1.1rem', marginBottom: '14px', color: 'var(--text-muted)' }}>
          Recipe Ingredients Checklist:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
          {recipe.ingredients.map((ing, idx) => (
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
    </div>
  );
}
