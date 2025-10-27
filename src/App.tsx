import { useState, useRef } from 'react';
import svgPaths from "./imports/svg-pscw524tgj";
import ProcessingScreen from "./components/ProcessingScreen";
import InstrumentSelectionScreen from "./components/InstrumentSelectionScreen";
import ResultsScreen from "./components/ResultsScreen";
import Sidebar from "./components/Sidebar";

function UploadCloud({ isHovering }: { isHovering: boolean }) {
  return (
    <div className={`relative shrink-0 size-[203.769px] transition-transform duration-300 ${isHovering ? 'scale-110' : ''}`} data-name="Upload cloud">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 204">
        <g id="Upload cloud">
          <path d={svgPaths.p32f3f780} id="Icon" stroke="var(--stroke-0, #CDC9C1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12.7356" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="font-['SF_Pro_Rounded:Regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-[#cdc9c1] text-[28.301px] text-nowrap whitespace-pre">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative">MIDI/XML files only</p>
      <p className="[grid-area:1_/_1] ml-[84.904px] mt-[51.886px] relative">50mb</p>
    </div>
  );
}

function Frame2({ isHovering }: { isHovering: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[33.018px] items-center relative shrink-0 w-[231.127px]">
      <UploadCloud isHovering={isHovering} />
      <Group />
    </div>
  );
}

function Frame3({ isHovering }: { isHovering: boolean }) {
  return (
    <div className={`box-border content-stretch flex gap-[47.169px] items-center px-[127.356px] py-[56.603px] relative rounded-[290.796px] shrink-0 size-[496.688px] transition-all duration-300 ${isHovering ? 'scale-105' : ''}`}>
      <div aria-hidden="true" className={`absolute border-[4.245px] border-solid inset-0 pointer-events-none rounded-[290.796px] transition-colors duration-300 ${isHovering ? 'border-[rgba(229,221,213,0.6)]' : 'border-[rgba(229,221,213,0.4)]'}`} />
      <Frame2 isHovering={isHovering} />
    </div>
  );
}

function Frame4({ isHovering }: { isHovering: boolean }) {
  return (
    <div className="absolute box-border content-stretch flex gap-[47.169px] items-center left-[calc(50%+0.035px)] p-[80.187px] rounded-[329.003px] size-[658.005px] top-[calc(50%+191.385px)] translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className={`absolute border-[4.245px] border-solid inset-0 pointer-events-none rounded-[329.003px] transition-colors duration-300 ${isHovering ? 'border-[rgba(229,221,213,0.6)]' : 'border-[rgba(229,221,213,0.4)]'}`} />
      <Frame3 isHovering={isHovering} />
    </div>
  );
}

function Group1({ isHovering }: { isHovering: boolean }) {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%+191.15px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute left-[calc(50%+0.5px)] size-[1133.3px] top-[calc(50%+191.15px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute inset-[-4.42%_-5.58%_-6.75%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1260 1260">
            <g filter="url(#filter0_din_1_33)" id="Ellipse 2">
              <path d={svgPaths.p2f948800} fill="url(#paint0_radial_1_33)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1259.82" id="filter0_din_1_33" width="1259.82" x="-9.53674e-07" y="-9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="2.63593" result="effect1_dropShadow_1_33" />
                <feOffset dy="13.1797" />
                <feGaussianBlur stdDeviation="32.9492" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.898039 0 0 0 0 0.866667 0 0 0 0 0.835294 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_33" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="26.3593" result="effect2_innerShadow_1_33" />
                <feOffset dy="10.5437" />
                <feGaussianBlur stdDeviation="65.8983" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.208346 0 0 0 0 0.208346 0 0 0 0 0.208346 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_33" />
                <feTurbulence baseFrequency="0.75874489545822144 0.75874489545822144" numOctaves="3" result="noise" seed="2852" stitchTiles="stitch" type="fractalNoise" />
                <feComponentTransfer in="noise" result="coloredNoise1">
                  <feFuncR intercept="-0.5" slope="2" type="linear" />
                  <feFuncG intercept="-0.5" slope="2" type="linear" />
                  <feFuncB intercept="-0.5" slope="2" type="linear" />
                  <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                </feComponentTransfer>
                <feComposite in="coloredNoise1" in2="effect2_innerShadow_1_33" operator="in" result="noise1Clipped" />
                <feComponentTransfer in="noise1Clipped" result="color1">
                  <feFuncA tableValues="0 0.31" type="table" />
                </feComponentTransfer>
                <feMerge result="effect3_noise_1_33">
                  <feMergeNode in="effect2_innerShadow_1_33" />
                  <feMergeNode in="color1" />
                </feMerge>
                <feBlend in="effect3_noise_1_33" in2="effect1_dropShadow_1_33" mode="normal" result="effect3_noise_1_33" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(629.912 101.596) rotate(90) scale(865.126 1066.99)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_33" r="1">
                <stop stopColor="#E76D57" />
                <stop offset="0.496691" stopColor="#E2A59A" />
                <stop offset="1" stopColor="#DDDDDD" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame4 isHovering={isHovering} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[33.891px] h-[97.906px] items-center left-[calc(50%-0.493px)] top-[49.13px] translate-x-[-50%] w-[787.014px]">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#201315] text-[67.781px] text-nowrap whitespace-pre">{`Create harmonies in a `}</p>
      <div className="h-[96.918px] relative shrink-0 w-[71.547px]" data-name="lightning_component">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 97">
          <path d={svgPaths.peefa680} fill="url(#paint0_linear_1_28)" id="lightning_component" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_28" x1="35.7734" x2="35.7734" y1="0" y2="96.9175">
              <stop stopColor="#E76D57" />
              <stop offset="1" stopColor="#464646" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function UploadMessage({ fileName, error }: { fileName?: string; error?: string }) {
  if (error) {
    return (
      <div className="absolute left-1/2 top-[calc(50%+500px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#E76D57] text-[24px]">{error}</p>
      </div>
    );
  }
  
  if (fileName) {
    return (
      <div className="absolute left-1/2 top-[calc(50%+500px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#201315] text-[24px]">Uploaded: {fileName}</p>
      </div>
    );
  }
  
  return null;
}

export default function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showInstrumentSelection, setShowInstrumentSelection] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [harmonyData, setHarmonyData] = useState<{ instruments: string[]; style: string; difficulty: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const maxSize = 50 * 1024 * 1024; // 50MB
    const validExtensions = ['.mid', '.midi', '.xml', '.musicxml'];
    const fileName = file.name.toLowerCase();
    
    if (!validExtensions.some(ext => fileName.endsWith(ext))) {
      return 'Please upload a MIDI or XML file';
    }
    
    if (file.size > maxSize) {
      return 'File size must be less than 50MB';
    }
    
    return null;
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);
    
    if (validationError) {
      setError(validationError);
      setUploadedFile(undefined);
      setTimeout(() => setError(undefined), 3000);
    } else {
      setUploadedFile(file.name);
      setError(undefined);
      // Transition to processing screen
      setTimeout(() => {
        setIsProcessing(true);
      }, 500);
      console.log('File ready to upload:', file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleGenerate = (data: { instruments: string[]; style: string; difficulty: string }) => {
    setHarmonyData(data);
    setShowResults(true);
  };

  const handleRegenerate = () => {
    // In a real app, this would regenerate with the same settings
    console.log('Regenerating harmony...');
  };

  const handleGenerateNew = () => {
    // Reset to upload screen
    setShowResults(false);
    setShowInstrumentSelection(false);
    setIsProcessing(false);
    setUploadedFile(undefined);
    setHarmonyData(null);
  };

  if (showResults && harmonyData) {
    return (
      <>
        <Sidebar />
        <ResultsScreen 
          data={harmonyData}
          onRegenerate={handleRegenerate}
          onGenerateNew={handleGenerateNew}
        />
      </>
    );
  }

  if (showInstrumentSelection) {
    return (
      <>
        <Sidebar />
        <InstrumentSelectionScreen onGenerate={handleGenerate} />
      </>
    );
  }

  if (isProcessing) {
    return (
      <>
        <Sidebar />
        <ProcessingScreen onComplete={() => setShowInstrumentSelection(true)} />
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div className="bg-white relative size-full" data-name="MacBook Pro 16' - 1">
        <div 
          className="absolute bg-[#f8f3eb] h-[1117px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[1728px] cursor-pointer"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <Group1 isHovering={isDragging} />
          <Frame1 />
          <UploadMessage fileName={uploadedFile} error={error} />
          <input
            ref={fileInputRef}
            type="file"
            accept=".mid,.midi,.xml,.musicxml"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      </div>
    </>
  );
}
