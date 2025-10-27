import svgPaths from "./svg-rbijqw4y5e";
import imgRectangle from "figma:asset/7eae5bd45ddc37064c66617f933c5534a0a11ca5.png";
import imgImage56 from "figma:asset/303b445e54c5b8ae72351f6d3ab1499cfbe2007e.png";
import imgImage46 from "figma:asset/7b2a6ed9ab62676184118c0018d5d4674baa9d6f.png";
import imgImage58 from "figma:asset/2933498005c8e61eceb7c89c324146c36ed5b7a6.png";

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

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chevron down">
          <path d="M8 12L16 20L24 12" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function AccordionTitle() {
  return (
    <div className="basis-0 content-stretch flex gap-[12.8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Figtree:SemiBold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[25.6px]">Musical Style</p>
      <ChevronDown />
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="bg-[rgba(229,221,213,0.2)] box-border content-stretch flex items-center p-[25.6px] relative rounded-[12.8px] shrink-0 w-[272px]" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
      <AccordionTitle />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chevron down">
          <path d="M8 12L16 20L24 12" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
        </g>
      </svg>
    </div>
  );
}

function AccordionTitle1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12.8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Figtree:SemiBold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[25.6px]">Difficulty</p>
      <ChevronDown1 />
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="bg-[rgba(229,221,213,0.2)] box-border content-stretch flex items-center p-[25.6px] relative rounded-[12.8px] shrink-0 w-[272px]" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
      <AccordionTitle1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
      <AccordionItem />
      <AccordionItem1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[75px] items-start relative shrink-0 w-[907.932px]">
      <Frame />
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[33.472px] items-center relative shrink-0 w-[247.051px]">
      <div className="h-[247.051px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[53.555px] text-black text-center w-full">Violin</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[33.472px] h-[418.402px] items-center px-[70.292px] py-[30.125px] relative rounded-[40.167px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[391.624px]">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[3.347px] border-solid inset-0 pointer-events-none rounded-[40.167px]" />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[33.472px] items-center relative shrink-0 w-[247.051px]">
      <div className="relative shrink-0 size-[247.694px]" data-name="image 56">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage56} />
      </div>
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[53.555px] text-black text-center text-nowrap whitespace-pre">Saxophone</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[33.472px] h-[418.402px] items-center px-[70.292px] py-[30.125px] relative rounded-[40.167px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[391.624px]">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[3.347px] border-solid inset-0 pointer-events-none rounded-[40.167px]" />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[33.472px] items-center relative shrink-0 w-[247.051px]">
      <div className="relative shrink-0 size-[257.344px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage46} />
      </div>
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[53.555px] text-black text-center w-[min-content]">Violin</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[33.472px] h-[418.402px] items-center px-[70.292px] py-[30.125px] relative rounded-[40.167px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[391.624px]">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[3.347px] border-solid inset-0 pointer-events-none rounded-[40.167px]" />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[33.472px] items-center relative shrink-0 w-[247.051px]">
      <div className="relative shrink-0 size-[257.344px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[53.555px] text-black text-center w-[min-content]">Trumpet</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] gap-[33.472px] h-[418.402px] items-center px-[70.292px] py-[30.125px] relative rounded-[40.167px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-[391.624px]">
      <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[3.347px] border-solid inset-0 pointer-events-none rounded-[40.167px]" />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-start flex flex-wrap gap-[83.68px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame8 />
      {[...Array(3).keys()].map((_, i) => (
        <Frame5 key={i} />
      ))}
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[98px] items-start left-[280px] top-[98px] w-[1343.4px]">
      <Frame12 />
      <Frame9 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f8f3eb] relative size-full">
      <div className="absolute bg-[#e76d57] h-[1117.45px] left-[0.5px] top-[0.45px] w-[141.971px]" />
      <Frame13 />
    </div>
  );
}