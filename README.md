# CleanRoute - Smart Waste Management System

CleanRoute is a modern, smart waste management web application designed to help communities stay clean. It enables citizens to report waste, drivers to plan and execute clean-up routes, and administrators to manage roles and track overall community cleanliness.

---

## 🌟 Key Features

### 1. Citizen Dashboard (Reporting & Gamification)
- **Waste Reporting**: Report waste locations with descriptions, severity settings, and image uploads.
- **AI Verification**: Utilizes **TensorFlow.js (MobileNet)** to analyze uploaded waste pictures and verify waste reporting.
- **Leaderboard**: Citizens earn points for reporting waste and participating in community cleanups, gamifying environmental action.

### 2. Driver Dashboard (Smart Routing)
- **Shift Management**: Drivers can clock in/out of their shifts.
- **Real-Time Interactive Maps**: Integrated **Leaflet maps** and **Leaflet Routing Machine** to show optimal clean-up routes to reported waste sites.
- **Status Updates**: Claim reports and mark them as collected/resolved directly from the map.

### 3. Admin Panel
- **User Role Management**: Manage profiles, approve driver/admin access requests, and toggle user privileges.
- **System Overview**: View active reports, driver shifts, and community statistics.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & shadcn/ui
- **Map & Routing**: Leaflet, React-Leaflet, and Leaflet Routing Machine
- **Machine Learning**: TensorFlow.js / MobileNet (for client-side waste image classification)
- **Database & Auth**: Firebase Auth and Firestore Database

---

## 🚀 Local Setup & Installation

Follow these steps to run the application locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Step 1: Install Dependencies
Navigate to the project root directory and run:
```bash
npm install
```

### Step 2: Configure Firebase
Make sure your Firestore security rules are configured in your Firebase Console to allow reading and writing:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Step 3: Run the Development Server
Start the local server with hot-reloading:
```bash
npm run dev
```
Open your browser and navigate to the local address shown in your terminal (usually `http://localhost:8080`).
