
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.921f0ac16a824fb88c2283b740f3a968',
  appName: 'kiddo-launchpad',
  webDir: 'dist',
  server: {
    url: 'https://921f0ac1-6a82-4fb8-8c22-83b740f3a968.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    // Android TV specific configurations
    buildOptions: {
      buildType: 'apk',
    },
    // Declare that this app is intended for Android TV
    manifestExtras: {
      "uses-feature": [
        {
          "$": {
            "android:name": "android.hardware.touchscreen",
            "android:required": "false"
          }
        },
        {
          "$": {
            "android:name": "android.software.leanback",
            "android:required": "true"
          }
        }
      ],
      "category": [
        {
          "$": {
            "android:name": "android.intent.category.LEANBACK_LAUNCHER"
          }
        }
      ]
    }
  }
};

export default config;
