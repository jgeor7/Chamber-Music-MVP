import { useState } from "react";
import svgPaths from "../imports/svg-75cmip4a72";
import { X } from "lucide-react";

interface ResultsData {
  instruments: string[];
  style: string;
  difficulty: string;
}

function Music() {
  return (
    <div
      className="relative shrink-0 size-[100.416px]"
      data-name="Music"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 101 101"
      >
        <g id="Music">
          <path
            d={svgPaths.p3abf3380}
            id="Icon"
            stroke="url(#paint0_linear_4_213)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8.36804"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_4_213"
            x1="50.2082"
            x2="50.2082"
            y1="12.5521"
            y2="87.8644"
          >
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
    <div className="absolute content-stretch flex gap-[33.891px] h-[96.232px] items-center left-1/2 top-[29.29px] translate-x-[-50%] w-[824.252px]">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#201315] text-[67.781px] text-nowrap whitespace-pre">
        <span>{`Here is your `}</span>
        <span
          className="bg-clip-text bg-gradient-to-r from-[#201315] to-[#e76d57]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          harmony!
        </span>
      </p>
      <Music />
    </div>
  );
}

function Frame2({
  projectName,
  isEditing,
  onEdit,
  onSave,
  onChange,
}: {
  projectName: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div className="content-stretch flex gap-[25.104px] items-center relative shrink-0">
      {isEditing ? (
        <input
          type="text"
          value={projectName}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onSave}
          onKeyDown={(e) => e.key === "Enter" && onSave()}
          autoFocus
          className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] text-[53.555px] text-black text-center bg-transparent border-b-4 border-[#e76d57] outline-none px-4"
        />
      ) : (
        <>
          <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[53.555px] text-black text-center text-nowrap whitespace-pre">
            {projectName}
          </p>
          <div
            className="relative shrink-0 size-[50.208px] cursor-pointer hover:opacity-70 transition-opacity"
            onClick={onEdit}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 51 51"
            >
              <g id="Edit 2">
                <path
                  d={svgPaths.pf9e1280}
                  id="Icon"
                  stroke="var(--stroke-0, #1E1E1E)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4.18402"
                />
              </g>
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function Maximize({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="absolute left-[686.18px] size-[50.208px] top-[33.47px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Maximize 2"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 51 51"
      >
        <g id="Maximize 2">
          <path
            d={svgPaths.p1ba20c80}
            id="Icon"
            stroke="var(--stroke-0, #1E1E1E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.18402"
          />
        </g>
      </svg>
    </div>
  );
}

function ExpandedMusicPlayer({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">
      <div className="bg-[#f8f3eb] rounded-[54.392px] w-full max-w-6xl h-[80vh] relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-8 top-8 p-3 hover:bg-[#e5ddd5] rounded-full transition-colors"
        >
          <X size={32} className="text-[#1e1e1e]" />
        </button>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="font-['Figtree:Bold',_sans-serif] text-[#201315] text-[48px] mb-4">
              Harmony Sheet Music Preview
            </p>
            <p className="font-['Figtree:Regular',_sans-serif] text-[#666] text-[24px]">
              Sheet music content would appear here
            </p>
          </div>
        </div>
        <Frame15 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[28px] left-[322.51px] top-[484.88px] w-[108px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 108 28"
      >
        <g id="Frame 33">
          <circle
            cx="14"
            cy="14"
            fill="var(--fill-0, black)"
            id="Ellipse 4"
            r="14"
          />
          <circle
            cx="54"
            cy="14"
            fill="var(--fill-0, black)"
            id="Ellipse 5"
            r="14"
          />
          <circle
            cx="94"
            cy="14"
            fill="var(--fill-0, black)"
            id="Ellipse 6"
            r="14"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame5({ onExpand }: { onExpand: () => void }) {
  return (
    <div className="h-[552.291px] relative shrink-0 w-[774.044px]">
      <div className="absolute bg-[#d9d9d9] h-[552.291px] left-0 rounded-[54.392px] top-0 w-[774.044px] flex items-center justify-center">
        <p className="font-['Figtree:Regular',_sans-serif] text-[#666] text-[32px]">
          Harmony Sheet Music Preview
        </p>
      </div>
      <Maximize onClick={onExpand} />
      <Frame15 />
    </div>
  );
}

function Tag({
  label,
  gridArea,
}: {
  label: string;
  gridArea: string;
}) {
  return (
    <div
      className={`${gridArea} box-border flex items-center justify-center px-[25.104px] py-[12.552px] relative rounded-full shrink-0 min-w-0`}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5ddd5] border-[4.184px] border-solid inset-0 pointer-events-none rounded-full"
      />
      <p className="font-['Figtree:Regular',_sans-serif] font-normal leading-[100.005%] relative text-[40px] text-black text-center truncate px-2">
        {label}
      </p>
    </div>
  );
}

function Frame10({ data }: { data: ResultsData }) {
  return (
    <div className="gap-[28px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[348.513px] relative shrink-0 w-full">
      <Tag
        label={data.instruments[0]}
        gridArea="[grid-area:1_/_1]"
      />
      <Tag
        label={data.instruments[1]}
        gridArea="[grid-area:1_/_2]"
      />
      <Tag
        label={data.instruments[2] || ""}
        gridArea="[grid-area:2_/_1]"
      />
      <Tag
        label={data.difficulty}
        gridArea="[grid-area:2_/_2]"
      />
      <Tag label={data.style} gridArea="[grid-area:3_/_1]" />
    </div>
  );
}

function Frame3({
  onRegenerate,
}: {
  onRegenerate: () => void;
}) {
  return (
    <button
      onClick={onRegenerate}
      className="bg-[#e76d57] box-border content-stretch flex gap-[41.84px] items-center justify-center px-[25.104px] py-[12.552px] relative rounded-[33.472px] shrink-0 cursor-pointer hover:scale-105 transition-transform"
    >
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[100.005%] relative shrink-0 text-[53.555px] text-center text-nowrap text-white whitespace-pre">
        Regenerate
      </p>
    </button>
  );
}

function Frame11({
  data,
  onRegenerate,
}: {
  data: ResultsData;
  onRegenerate: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[116px] items-center relative shrink-0 w-[386.594px]">
      <Frame10 data={data} />
      <Frame3 onRegenerate={onRegenerate} />
    </div>
  );
}

function Frame12({
  onExpand,
  data,
  onRegenerate,
}: {
  onExpand: () => void;
  data: ResultsData;
  onRegenerate: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame5 onExpand={onExpand} />
      <Frame11 data={data} onRegenerate={onRegenerate} />
    </div>
  );
}

function Frame13({
  projectName,
  isEditing,
  onEdit,
  onSave,
  onChange,
  onExpand,
  data,
  onRegenerate,
}: {
  projectName: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onChange: (value: string) => void;
  onExpand: () => void;
  data: ResultsData;
  onRegenerate: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full">
      <Frame2
        projectName={projectName}
        isEditing={isEditing}
        onEdit={onEdit}
        onSave={onSave}
        onChange={onChange}
      />
      <Frame12
        onExpand={onExpand}
        data={data}
        onRegenerate={onRegenerate}
      />
    </div>
  );
}

function Frame9({
  onGenerateNew,
}: {
  onGenerateNew: () => void;
}) {
  return (
    <button
      onClick={onGenerateNew}
      className="bg-[#e76d57] box-border content-stretch flex gap-[41.84px] items-center justify-center px-[25.104px] py-[12.552px] relative rounded-[33.472px] shrink-0 cursor-pointer hover:scale-105 transition-transform"
    >
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[100.005%] relative shrink-0 text-[53.555px] text-center text-nowrap text-white whitespace-pre">
        Generate New
      </p>
    </button>
  );
}

function Frame14({
  projectName,
  isEditing,
  onEdit,
  onSave,
  onChange,
  onExpand,
  data,
  onRegenerate,
  onGenerateNew,
}: {
  projectName: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onChange: (value: string) => void;
  onExpand: () => void;
  data: ResultsData;
  onRegenerate: () => void;
  onGenerateNew: () => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70px] items-center left-[238.49px] top-[230.12px] w-[1200.64px]">
      <Frame13
        projectName={projectName}
        isEditing={isEditing}
        onEdit={onEdit}
        onSave={onSave}
        onChange={onChange}
        onExpand={onExpand}
        data={data}
        onRegenerate={onRegenerate}
      />
      <Frame9 onGenerateNew={onGenerateNew} />
    </div>
  );
}

export default function ResultsScreen({
  data,
  onRegenerate,
  onGenerateNew,
}: {
  data: ResultsData;
  onRegenerate: () => void;
  onGenerateNew: () => void;
}) {
  const [projectName, setProjectName] = useState(
    "Untitled Project",
  );
  const [tempName, setTempName] = useState("Untitled Project");
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEdit = () => {
    setTempName(projectName);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (tempName.trim()) {
      setProjectName(tempName.trim());
    } else {
      setTempName(projectName);
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-[#f8f3eb] relative min-h-screen w-full">
      <Frame />
      <Frame14
        projectName={tempName}
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
        onChange={setTempName}
        onExpand={() => setIsExpanded(true)}
        data={data}
        onRegenerate={onRegenerate}
        onGenerateNew={onGenerateNew}
      />
      {isExpanded && (
        <ExpandedMusicPlayer
          onClose={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}