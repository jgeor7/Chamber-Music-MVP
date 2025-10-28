import { useState, useEffect } from 'react';
import violinImg from "../assets/violin.jpg";
import violaImg from "../assets/viola.jpg";
import celloImg from "../assets/cello.jpg";
import doubleBassImg from "../assets/double bass.jpg";
import { X } from 'lucide-react';
import { PrimaryButton } from './ui/Buttons';
import { Card, CardContent } from './ui/card';
import AppHeader from './AppHeader';
import PageHeader from './PageHeader';
import Breadcrumbs from './Breadcrumbs';
import { ChevronDownIcon } from './icons';

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
          <p className="basis-0 font-['Figtree:SemiBold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[18px]">
            {value || label}
          </p>
          <ChevronDownIcon isOpen={isOpen} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[12.8px] shadow-lg border border-[#e5ddd5] overflow-hidden z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-[25.6px] py-[16px] hover:bg-[rgba(231,109,87,0.1)] cursor-pointer font-['Figtree:SemiBold',_sans-serif] font-semibold text-[#1e1e1e] text-[16px] transition-colors"
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
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start relative shrink-0 w-full max-w-[1100px]">
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
      className={`bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[22px] h-[320px] items-center px-[45px] py-[18px] relative rounded-[30px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[260px] cursor-pointer transition-all duration-300 hover:scale-105 ${isSelected ? 'ring-4 ring-[#e76d57]' : ''}`}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-[3px] border-solid inset-0 pointer-events-none rounded-[30px] transition-colors ${isSelected ? 'border-[#e76d57]' : 'border-[#e5ddd5]'}`} />
      <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full">
        <Card className="relative shrink-0 size-[170px] flex items-center justify-center overflow-hidden border-none shadow-md">
          <CardContent className="p-3.5 flex items-center justify-center">
            <img alt={name} className="max-w-full max-h-full object-contain pointer-events-none" src={image} />
          </CardContent>
        </Card>
        <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[21px] text-black text-center">{name}</p>
      </div>
    </div>
  );
}

function Frame9({ selectedInstruments, onInstrumentToggle, maxSelection }: { selectedInstruments: string[]; onInstrumentToggle: (name: string) => void; maxSelection: number }) {
  const instruments = [
    { image: violinImg, name: 'Violin' },
    { image: violaImg, name: 'Viola' },
    { image: celloImg, name: 'Cello' },
    { image: doubleBassImg, name: 'Double Bass' },
  ];

  return (
    <div className="content-start flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="flex gap-[28px] md:gap-[36px] items-start relative shrink-0 w-full justify-center">
        {instruments.map((instrument, i) => {
          const isSelected = selectedInstruments.includes(instrument.name);
          const canSelect = isSelected || selectedInstruments.length < maxSelection;
          
          return (
            <div key={i} className={`flex-shrink-0 ${!canSelect ? 'opacity-40 pointer-events-none' : ''}`}>
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
  onGenerate
}: { 
  musicalStyle: string;
  difficulty: string;
  selectedInstruments: string[];
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onInstrumentToggle: (name: string) => void;
  onGenerate: () => void;
}) {
  const canContinue = musicalStyle && difficulty && selectedInstruments.length > 0;
  
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start w-full">
      <Frame12 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        onMusicalStyleChange={onMusicalStyleChange}
        onDifficultyChange={onDifficultyChange}
      />
      <Frame9 selectedInstruments={selectedInstruments} onInstrumentToggle={onInstrumentToggle} maxSelection={4} />
      <PrimaryButton
        onClick={onGenerate}
        className="self-center"
        disabled={!canContinue}
      >
        Continue
      </PrimaryButton>
    </div>
  );
}

function ToastNotification({ count, maxSelection, onDismiss }: { count: number; maxSelection: number; onDismiss: () => void }) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl border-2 border-[#e5ddd5] p-6 flex items-center gap-4 animate-in slide-in-from-bottom-4 z-50">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#e76d57]" />
        <p className="font-['Figtree:SemiBold',_sans-serif] text-[#201315] text-[16px]">
          {count} of {maxSelection} instruments selected
        </p>
      </div>
      <button
        onClick={onDismiss}
        className="ml-2 p-1 hover:bg-[#f8f3eb] rounded-lg transition-colors"
        aria-label="Dismiss notification"
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
    if (selectedInstruments.length > 0 && selectedInstruments.length <= 4) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  }, [selectedInstruments]);

  const handleInstrumentToggle = (name: string) => {
    setSelectedInstruments(prev => 
      prev.includes(name) 
        ? prev.filter(i => i !== name)
        : prev.length < 4 ? [...prev, name] : prev
    );
  };

  const handleGenerate = () => {
    if (selectedInstruments.length > 0 && musicalStyle && difficulty) {
      onGenerate({
        instruments: selectedInstruments,
        style: musicalStyle,
        difficulty: difficulty
      });
    }
  };

  return (
    <div className="bg-[#f8f3eb] relative w-full h-screen overflow-hidden flex flex-col">
      <AppHeader
        currentStep={0}
        totalSteps={3}
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
          <Breadcrumbs
            steps={["Select Instruments", "Processing", "Results"]}
            currentStep={0}
          />
          <PageHeader
            title="Choose your instruments, style and difficulty"
            subtitle="Select up to 4 instruments and customize your musical preferences"
          />
          <Frame13 
            musicalStyle={musicalStyle}
            difficulty={difficulty}
            selectedInstruments={selectedInstruments}
            onMusicalStyleChange={setMusicalStyle}
            onDifficultyChange={setDifficulty}
            onInstrumentToggle={handleInstrumentToggle}
            onGenerate={handleGenerate}
          />
        </div>
      </div>
      {showToast && (
        <ToastNotification 
          count={selectedInstruments.length} 
          maxSelection={4}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
