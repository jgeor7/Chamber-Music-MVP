import { useState, useRef } from 'react';
import ProcessingScreen from "./components/ProcessingScreen";
import InstrumentSelectionScreen from "./components/InstrumentSelectionScreen";
import ResultsScreen from "./components/ResultsScreen";
import Sidebar from "./components/Sidebar";
import { UploadZone, AnimatedTitle, UploadMessage } from "./components/home";

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
      setError(undefined);
      setUploadedFile(file.name);
      setIsProcessing(true);
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
    setShowResults(false);
    setShowInstrumentSelection(true);
  };

  const handleGenerateNew = () => {
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
        <ProcessingScreen 
          onComplete={() => setShowInstrumentSelection(true)} 
          fileName={uploadedFile}
        />
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div className="bg-white relative w-full h-screen overflow-hidden" data-name="MacBook Pro 16' - 1">
        <div 
          className="absolute bg-[#f8f3eb] inset-0 w-full h-full overflow-hidden"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadZone isHovering={isDragging} onClick={handleClick} />
          <AnimatedTitle />
          <UploadMessage fileName={uploadedFile} error={error} />
          <input
            ref={fileInputRef}
            type="file"
            accept=".mid,.midi,.xml,.musicxml"
            onChange={handleFileInput}
            className="hidden"
            aria-label="Upload MIDI or XML file"
          />
        </div>
      </div>
    </>
  );
}
