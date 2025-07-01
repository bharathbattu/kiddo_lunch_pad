
# Kiddo Launchpad - Kid-Friendly Android TV Launcher

A simple, colorful Android TV launcher specifically designed for children. It provides a safe environment with access to only approved apps and PIN protection to prevent accidental exits.

![Kiddo Launchpad](https://example.com/screenshot.jpg)

## Features

- **Kid-Friendly UI**: Large, colorful icons and simple navigation designed for children
- **D-pad Navigation**: Full support for Android TV remote control navigation
- **App Restrictions**: Only shows pre-approved child-friendly apps
- **Exit Protection**: PIN-protected exit to prevent children from accessing the main Android system
- **Parental Controls**: 4-digit PIN to access all apps and settings

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Capacitor for Android TV integration
- D-pad navigation support for TV remotes

## Getting Started

### Prerequisites

- Node.js and npm installed
- Android Studio (for building the Android TV app)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd kiddo-launchpad
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

### Building for Android TV

1. Build the web app
```bash
npm run build
```

2. Add Android platform
```bash
npx cap add android
```

3. Sync the built web app with the Android project
```bash
npx cap sync
```

4. Open in Android Studio
```bash
npx cap open android
```

5. In Android Studio, build and deploy to an Android TV emulator or device

## Default PIN

The default PIN is `1234`. In a production app, this would be set during initial setup.

## Using as Default Launcher

To set Kiddo Launchpad as the default launcher on an Android TV device:

1. Install the app on your Android TV
2. Go to Settings > Apps > Default apps > Home app
3. Select Kiddo Launchpad from the list

## Implementation Details

- **App Restriction**: The launcher only displays apps marked as 'approved' in the configuration
- **Exit Protection**: Back button events are intercepted and require PIN entry to exit
- **TV Remote Navigation**: D-pad navigation is implemented for both app grid and PIN entry
- **PIN Protection**: Simple 4-digit PIN system protects parent-only functions

## License

This project is licensed under the MIT License - see the LICENSE file for details.
