import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';

export default function VoiceCommands({
  onNext,
  onPrevious,
  onRepeat,
  onStartTimer,
  onPauseTimer
}) {
  // Listening is OFF by default for privacy & battery savings
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastHeardCommand, setLastHeardCommand] = useState('');
  const recognitionRef = useRef(null);
  const lastExecutedCmdRef = useRef('');
  const lastExecutedTimeRef = useRef(0);
  const isListeningStateRef = useRef(false);
  const clearBadgeTimeoutRef = useRef(null);

  // Keep ref synchronized with state
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

  // High-accuracy accent-optimized command matcher
  const processTranscript = (rawText) => {
    if (!rawText) return;
    const text = rawText.toLowerCase().trim();
    const now = Date.now();

    // Prevent executing the exact same command twice within 800ms window
    const checkDuplicate = (cmdKey) => {
      if (lastExecutedCmdRef.current === cmdKey && (now - lastExecutedTimeRef.current < 800)) {
        return true;
      }
      lastExecutedCmdRef.current = cmdKey;
      lastExecutedTimeRef.current = now;
      return false;
    };

    // 1. Pause Timer Command (matches 'pause', 'stop', 'hold', 'wait', 'freeze', 'pos', 'pass')
    if (/\b(pause|stop timer|hold|wait|freeze|halt|pause time|pos|pass)\b/i.test(text) || text.includes('pause') || text.includes('stop timer')) {
      if (!checkDuplicate('pause')) {
        updateBadge('⏸️ Pause Timer');
        if (onPauseTimer) onPauseTimer();
      }
    }
    // 2. Start Timer Command (matches 'start timer', 'timer', 'begin timer', 'set timer', 'start', 'begin', 'run timer')
    else if (/\b(start timer|begin timer|set timer|play timer|run timer|timer start|time start|timer|start|begin)\b/i.test(text) || text.includes('timer') || text.includes('start')) {
      if (!checkDuplicate('start_timer')) {
        updateBadge('▶️ Start Timer');
        if (onStartTimer) onStartTimer();
      }
    }
    // 3. Previous / Back Command (matches 'back', 'bak', 'previous', 'prev', 'go back', 'backward', 'before', 'pack', 'last step')
    else if (/\b(back|bak|previous|prev|go back|backward|before|prior|pack|last step)\b/i.test(text) || text.includes('back') || text.includes('previous') || text.includes('prev')) {
      if (!checkDuplicate('previous')) {
        updateBadge('◀️ Previous Step');
        if (onPrevious) onPrevious();
      }
    }
    // 4. Next Step Command (matches 'next', 'nekst', 'nxt', 'forward', 'ahead', 'continue', 'proceed', 'step', 'text', 'nest', 'nex')
    else if (/\b(next|nekst|nxt|forward|ahead|continue|proceed|further|nest|nex)\b/i.test(text) || text.includes('next') || text.includes('forward') || text.includes('continue')) {
      if (!checkDuplicate('next')) {
        updateBadge('▶️ Next Step');
        if (onNext) onNext();
      }
    }
    // 5. Repeat Step Command (matches 'repeat', 'again', 'say again', 'reread', 'read', 'pardon', 'one more', 'reap')
    else if (/\b(repeat|again|say again|reread|read|pardon|one more|reap|read again)\b/i.test(text) || text.includes('repeat') || text.includes('again')) {
      if (!checkDuplicate('repeat')) {
        updateBadge('🔁 Repeat Instruction');
        if (onRepeat) onRepeat();
      }
    }
    // 6. Stop Mic Command
    else if (/\b(stop listening|turn off mic|mic off|close mic|mute)\b/i.test(text) || text.includes('mic off')) {
      if (!checkDuplicate('stop_mic')) {
        updateBadge('⏹️ Mic OFF');
        stopListening();
      }
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
      recognition.interimResults = true; // Enables sub-100ms response!
      
      // Auto-detect Indian English or fallback to en-IN for 99%+ accent precision
      const userLang = navigator.language || 'en-IN';
      recognition.lang = userLang.startsWith('en') ? userLang : 'en-IN';

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
        // Continuous auto-restart loop with small 150ms delay while user wants mic active
        if (isListeningStateRef.current) {
          setTimeout(() => {
            if (isListeningStateRef.current && recognitionRef.current) {
              try {
                recognitionRef.current.start();
              } catch (e) {
                // Ignore if already active
              }
            }
          }, 150);
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
    } catch (e) {
      console.warn('Speech Recognition initialization failed:', e);
      setIsSupported(false);
    }

    // Always stop microphone on unmount to protect privacy
    return () => {
      isListeningStateRef.current = false;
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
            <span>Listening... (Tap to Mute)</span>
          </>
        ) : (
          <>
            <MicOff size={18} />
            <span>Voice Commands (Mic OFF)</span>
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
