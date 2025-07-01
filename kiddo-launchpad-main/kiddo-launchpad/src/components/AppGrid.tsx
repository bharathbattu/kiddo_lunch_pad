
import React, { useState, useEffect, KeyboardEvent } from 'react';
import AppIcon from './AppIcon';
import { AppInfo } from '@/types/apps';

interface AppGridProps {
  apps: AppInfo[];
  onAppSelect: (appId: string) => void;
}

const AppGrid: React.FC<AppGridProps> = ({ apps, onAppSelect }) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const gridColumns = 3; // Number of columns in the grid
  
  // Handle D-pad navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev - gridColumns >= 0) ? prev - gridColumns : prev);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + gridColumns < apps.length) ? prev + gridColumns : prev);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex(prev => (prev > 0) ? prev - 1 : prev);
        break;
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex(prev => (prev < apps.length - 1) ? prev + 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (apps[focusedIndex]) {
          onAppSelect(apps[focusedIndex].id);
        }
        break;
    }
  };

  // Auto-focus the grid on component mount
  useEffect(() => {
    const gridElement = document.getElementById('app-grid');
    if (gridElement) {
      gridElement.focus();
    }
  }, []);

  return (
    <div 
      id="app-grid"
      className="grid grid-cols-3 gap-6 p-6"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {apps.map((app, index) => (
        <AppIcon
          key={app.id}
          name={app.name}
          icon={app.icon}
          color={app.color}
          onSelect={() => onAppSelect(app.id)}
          focused={index === focusedIndex}
        />
      ))}
    </div>
  );
};

export default AppGrid;
