
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <header className="bg-white/10 backdrop-blur-md p-4 flex justify-between items-center shadow-md rounded-lg m-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-white">Kiddo Launchpad</h1>
        <div className="floating-element ml-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2377/2377846.png" 
            alt="Kid Icon" 
            className="w-12 h-12"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-white text-xl font-semibold">
          {currentTime}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="text-white hover:bg-white/20"
        >
          <Menu className="h-8 w-8" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
