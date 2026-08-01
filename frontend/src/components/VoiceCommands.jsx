import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle, Sparkles } from 'lucide-react';

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

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-IN';

      recognition.onresult = (event) => {
        const lastIndex = event.results.length - 1;
        const result = event.results[lastIndex];
        if (result && result.isFinal) {
          const transcript = result[0].transcript.toLowerCase().trim();
          console.log('Voice Command Heard:', transcript);

          // Command Matching Logic
          if (transcript.includes('next')) {
            setLastHeardCommand('"next"');
            if (onNext) onNext();
          } else if (transcript.includes('back') || transcript.includes('previous')) {
            setLastHeardCommand('"previous"');
            if (onPrevious) onPrevious();
          } else if (transcript.includes('repeat') || transcript.includes('say again')) {
            setLastHeardCommand('"repeat"');
            if (onRepeat) onRepeat();
          } else if (transcript.includes('start timer')) {
            setLastHeardCommand('"start timer"');
            if (onStartTimer) onStartTimer();
          } else if (transcript.includes('pause')) {
            setLastHeardCommand('"pause"');
            if (onPauseTimer) onPauseTimer();
          } else if (transcript.includes('stop listening') || transcript.includes('stop')) {
            setLastHeardCommand('"stop"');
            stopListening();
          }
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech Recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setErrorMessage('Microphone access blocked. Enable mic permissions in your browser settings.');
          setIsListening(false);
        } else if (event.error === 'no-speech') {
          // Ignore transient no-speech timeouts
        } else {
          setErrorMessage(`Mic error: ${event.error}`);
        }
      };

      recognition.onend = () => {
        // If still flagged as listening by user, restart recognition automatically
        if (recognitionRef.current && isListening) {
          try {
            recognition.start();
          } catch (e) {
            console.warn('Could not restart recognition automatically:', e);
            setIsListening(false);
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
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn('Error starting recognition:', err);
        setIsListening(true);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.warn('Error stopping recognition:', err);
      }
    }
    setIsListening(false);
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
          background: isListening ? 'rgba(244, 63, 94, 0.15)' : 'rgba(255, 255, 255, 0.04)',
          color: isListening ? '#f43f5e' : 'var(--text-muted)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        {isListening ? (
          <>
            <Mic size={18} className="animate-pulse" color="#f43f5e" />
            <span>Mic ON (Listening...)</span>
          </>
        ) : (
          <>
            <MicOff size={18} />
            <span>Voice Commands</span>
          </>
        )}
      </button>

      {/* Recognized Command Indicator */}
      {isListening && lastHeardCommand && (
        <span style={{ fontSize: '0.75rem', color: '#34d399', marginLeft: '6px' }}>
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
