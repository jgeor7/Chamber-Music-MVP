import { UploadCloudIcon } from '../icons';

interface UploadContentProps {
  isHovering: boolean;
}

function FileInfo() {
  return (
    <div className="font-['SF_Pro_Rounded:Regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-[#7A7A7A] text-[18px] text-nowrap whitespace-pre">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative">MIDI/XML files only</p>
      <p className="[grid-area:1_/_1] ml-[50px] mt-[30px] relative">50mb</p>
    </div>
  );
}

export function UploadContent({ isHovering }: UploadContentProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0">
      <UploadCloudIcon isHovering={isHovering} size={120} />
      <FileInfo />
    </div>
  );
}
