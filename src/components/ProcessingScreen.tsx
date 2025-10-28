import { useEffect, useState } from 'react';
import svgPaths from "../imports/checkIconPaths";
import AppHeader from './AppHeader';
import PageHeader from './PageHeader';
import Breadcrumbs from './Breadcrumbs';

interface ProcessingStep {
  label: string;
  completed: boolean;
  active: boolean;
  error?: boolean;
}

// Musical Staff with Animated Notes
function MusicalStaff({ isActive, currentStep }: { isActive: boolean; currentStep: number }) {
  const [notes, setNotes] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (!isActive) return;

    // Generate random notes
    const generateNotes = () => {
      const newNotes = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 4, // 0-4 for staff positions
        delay: Math.random() * 2,
      }));
      setNotes(newNotes);
    };

    generateNotes();
    const interval = setInterval(generateNotes, 3000);
    
    return () => clearInterval(interval);
  }, [isActive]);

  // Different note symbols based on current step
  const getNoteSymbol = () => {
    const symbols = ['♪', '♫', '♬', '♩'];
    return symbols[currentStep % symbols.length];
  };

  return (
    <div className="relative w-[500px] h-[400px] flex items-center justify-center bg-gradient-to-br from-white/40 to-white/20 rounded-3xl backdrop-blur-sm border-2 border-black/10 shadow-xl overflow-hidden">
      {/* Staff Lines */}
      <div className="absolute inset-0 flex flex-col justify-center px-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[2px] bg-black/80 my-4 shadow-sm"
          />
        ))}
      </div>

      {/* Treble Clef */}
      <div className="absolute left-8 text-7xl font-serif text-black/90 z-10 animate-float">
        𝄞
      </div>

      {/* Animated Notes */}
      {isActive && notes.map((note) => {
        const hue = (note.y * 60) + 180;
        return (
          <div
            key={note.id}
            className="absolute text-5xl font-bold animate-note-float [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]"
            style={{
              left: `${note.x}%`,
              top: `${20 + note.y * 15}%`,
              animationDelay: `${note.delay}s`,
              color: `hsl(${hue}, 70%, 40%)`,
            }}
          >
            {getNoteSymbol()}
          </div>
        );
      })}

      {/* Pitch/Key Indicator */}
      {isActive && (
        <div className="absolute bottom-6 right-8 bg-black/80 text-white px-6 py-3 rounded-full font-['Figtree:Bold',_sans-serif] text-lg shadow-lg backdrop-blur-sm animate-pulse-subtle">
          {currentStep === 0 && 'Analyzing...'}
          {currentStep === 1 && 'Detecting Pitch'}
          {currentStep === 2 && 'Key: C Major'}
          {currentStep === 3 && 'Tempo: 120 BPM'}
        </div>
      )}

      {/* Musical waves in background - removed due to Safari incompatibility */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="none">
          <path
            d="M0,200 Q125,150 250,200 T500,200"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M0,220 Q125,170 250,220 T500,220"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function CheckCircle({ completed, active, error }: { completed: boolean; active: boolean; error?: boolean }) {
  const strokeColor = error ? "#DC2626" : (completed || active ? "#1E1E1E" : "#DADADA");
  const pathData = completed ? svgPaths.peb9f000 : svgPaths.pf7f9280;
  const fillColor = completed ? "#22C55E" : "transparent";
  
  return (
    <div 
      className={`relative shrink-0 size-[50.208px] transition-all duration-300 ${
        active ? 'scale-110' : 'scale-100'
      } ${error ? 'shake' : ''}`}
      data-name="Check circle"
      role="status"
      aria-label={active ? "Processing" : completed ? "Completed" : error ? "Error" : "Pending"}
    >
      <svg className="block size-full relative z-10" fill={fillColor} preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          {error ? (
            <>
              <circle cx="25.5" cy="25.5" r="23.5" stroke={strokeColor} strokeWidth="4" fill="none" />
              <path d="M17 17 L34 34 M34 17 L17 34" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            </>
          ) : (
            <path 
              d={pathData} 
              id="Icon" 
              stroke={strokeColor}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="4.18402"
            />
          )}
        </g>
      </svg>
    </div>
  );
}

function ProcessingStepComponent({ 
  step, 
  gap, 
  onRetry 
}: { 
  step: ProcessingStep; 
  gap: string; 
  onRetry?: () => void;
}) {
  const textColor = step.error ? "text-red-600" : (step.completed || step.active ? "text-black" : "text-[#dadada]");
  const opacity = step.completed ? "opacity-60" : "opacity-100";
  const gapClass = gap === '41.84' ? 'gap-[41.84px]' : 'gap-[20px]';
  
  return (
    <div 
      className={`content-stretch flex items-center relative shrink-0 transition-all duration-500 ${gapClass}`}
      aria-current={step.active ? "step" : undefined}
    >
      <p 
        className={`font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-nowrap whitespace-pre ${textColor} ${opacity} transition-all duration-500 ${
          step.active ? 'text-[36px] scale-105' : 'text-[32px] scale-100'
        }`}
      >
        {step.label}
      </p>
      
      <CheckCircle completed={step.completed} active={step.active} error={step.error} />
      
      {step.error && onRetry && (
        <button
          onClick={onRetry}
          className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-['Figtree',_sans-serif] hover:bg-red-700 transition-colors"
          aria-label="Retry this step"
        >
          Retry
        </button>
      )}
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  const roundedProgress = Math.round(progress);
  
  return (
    <div 
      className="absolute top-0 left-0 w-full h-2 bg-[#dadada]/30 z-50"
      role="progressbar"
      aria-label="Processing progress"
      aria-valuenow={roundedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="h-full bg-gradient-to-r from-black via-gray-700 to-black transition-all duration-500 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}

function SuccessOverlay() {
  const confettiColors = ['bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
  
  return (
    <div 
      className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
      role="alert"
      aria-live="polite"
    >
      <div className="bg-white rounded-3xl p-12 shadow-2xl animate-scaleIn text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-['Figtree:Bold',_sans-serif] font-bold text-black mb-2">
          Processing Complete!
        </h2>
        <p className="text-gray-600 font-['Figtree',_sans-serif]">
          Your music is ready for analysis
        </p>
      </div>
      
      {/* Confetti effect */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full animate-confetti ${confettiColors[i % 5]}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

function Group({ isProcessing, currentStep }: { isProcessing: boolean; currentStep: number }) {
  return (
    <div className="relative w-[550px] h-[450px] flex items-center justify-center max-md:hidden">
      <MusicalStaff isActive={isProcessing} currentStep={currentStep} />
    </div>
  );
}

export default function ProcessingScreen({ 
  onComplete, 
  fileName = "audio-file.mp3" 
}: { 
  onComplete: () => void;
  fileName?: string;
}) {
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { label: "Validating format", completed: false, active: true },
    { label: "Extracting pitch", completed: false, active: false },
    { label: "Identifying key signature", completed: false, active: false },
    { label: "Setting tempo", completed: false, active: false },
  ]);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(6);
  const [canCancel, setCanCancel] = useState(true);

  const isProcessing = steps.some(step => step.active || !step.completed);
  const currentStepIndex = steps.findIndex(step => step.active);

  useEffect(() => {
    const stepDuration = 1500;
    let currentTime = 6;
    
    const countdownInterval = setInterval(() => {
      currentTime -= 0.1;
      setTimeRemaining(Math.max(0, currentTime));
    }, 100);
    
    const timers = steps.map((_, index) => 
      setTimeout(() => {
        setSteps(prev => prev.map((step, i) => {
          if (i < index) return { ...step, completed: true, active: false };
          if (i === index) return { ...step, completed: false, active: true };
          return step;
        }));
        
        setProgress(((index + 1) / steps.length) * 100);
        
        // Announce step change for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Step ${index + 1} of ${steps.length}: ${steps[index].label}`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setSteps(prev => prev.map((step, i) => 
              i === steps.length - 1 ? { ...step, completed: true, active: false } : step
            ));
            setProgress(100);
            setCanCancel(false);
            
            setTimeout(() => {
              setShowSuccess(true);
              setTimeout(() => {
                onComplete();
              }, 2000);
            }, 500);
          }, stepDuration);
        }
      }, index * stepDuration)
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(countdownInterval);
    };
  }, [onComplete, steps.length]);

  const handleCancel = () => {
    if (canCancel && window.confirm('Are you sure you want to cancel processing?')) {
      window.history.back();
    }
  };

  const handleRetry = (index: number) => {
    setSteps(prev => prev.map((step, i) => 
      i === index ? { ...step, error: false, active: true } : step
    ));
  };

  const stepGaps = ["40px", "40px", "40px", "40px"];

  return (
    <div 
      className="bg-[#f8f3eb] relative w-full min-h-screen overflow-auto"
      role="main"
      aria-label="Processing audio file"
    >
      <AppHeader
        currentStep={1}
        totalSteps={3}
        showProgress={true}
      />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-4">
        <Breadcrumbs
          steps={["Select Instruments", "Processing", "Results"]}
          currentStep={1}
        />
        <PageHeader
          title="Creating your harmony..."
          subtitle="We're generating your personalized sheet music. This may take a moment."
        />
      </div>

      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <style>{`
        @keyframes note-float {
          0% {
            transform: translateX(-50px) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(550px) translateY(-20px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes wave {
          0% {
            d: path("M0,200 Q125,150 250,200 T500,200");
          }
          50% {
            d: path("M0,200 Q125,250 250,200 T500,200");
          }
          100% {
            d: path("M0,200 Q125,150 250,200 T500,200");
          }
        }
        
        @keyframes wave-delayed {
          0% {
            d: path("M0,220 Q125,170 250,220 T500,220");
          }
          50% {
            d: path("M0,220 Q125,270 250,220 T500,220");
          }
          100% {
            d: path("M0,220 Q125,170 250,220 T500,220");
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-note-float { animation: note-float 6s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-wave { animation: wave 4s ease-in-out infinite; }
        .animate-wave-delayed { animation: wave-delayed 4s ease-in-out infinite 0.5s; }
        .animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-confetti { animation: confetti forwards; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .shake { animation: shake 0.5s; }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
      
      <ProgressBar progress={progress} />
      
      {showSuccess && <SuccessOverlay />}
      
      {/* Centered content wrapper */}
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Header with file info - moved to top with improved styling */}
        <div className="w-full mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-black/5 max-w-4xl mx-auto">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-[#1E1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <p className="text-2xl text-[#1E1E1E] font-['Figtree:Bold',_sans-serif]">
                  Processing: <span className="font-['Figtree',_sans-serif] text-[#1E1E1E]/80">{fileName}</span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#1E1E1E]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[#1E1E1E]/70 font-['Figtree:SemiBold',_sans-serif]">
                  Estimated time: <span className="font-['Figtree:Bold',_sans-serif] text-[#1E1E1E]">{timeRemaining.toFixed(1)}s</span> remaining
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content area - centered */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
          <Group isProcessing={isProcessing} currentStep={currentStepIndex} />
          
          <div className="flex flex-col items-center md:items-start relative w-full md:w-auto">
            <div className="flex flex-col gap-8 md:gap-[83.68px] w-full max-w-2xl">
              {steps.map((step, index) => (
                <ProcessingStepComponent 
                  key={index} 
                  step={step} 
                  gap={stepGaps[index]}
                  onRetry={() => handleRetry(index)}
                />
              ))}
            </div>
            
            {canCancel && (
              <button
                onClick={handleCancel}
                className="mt-12 px-8 py-4 bg-[#1E1E1E] text-[#f8f3eb] rounded-full font-['Figtree:Bold',_sans-serif] text-lg hover:bg-[#1E1E1E]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] focus:ring-offset-2 shadow-lg hover:shadow-xl mx-auto md:mx-0"
                aria-label="Cancel processing"
              >
                Cancel Processing
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
