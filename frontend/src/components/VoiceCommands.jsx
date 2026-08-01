import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';

export default function VoiceCommands({
  onNext,
  onPrevious,
  onRepeat,
  onStartTimer,
  onPauseTimer
}) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastHeardCommand, setLastHeardCommand] = useState('');
  const recognitionRef = useRef(null);
  const lastCommandTimeRef = useRef(0);
  const isListeningStateRef = useRef(false);
  const clearBadgeTimeoutRef = useRef(null);

  // Keep ref synchronized with state for callback closures
  useEffect(() => {
    isListeningStateRef.current = isListening;
  }, [isListening]);

  const updateBadge = (text) => {
    setLastHeardCommand(text);
    if (clearBadgeTimeoutRef.current) clearTimeout(clearBadgeTimeoutRef.current);
    clearBadgeTimeoutRef.current = setTimeout(() => {
      setLastHeardCommand('');
    }, 2500);
  };

  // Real-time instant command matcher
  const processTranscript = (rawText) => {
    if (!rawText) return;
    const text = rawText.toLowerCase().trim();
    const now = Date.now();
    
    // Reduced 600ms cooldown for fast consecutive command execution
    if (now - lastCommandTimeRef.current < 600) return;

    // 1. Pause Timer Command (checked first to prioritize pause)
    if (text.includes('pause') || text.includes('stop timer') || text.includes('hold') || text.includes('wait') || text.includes('freeze')) {
      lastCommandTimeRef.current = now;
      updateBadge('⏸️ Pause Timer');
      if (onPauseTimer) onPauseTimer();
    }
    // 2. Start Timer Command
    else if (text.includes('start timer') || text.includes('begin timer') || text.includes('set timer') || text.includes('play timer') || text.includes('run timer') || text.includes('timer') || text.includes('start')) {
      lastCommandTimeRef.current = now;
      updateBadge('▶️ Start Timer');
      if (onStartTimer) onStartTimer();
    }
    // 3. Previous / Back Command
    else if (text.includes('back') || text.includes('previous') || text.includes('prev') || text.includes('go back') || text.includes('backward')) {
      lastCommandTimeRef.current = now;
      updateBadge('◀️ Previous Step');
      if (onPrevious) onPrevious();
    }
    // 4. Next Step Command
    else if (text.includes('next') || text.includes('forward') || text.includes('ahead') || text.includes('continue') || text.includes('proceed')) {
      lastCommandTimeRef.current = now;
      updateBadge('▶️ Next Step');
      if (onNext) onNext();
    }
    // 5. Repeat Step Command
    else if (text.includes('repeat') || text.includes('again') || text.includes('say again') || text.includes('reread') || text.includes('read')) {
      lastCommandTimeRef.current = now;
      updateBadge('🔁 Repeat Instruction');
      if (onRepeat) onRepeat();
    }
    // 6. Stop Mic Command
    else if (text.includes('stop listening') || text.includes('turn off mic') || text.includes('mic off') || text.includes('close mic')) {
      lastCommandTimeRef.current = now;
      updateBadge('⏹️ Mic OFF');
      stopListening();
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true; // Enables instant sub-100ms response!
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          processTranscript(transcript);
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech Recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setErrorMessage('Microphone permission blocked. Please allow mic in browser settings.');
          setIsListening(false);
          isListeningStateRef.current = false;
        }
      };

      recognition.onend = () => {
        // Continuous auto-restart loop with a small 200ms delay so Chrome never drops the mic!
        if (isListeningStateRef.current) {
          setTimeout(() => {
            if (isListeningStateRef.current && recognitionRef.current) {
              try {
                recognitionRef.current.start();
              } catch (e) {
                // Ignore if already active
              }
            }
          }, 200);
        }
      };

      recognitionRef.current = recognition;
    } catch (e) {
      console.warn('Speech Recognition initialization failed:', e);
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.onresult = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.stop();
        } catch (e) {
          // Cleanup ignore
        }
      }
    };
  }, [onNext, onPrevious, onRepeat, onStartTimer, onPauseTimer]);

  const startListening = () => {
    setErrorMessage('');
    setIsListening(true);
    isListeningStateRef.current = true;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.warn('Recognition start exception:', err);
      }
    }
  };

  const stopListening = () => {
    setIsListening(false);
    isListeningStateRef.current = false;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.warn('Recognition stop exception:', err);
      }
    }
  };

  const toggleMic = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  if (!isSupported) {
    return (
      <div style={{
        fontSize: '0.8rem',
        color: 'var(--text-dim)',
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '6px 12px',
        borderRadius: '8px',
        border: '1px solid var(--border-glass)'
      }}>
        Voice commands aren't supported in this browser — try Chrome or Edge.
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
      <button
        type="button"
        onClick={toggleMic}
        className="btn-secondary"
        style={{
          borderColor: isListening ? '#f43f5e' : 'var(--border-glass)',
          background: isListening ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.04)',
          color: isListening ? '#f43f5e' : 'var(--text-muted)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: isListening ? '0 0 15px rgba(244, 63, 94, 0.4)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        {isListening ? (
          <>
            <Mic size={18} className="animate-pulse" color="#f43f5e" />
            <span>Mic ON (Always Listening)</span>
          </>
        ) : (
          <>
            <MicOff size={18} />
            <span>Voice Commands</span>
          </>
        )}
      </button>

      {/* Instant Executed Command Badge */}
      {isListening && lastHeardCommand && (
        <span style={{
          fontSize: '0.8rem',
          color: '#34d399',
          background: 'rgba(16, 185, 129, 0.15)',
          padding: '2px 8px',
          borderRadius: '6px',
          fontWeight: 600
        }}>
          Executed: {lastHeardCommand}
        </span>
      )}

      {/* Error Message Display */}
      {errorMessage && (
        <div style={{
          fontSize: '0.8rem',
          color: '#fb7185',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: '4px'
        }}>
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
