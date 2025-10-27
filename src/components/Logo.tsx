export default function Logo() {
  return (
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20V8L12 12V4" stroke="#E76D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 22V10L20 14V6" stroke="#E76D57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="20" r="2.5" fill="#E76D57"/>
        <circle cx="12" cy="12" r="2.5" fill="#E76D57"/>
        <circle cx="16" cy="22" r="2.5" fill="#E76D57"/>
        <circle cx="20" cy="14" r="2.5" fill="#E76D57"/>
        <path d="M24 16C24 18 25 20 26 21" stroke="#813D31" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 12C27 14 28 16 29 18" stroke="#813D31" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
