import { useState } from 'react';
import { Home, FolderOpen, User } from 'lucide-react';
import Logo from './Logo';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, label, isExpanded, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors rounded-lg group"
    >
      <div className="shrink-0 w-6 h-6 flex items-center justify-center text-white">
        {icon}
      </div>
      <span
        className={`text-white font-['Figtree:SemiBold',_sans-serif] text-[18px] whitespace-nowrap transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHomeClick = () => {
    console.log('Home clicked');
  };

  const handleProjectsClick = () => {
    console.log('Projects clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-[#e76d57] z-50 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-[240px]' : 'w-[142px]'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full py-12">
        {/* Logo/Brand area */}
        <div className="px-6 mb-16">
          <Logo />
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col gap-2">
          <SidebarItem
            icon={<Home size={24} />}
            label="Home"
            isExpanded={isExpanded}
            onClick={handleHomeClick}
          />
          <SidebarItem
            icon={<FolderOpen size={24} />}
            label="Projects"
            isExpanded={isExpanded}
            onClick={handleProjectsClick}
          />
        </nav>

        {/* Spacer to push profile to bottom */}
        <div className="flex-1" />

        {/* Profile at bottom */}
        <div className="mt-auto">
          <SidebarItem
            icon={<User size={24} />}
            label="Profile"
            isExpanded={isExpanded}
            onClick={handleProfileClick}
          />
        </div>
      </div>
    </div>
  );
}
