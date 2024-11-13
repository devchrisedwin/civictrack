# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CivicTrack App

## Project Overview
CivicTrack is a web app designed to help users track the progress of projects promised by civic leaders.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/devchrisedwin/civictrack.git
   ```
2. Navigate to the project directory:
   ```bash
   cd civictrack
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used
- React
- Tailwind CSS
- React Router
- Vercel (for deployment)

## Codebase Structure
src/ ├── components/ # Reusable UI components ├── pages/ # Main pages like HomePage, LeadersPage ├── context/ # Context files for global state management ├── data/ # Static data files ├── hooks/ # Custom React hooks └── App.js # Main application component


## Usage Guide
- Visit the home page to view project updates.
- Navigate to `/leaders` to see projects by each leader.
