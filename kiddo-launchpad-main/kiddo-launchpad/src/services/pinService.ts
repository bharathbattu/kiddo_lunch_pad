
// PIN management service

// Default PIN (in a real app, this would be securely stored or set during initial setup)
const DEFAULT_PIN = '1234';

let currentPin = DEFAULT_PIN;

export const getPIN = (): string => {
  // In a real app, this would retrieve the PIN from secure storage
  return currentPin;
};

export const validatePIN = (pin: string): boolean => {
  return pin === currentPin;
};

export const changePIN = (newPin: string): void => {
  // Validate new PIN (must be 4 digits)
  if (/^\d{4}$/.test(newPin)) {
    currentPin = newPin;
    // In a real app, this would save the PIN to secure storage
    console.log('PIN changed successfully');
    return;
  }
  
  throw new Error('Invalid PIN format. PIN must be 4 digits.');
};

export const resetPIN = (): void => {
  currentPin = DEFAULT_PIN;
  // In a real app, this would reset the PIN in secure storage
  console.log('PIN reset to default');
};
