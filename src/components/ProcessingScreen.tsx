import { useEffect, useState } from 'react';
import svgPaths from "../imports/svg-gq99hr5upm";

interface ProcessingStep {
  label: string;
  completed: boolean;
  active: boolean;
}

function CheckCircle({ completed, active }: { completed: boolean; active: boolean }) {
  const strokeColor = completed || active ? "#1E1E1E" : "#DADADA";
  const pathData = completed ? svgPaths.peb9f000 : svgPaths.pf7f9280;
  
  return (
    <div className="relative shrink-0 size-[50.208px]" data-name="Check circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          <path 
            d={pathData} 
            id="Icon" 
            stroke={strokeColor}
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="4.18402" 
          />
        </g>
      </svg>
    </div>
  );
}

function ProcessingStepComponent({ step, gap }: { step: ProcessingStep; gap: string }) {
  const textColor = step.completed || step.active ? "text-black" : "text-[#dadada]";
  
  return (
    <div className={`content-stretch flex gap-[${gap}] items-center relative shrink-0`}>
      <p className={`font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[58.576px] text-nowrap whitespace-pre ${textColor} transition-colors duration-500`}>
        {step.label}
      </p>
      <CheckCircle completed={step.completed} active={step.active} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center ml-0 mt-0 pl-0 pr-[439.322px] py-0 relative w-[556.475px]">
      <div className="bg-gradient-to-b from-[rgba(217,217,217,0.4)] mr-[-439.322px] opacity-30 rounded-[50.208px] shrink-0 size-[489.53px] to-[rgba(115,115,115,0.15)]" />
      <div className="bg-gradient-to-b from-[rgba(217,217,217,0.4)] mr-[-439.322px] rounded-[50.208px] shrink-0 size-[489.53px] to-[rgba(115,115,115,0.15)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

export default function ProcessingScreen({ onComplete }: { onComplete: () => void }) {
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { label: "Validating format", completed: false, active: true },
    { label: "Extracting pitch", completed: false, active: false },
    { label: "Identifying key signature", completed: false, active: false },
    { label: "Setting tempo", completed: false, active: false },
  ]);

  useEffect(() => {
    const stepDuration = 1500; // 1.5 seconds per step
    
    const timers = steps.map((_, index) => 
      setTimeout(() => {
        setSteps(prev => prev.map((step, i) => {
          if (i < index) return { ...step, completed: true, active: false };
          if (i === index) return { ...step, completed: false, active: true };
          return step;
        }));
        
        // Mark the last step as completed after its duration
        if (index === steps.length - 1) {
          setTimeout(() => {
            setSteps(prev => prev.map((step, i) => 
              i === steps.length - 1 ? { ...step, completed: true, active: false } : step
            ));
            // Transition to next screen after completion
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, stepDuration);
        }
      }, index * stepDuration)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  const stepGaps = ["29.288px", "62.76px", "25.104px", "62.76px"];

  return (
    <div className="bg-[#f8f3eb] relative size-full">
      <div className="absolute content-stretch flex gap-[71px] items-center left-[221.75px] top-[calc(50%+0.471px)] translate-y-[-50%]">
        <Group />
        <div className="content-stretch flex flex-col gap-[83.68px] items-start relative shrink-0 w-[748.939px]">
          {steps.map((step, index) => (
            <ProcessingStepComponent 
              key={index} 
              step={step} 
              gap={stepGaps[index]} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
