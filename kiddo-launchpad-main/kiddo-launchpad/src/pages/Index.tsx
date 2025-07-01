
import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import AppGrid from '@/components/AppGrid';
import PinDialog from '@/components/PinDialog';
import { toast } from '@/components/ui/use-toast';
import { getApprovedApps, launchApp, getAllApps } from '@/services/appService';
import { getPIN } from '@/services/pinService';
import { AppInfo } from '@/types/apps';

const Index = () => {
  const [apps, setApps] = useState<AppInfo[]>([]);
  const [isPinDialogOpen, setIsPinDialogOpen] = useState<boolean>(false);
  const [exitAttempted, setExitAttempted] = useState<boolean>(false);
  
  // Load approved apps on mount
  useEffect(() => {
    const approvedApps = getApprovedApps();
    setApps(approvedApps);
    
    // Set up key handlers for exit protection
    const handleBackButton = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        setExitAttempted(true);
        setIsPinDialogOpen(true);
      }
    };
    
    window.addEventListener('keydown', handleBackButton);
    
    return () => {
      window.removeEventListener('keydown', handleBackButton);
    };
  }, []);
  
  const handleAppSelect = useCallback(async (appId: string) => {
    try {
      // Find the selected app
      const app = getAllApps().find(a => a.id === appId);
      
      if (!app) {
        toast({
          title: "App Not Found",
          description: "The selected app could not be found.",
          variant: "destructive"
        });
        return;
      }
      
      if (!app.approved) {
        setIsPinDialogOpen(true);
        return;
      }
      
      // Launch the app
      const success = await launchApp(appId);
      
      if (success) {
        toast({
          title: `Launching ${app.name}`,
          description: "The app is starting now..."
        });
      }
    } catch (error) {
      console.error("Error launching app:", error);
      toast({
        title: "Error",
        description: "Failed to launch the app. Please try again.",
        variant: "destructive"
      });
    }
  }, []);
  
  const handleMenuClick = useCallback(() => {
    setIsPinDialogOpen(true);
  }, []);
  
  const handlePinSuccess = useCallback(() => {
    setIsPinDialogOpen(false);
    
    if (exitAttempted) {
      // In a real Android TV app, this would handle exiting the launcher
      toast({
        title: "Exit Confirmed",
        description: "Parent access granted. You can now exit the launcher."
      });
      setExitAttempted(false);
    } else {
      // Show all apps including non-approved ones
      toast({
        title: "Parent Mode Enabled",
        description: "You now have access to all apps and settings."
      });
      setApps(getAllApps());
    }
  }, [exitAttempted]);
  
  const handlePinDialogClose = useCallback(() => {
    setIsPinDialogOpen(false);
    setExitAttempted(false);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#468ED3] to-[#7D5FB2] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#468ED3] to-[#7D5FB2] opacity-90 blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onMenuClick={handleMenuClick} />
        
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">My Apps</h2>
          <AppGrid apps={apps} onAppSelect={handleAppSelect} />
        </main>
        
        <PinDialog 
          isOpen={isPinDialogOpen}
          onClose={handlePinDialogClose}
          onSuccess={handlePinSuccess}
          correctPin={getPIN()}
        />
        
        <footer className="p-4 text-center text-white">
          <p>Kiddo Launchpad - Safe TV for Kids</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
