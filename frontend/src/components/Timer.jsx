import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Bell, CheckCircle } from 'lucide-react';

// Play pleasant 3-tone chime using Web Audio API oscillator (100% offline & browser native)
function playTimerChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      const startTime = ctx.currentTime + index * 0.18;
      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  } catch (e) {
    console.warn('Timer chime sound error:', e);
  }
}

export default function Timer({ durationSeconds, onComplete, stepTitle }) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const hasTriggeredCompleteRef = useRef(false);

  useEffect(() => {
    setTimeLeft(durationSeconds);
    setIsRunning(false);
    setIsFinished(false);
    hasTriggeredCompleteRef.current = false;
  }, [durationSeconds]);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            setIsFinished(true);
            if (!hasTriggeredCompleteRef.current) {
              hasTriggeredCompleteRef.current = true;
              playTimerChime(); // Play 3-tone chime audio
              if (onComplete) onComplete(); // Trigger voice alert
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const toggleTimer = () => {
    if (isFinished) {
      setTimeLeft(durationSeconds);
      setIsFinished(false);
      hasTriggeredCompleteRef.current = false;
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durationSeconds);
    setIsFinished(false);
    hasTriggeredCompleteRef.current = false;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.max(0, (timeLeft / durationSeconds) * 100);

  return (
    <div className={`glass-card ${isRunning ? 'timer-running' : ''}`} style={{
      padding: '20px',
      borderRadius: '16px',
      background: 'rgba(15, 23, 42, 0.9)',
      border: isFinished ? '2px solid #10b981' : isRunning ? '2px solid #f59e0b' : '1px solid var(--border-glass)',
      textAlign: 'center',
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <Bell size={16} color={isFinished ? "#10b981" : "#f59e0b"} className={isRunning ? "animate-bounce" : ""} />
        <span>Cooking Timer ({Math.round(durationSeconds / 60)} mins)</span>
      </div>

      {/* Large Digital Clock Display */}
      <div style={{
        fontSize: '2.8rem',
        fontWeight: 800,
        fontFamily: 'monospace',
        letterSpacing: '2px',
        color: isFinished ? '#34d399' : isRunning ? '#fbbf24' : '#fff',
        margin: '8px 0'
      }}>
        {formatTime(timeLeft)}
      </div>

      {/* Visual Progress Bar */}
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
        margin: '12px 0 16px 0'
      }}>
        <div style={{
          height: '100%',
          width: `${progressPercent}%`,
          background: isFinished ? '#10b981' : 'linear-gradient(90deg, #f59e0b, #f43f5e)',
          transition: 'width 1s linear'
        }} />
      </div>

      {/* Control Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button 
          className="btn-primary" 
          onClick={toggleTimer}
          style={{ padding: '8px 20px', fontSize: '0.9rem' }}
        >
          {isFinished ? (
            <>
              <CheckCircle size={16} /> Timer Complete! Restart
            </>
          ) : isRunning ? (
            <>
              <Pause size={16} /> Pause
            </>
          ) : (
            <>
              <Play size={16} /> Start Timer
            </>
          )}
        </button>

        <button 
          className="btn-secondary" 
          onClick={resetTimer}
          style={{ padding: '8px 16px' }}
        >
          <RotateCcw size={16} /> Reset
        </button>

        {/* Quick 5-sec test button for user verification */}
        <button 
          className="btn-secondary"
          onClick={() => {
            resetTimer();
            setTimeLeft(5);
            setIsRunning(true);
          }}
          style={{ fontSize: '0.75rem', padding: '4px 10px' }}
        >
          ⏱️ Test 5s Alarm
        </button>
      </div>
    </div>
  );
}
