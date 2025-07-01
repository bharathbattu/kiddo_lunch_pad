
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from 'lucide-react';

interface PinDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  correctPin: string;
}

const PinDialog: React.FC<PinDialogProps> = ({ isOpen, onClose, onSuccess, correctPin }) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [focusedButton, setFocusedButton] = useState<number>(5); // Center button (5) initially focused
  
  const buttons = [
    { label: '1', value: '1', color: 'bg-kiddo-blue' },
    { label: '2', value: '2', color: 'bg-kiddo-red' },
    { label: '3', value: '3', color: 'bg-kiddo-green' },
    { label: '4', value: '4', color: 'bg-kiddo-yellow' },
    { label: '5', value: '5', color: 'bg-kiddo-purple' },
    { label: '6', value: '6', color: 'bg-kiddo-orange' },
    { label: '7', value: '7', color: 'bg-kiddo-blue' },
    { label: '8', value: '8', color: 'bg-kiddo-red' },
    { label: '9', value: '9', color: 'bg-kiddo-green' },
    { label: 'Clear', value: 'clear', color: 'bg-gray-500' },
    { label: '0', value: '0', color: 'bg-kiddo-yellow' },
    { label: <ArrowRight className="w-6 h-6" />, value: 'submit', color: 'bg-kiddo-purple' },
  ];

  // Reset PIN when dialog opens
  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError('');
    }
  }, [isOpen]);

  const handleButtonClick = (value: string) => {
    if (value === 'clear') {
      setPin('');
      setError('');
    } else if (value === 'submit') {
      if (pin === correctPin) {
        onSuccess();
      } else {
        setError('Incorrect PIN. Please try again.');
        setPin('');
      }
    } else if (pin.length < 4) {
      setPin(prev => prev + value);
    }
  };

  // Handle D-pad navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const gridColumns = 3; // 3 columns in the grid
    
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        setFocusedButton(prev => (prev - gridColumns >= 0) ? prev - gridColumns : prev);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedButton(prev => (prev + gridColumns < buttons.length) ? prev + gridColumns : prev);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedButton(prev => (prev > 0) ? prev - 1 : prev);
        break;
      case 'ArrowRight':
        e.preventDefault();
        setFocusedButton(prev => (prev < buttons.length - 1) ? prev + 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        handleButtonClick(buttons[focusedButton].value);
        break;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-white rounded-xl p-8 max-w-md w-full"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">
            Enter Parent PIN
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-12 h-12 border-4 border-gray-300 rounded-full flex items-center justify-center"
              >
                {pin.length > i ? '•' : ''}
              </div>
            ))}
          </div>
        </div>
        
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`btn-pin ${button.color} text-white rounded-xl ${focusedButton === index ? 'ring-4 ring-blue-400 scale-110' : ''}`}
              onClick={() => handleButtonClick(button.value)}
              onFocus={() => setFocusedButton(index)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PinDialog;
