
import { AppInfo } from '@/types/apps';

// Mock data for available apps
export const getApprovedApps = (): AppInfo[] => {
  return [
    {
      id: 'youtube-kids',
      name: 'YouTube Kids',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/1200px-YouTube_Kids_LogoVector.svg.png',
      color: '#FF0000',
      packageName: 'com.google.android.apps.youtube.kids',
      approved: true
    },
    {
      id: 'netflix-kids',
      name: 'Netflix Kids',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png',
      color: '#E50914',
      packageName: 'com.netflix.mediaclient',
      approved: true
    },
    {
      id: 'disney-plus',
      name: 'Disney+',
      icon: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE0-PQM5ySW7_KDvprdmppCJ0UVCOLZrC7KYo456XRUcX-c',
      color: '#113CCF',
      packageName: 'com.disney.disneyplus',
      approved: true
    },
    {
      id: 'pbs-kids',
      name: 'PBS Kids',
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/1200px-PBS_Kids_Logo.svg.png',
      color: '#009A57',
      packageName: 'org.pbskids.video',
      approved: true
    },
    {
      id: 'nick-jr',
      name: 'Nick Jr.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nick_Jr._logo_2009.svg/1200px-Nick_Jr._logo_2009.svg.png',
      color: '#FF6600',
      packageName: 'com.nickjr.android.nickjr',
      approved: true
    },
    {
      id: 'cartoon-network',
      name: 'Cartoon Network',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/1200px-Cartoon_Network_2010_logo.svg.png',
      color: '#00A0E4',
      packageName: 'com.turner.cnvideoapp',
      approved: true
    }
  ];
};

// List of all apps (mock data)
export const getAllApps = (): AppInfo[] => {
  return [
    ...getApprovedApps(),
    {
      id: 'settings',
      name: 'Settings',
      icon: 'https://cdn-icons-png.flaticon.com/512/3524/3524636.png',
      color: '#607D8B',
      packageName: 'com.android.settings',
      approved: false
    },
    {
      id: 'play-store',
      name: 'Play Store',
      icon: 'https://cdn-icons-png.flaticon.com/512/5977/5977575.png',
      color: '#4CAF50',
      packageName: 'com.android.vending',
      approved: false
    },
    {
      id: 'gallery',
      name: 'Gallery',
      icon: 'https://cdn-icons-png.flaticon.com/512/1375/1375106.png',
      color: '#009688',
      packageName: 'com.google.android.apps.photos',
      approved: false
    }
  ];
};

// Simulate launching an app
export const launchApp = (appId: string): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log(`Launching app: ${appId}`);
    
    // In a real Android TV app, this would use Android Intent to launch the app
    // using its package name. For our mockup, we'll just log and return success.
    
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
