import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Bell, CheckCircle } from 'lucide-react';

export default function Timer({ durationSeconds, onComplete, stepTitle }) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeLeft(durationSeconds);
    setIsRunning(false);
    setIsFinished(false);
  }, [durationSeconds]);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setIsFinished(true);
      if (onComplete) onComplete();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    if (isFinished) {
      setTimeLeft(durationSeconds);
      setIsFinished(false);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durationSeconds);
    setIsFinished(false);
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
      border: isFinished ? '1px solid #10b981' : isRunning ? '1px solid #f59e0b' : '1px solid var(--border-glass)',
      textAlign: 'center',
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <Bell size={16} color={isFinished ? "#10b981" : "#f59e0b"} />
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <button 
          className="btn-primary" 
          onClick={toggleTimer}
          style={{ padding: '8px 20px', fontSize: '0.9rem' }}
        >
          {isFinished ? (
            <>
              <CheckCircle size={16} /> Done! Restart
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
      </div>
    </div>
  );
}
