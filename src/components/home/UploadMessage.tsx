interface UploadMessageProps {
  fileName?: string;
  error?: string;
}

export function UploadMessage({ fileName, error }: UploadMessageProps) {
  if (error) {
    return (
      <div className="absolute left-1/2 top-[calc(50%+420px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#E76D57] text-[18px]">{error}</p>
      </div>
    );
  }
  
  if (fileName) {
    return (
      <div className="absolute left-1/2 top-[calc(50%+420px)] -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#201315] text-[18px]">Uploaded: {fileName}</p>
      </div>
    );
  }
  
  return null;
}
