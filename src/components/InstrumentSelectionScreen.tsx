import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-rbijqw4y5e";
import imgRectangle from "figma:asset/7eae5bd45ddc37064c66617f933c5534a0a11ca5.png";
import imgImage56 from "figma:asset/303b445e54c5b8ae72351f6d3ab1499cfbe2007e.png";
import imgImage46 from "figma:asset/7b2a6ed9ab62676184118c0018d5d4674baa9d6f.png";
import imgImage58 from "figma:asset/2933498005c8e61eceb7c89c324146c36ed5b7a6.png";
import { X } from 'lucide-react';

function Music() {
  return (
    <div className="relative shrink-0 size-[100.416px]" data-name="Music">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Music">
          <path d={svgPaths.p3abf3380} id="Icon" stroke="url(#paint0_linear_4_213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.36804" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_213" x1="50.2082" x2="50.2082" y1="12.5521" y2="87.8644">
            <stop stopColor="#E76D57" />
            <stop offset="1" stopColor="#813D31" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[33.891px] h-[96.232px] items-center relative shrink-0 w-full">
      <div className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#201315] text-[67.781px] text-nowrap whitespace-pre">
        <p className="mb-0">{`Choose your instruments, style `}</p>
        <p>and difficulty</p>
      </div>
      <Music />
    </div>
  );
}

function ChevronDown({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[32px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chevron down">
          <path d="M8 12L16 20L24 12" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({ 
  label, 
  options, 
  value, 
  onChange 
}: { 
  label: string; 
  options: string[]; 
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative shrink-0 w-[272px]" data-name="Accordion Item">
      <div 
        className="bg-[rgba(229,221,213,0.2)] box-border content-stretch flex items-center p-[25.6px] relative rounded-[12.8px] cursor-pointer hover:bg-[rgba(229,221,213,0.3)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
        <div className="basis-0 content-stretch flex gap-[12.8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
          <p className="basis-0 font-['Figtree:SemiBold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[25.6px]">
            {value || label}
          </p>
          <ChevronDown isOpen={isOpen} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[12.8px] shadow-lg border border-[#e5ddd5] overflow-hidden z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-[25.6px] py-[16px] hover:bg-[rgba(231,109,87,0.1)] cursor-pointer font-['Figtree:SemiBold',_sans-serif] font-semibold text-[#1e1e1e] text-[22px] transition-colors"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Frame11({ 
  musicalStyle, 
  difficulty,
  onMusicalStyleChange,
  onDifficultyChange
}: { 
  musicalStyle: string;
  difficulty: string;
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}) {
  const musicalStyleOptions = ['Classical', 'Jazz', 'Pop', 'Rock', 'Blues', 'Folk'];
  const difficultyOptions = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
      <AccordionItem 
        label="Musical Style" 
        options={musicalStyleOptions}
        value={musicalStyle}
        onChange={onMusicalStyleChange}
      />
      <AccordionItem 
        label="Difficulty" 
        options={difficultyOptions}
        value={difficulty}
        onChange={onDifficultyChange}
      />
    </div>
  );
}

function Frame12({ 
  musicalStyle, 
  difficulty,
  onMusicalStyleChange,
  onDifficultyChange
}: { 
  musicalStyle: string;
  difficulty: string;
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[75px] items-start relative shrink-0 w-[907.932px]">
      <Frame />
      <Frame11 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        onMusicalStyleChange={onMusicalStyleChange}
        onDifficultyChange={onDifficultyChange}
      />
    </div>
  );
}

function InstrumentCard({ 
  image, 
  name, 
  isSelected,
  onClick 
}: { 
  image: string; 
  name: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[33.472px] h-[418.402px] items-center px-[70.292px] py-[30.125px] relative rounded-[40.167px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[391.624px] cursor-pointer transition-all duration-300 hover:scale-105 ${isSelected ? 'ring-4 ring-[#e76d57]' : ''}`}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-[3.347px] border-solid inset-0 pointer-events-none rounded-[40.167px] transition-colors ${isSelected ? 'border-[#e76d57]' : 'border-[#e5ddd5]'}`} />
      <div className="content-stretch flex flex-col gap-[33.472px] items-center relative shrink-0 w-[247.051px]">
        <div className="relative shrink-0 size-[247.051px] flex items-center justify-center overflow-hidden">
          <img alt={name} className="max-w-full max-h-full object-contain pointer-events-none" src={image} />
        </div>
        <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[53.555px] text-black text-center">{name}</p>
      </div>
    </div>
  );
}

function Frame9({ selectedInstruments, onInstrumentToggle, maxSelection, showToast }: { selectedInstruments: string[]; onInstrumentToggle: (name: string) => void; maxSelection: number; showToast: boolean }) {
  const instruments = [
    { image: imgRectangle, name: 'Violin' },
    { image: imgImage56, name: 'Saxophone' },
    { image: imgImage46, name: 'Piano' },
    { image: imgImage58, name: 'Trumpet' },
  ];

  return (
    <div className="content-start flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-[83.68px] items-start relative shrink-0 w-full">
        {instruments.map((instrument, i) => {
          const isSelected = selectedInstruments.includes(instrument.name);
          const canSelect = isSelected || selectedInstruments.length < maxSelection;
          
          return (
            <div key={i} className={!canSelect ? 'opacity-40 pointer-events-none' : ''}>
              <InstrumentCard 
                image={instrument.image} 
                name={instrument.name}
                isSelected={isSelected}
                onClick={() => canSelect && onInstrumentToggle(instrument.name)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Frame13({ 
  musicalStyle, 
  difficulty,
  selectedInstruments,
  onMusicalStyleChange,
  onDifficultyChange,
  onInstrumentToggle,
  onGenerate,
  showToast
}: { 
  musicalStyle: string;
  difficulty: string;
  selectedInstruments: string[];
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onInstrumentToggle: (name: string) => void;
  onGenerate: () => void;
  showToast: boolean;
}) {
  const canContinue = selectedInstruments.length === 3;
  
  return (
    <div className="content-stretch flex flex-col gap-[98px] items-start ml-[280px] mt-[98px] mb-[98px] w-[1343.4px]">
      <Frame12 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        onMusicalStyleChange={onMusicalStyleChange}
        onDifficultyChange={onDifficultyChange}
      />
      <Frame9 selectedInstruments={selectedInstruments} onInstrumentToggle={onInstrumentToggle} maxSelection={3} showToast={showToast} />
      {canContinue && (
        <button
          onClick={onGenerate}
          className="bg-[#e76d57] box-border content-stretch flex gap-[41.84px] items-center justify-center px-[50px] py-[20px] relative rounded-[33.472px] shrink-0 cursor-pointer hover:scale-105 transition-all self-center"
        >
          <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[100.005%] relative shrink-0 text-[53.555px] text-center text-nowrap text-white whitespace-pre">
            Continue
          </p>
        </button>
      )}
    </div>
  );
}

function ToastNotification({ count, maxSelection, onDismiss }: { count: number; maxSelection: number; onDismiss: () => void }) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl border-2 border-[#e5ddd5] p-6 flex items-center gap-4 animate-in slide-in-from-bottom-4 z-50">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#e76d57]" />
        <p className="font-['Figtree:SemiBold',_sans-serif] text-[#201315] text-[20px]">
          {count} of {maxSelection} instruments selected
        </p>
      </div>
      <button
        onClick={onDismiss}
        className="ml-2 p-1 hover:bg-[#f8f3eb] rounded-lg transition-colors"
      >
        <X size={20} className="text-[#813D31]" />
      </button>
    </div>
  );
}

export default function InstrumentSelectionScreen({ onGenerate }: { onGenerate: (data: { instruments: string[]; style: string; difficulty: string }) => void }) {
  const [musicalStyle, setMusicalStyle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (selectedInstruments.length === 3) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  }, [selectedInstruments]);

  const handleInstrumentToggle = (name: string) => {
    setSelectedInstruments(prev => 
      prev.includes(name) 
        ? prev.filter(i => i !== name)
        : prev.length < 3 ? [...prev, name] : prev
    );
  };

  const handleGenerate = () => {
    if (selectedInstruments.length === 3) {
      onGenerate({
        instruments: selectedInstruments,
        style: musicalStyle || 'Classical',
        difficulty: difficulty || 'Intermediate'
      });
    }
  };

  return (
    <div className="bg-[#f8f3eb] relative size-full overflow-y-auto">
      <Frame13 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        selectedInstruments={selectedInstruments}
        onMusicalStyleChange={setMusicalStyle}
        onDifficultyChange={setDifficulty}
        onInstrumentToggle={handleInstrumentToggle}
        onGenerate={handleGenerate}
        showToast={showToast}
      />
      {showToast && (
        <ToastNotification 
          count={selectedInstruments.length} 
          maxSelection={3}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
