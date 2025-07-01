
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Tv } from 'lucide-react';

interface AppIconProps {
  name: string;
  icon: string;
  color: string;
  onSelect: () => void;
  focused?: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ name, icon, color, onSelect, focused = false }) => {
  const appRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(focused);
  const [imageError, setImageError] = useState<boolean>(false);
  
  // Handle keyboard navigation focus
  useEffect(() => {
    setIsFocused(focused);
    if (focused && appRef.current) {
      appRef.current.focus();
    }
  }, [focused]);
  
  return (
    <div 
      ref={appRef}
      className={cn(
        "app-icon flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200 rounded-2xl",
        isFocused ? "scale-110 ring-4 ring-white" : "hover:scale-105",
      )}
      style={{ 
        backgroundColor: color,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      onClick={onSelect}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
    >
      <div className="w-24 h-24 mb-2 flex items-center justify-center p-4">
        {imageError ? (
          <div className="flex items-center justify-center w-full h-full bg-white/20 rounded-full">
            <Tv className="w-12 h-12 text-white" />
          </div>
        ) : (
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <span className="text-center font-bold text-white text-lg">
        {name}
      </span>
    </div>
  );
};

export default AppIcon;
