import svgPaths from "./svg-gq99hr5upm";

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

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[50.208px]" data-name="Check circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          <path d={svgPaths.peb9f000} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.18402" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[29.288px] items-center relative shrink-0">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[58.576px] text-black text-nowrap whitespace-pre">Validating format</p>
      <CheckCircle />
    </div>
  );
}

function CheckCircle1() {
  return (
    <div className="relative shrink-0 size-[50.208px]" data-name="Check circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          <path d={svgPaths.peb9f000} id="Icon" stroke="var(--stroke-0, #DADADA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.18402" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[62.76px] items-center relative shrink-0">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dadada] text-[58.576px] text-nowrap whitespace-pre">Extracting pitch</p>
      <CheckCircle1 />
    </div>
  );
}

function CheckCircle2() {
  return (
    <div className="relative shrink-0 size-[50.208px]" data-name="Check circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          <path d={svgPaths.pf7f9280} id="Icon" stroke="var(--stroke-0, #DADADA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.18402" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[25.104px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dadada] text-[58.576px] text-nowrap whitespace-pre">Identifying key signature</p>
      <CheckCircle2 />
    </div>
  );
}

function CheckCircle3() {
  return (
    <div className="relative shrink-0 size-[50.208px]" data-name="Check circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="Check circle">
          <path d={svgPaths.peb9f000} id="Icon" stroke="var(--stroke-0, #DADADA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.18402" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[62.76px] items-center relative shrink-0">
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dadada] text-[58.576px] text-nowrap whitespace-pre">Setting tempo</p>
      <CheckCircle3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[83.68px] items-start relative shrink-0 w-[748.939px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[71px] items-center left-[221.75px] top-[calc(50%+0.471px)] translate-y-[-50%]">
      <Group />
      <Frame4 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-[#f8f3eb] relative size-full">
      <div className="absolute bg-[#e76d57] h-[1117.45px] left-[-6.13px] top-0 w-[141.971px]" />
      <Frame7 />
    </div>
  );
}