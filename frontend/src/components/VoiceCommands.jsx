import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

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

  // Keep ref synchronized with state for callback closures
  useEffect(() => {
    isListeningStateRef.current = isListening;
  }, [isListening]);

  // Real-time instant command matcher
  const processTranscript = (rawText) => {
    if (!rawText) return;
    const text = rawText.toLowerCase().trim();
    const now = Date.now();
    
    // Cooldown guard to prevent rapid multi-triggering
    if (now - lastCommandTimeRef.current < 1200) return;

    // 1. Pause Timer Command
    if (/\b(pause|stop timer|hold|wait|freeze|pause time)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('⏸️ Pause Timer');
      if (onPauseTimer) onPauseTimer();
    }
    // 2. Start Timer Command
    else if (/\b(start timer|start the timer|timer start|begin timer|set timer|play timer|run timer|time start|start|timer)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('▶️ Start Timer');
      if (onStartTimer) onStartTimer();
    }
    // 3. Previous / Back Command
    else if (/\b(back|bak|previous|prev|go back|backward|before|prior)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('◀️ Previous Step');
      if (onPrevious) onPrevious();
    }
    // 4. Next Step Command
    else if (/\b(next|nekst|forward|ahead|continue|proceed|further)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('▶️ Next Step');
      if (onNext) onNext();
    }
    // 5. Repeat Step Command
    else if (/\b(repeat|again|say again|reread|read|one more|pardon)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('🔁 Repeat Instruction');
      if (onRepeat) onRepeat();
    }
    // 6. Stop Listening Command
    else if (/\b(stop listening|turn off mic|mic off|mute|close mic)\b/i.test(text)) {
      lastCommandTimeRef.current = now;
      setLastHeardCommand('⏹️ Mic OFF');
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
      recognition.lang = 'en-US'; // Matches both US & Indian English phonetics

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
        } else if (event.error === 'no-speech') {
          // Normal transient pause
        } else if (event.error === 'aborted') {
          // Handled restart
        } else {
          setErrorMessage(`Mic notice: ${event.error}`);
        }
      };

      recognition.onend = () => {
        // Auto-restart seamless loop if user wants mic active
        if (isListeningStateRef.current && recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            // Ignore if already active
          }
        } else {
          setIsListening(false);
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
            <span>Mic ON (Listening Live)</span>
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
