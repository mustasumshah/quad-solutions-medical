# Quad Solutions Medical Website

A modern, responsive, and professional web application designed for a medical credentialing firm. This project was built using **React (Vite)** and features a clean, trust-building healthcare UI, dynamic dark/light theme support, and a complete routing structure.

## 🚀 Live Deployment
- **Live Website:** [Insert your Render/Vercel URL here]
- **GitHub Repository:** [Insert your GitHub URL here]

## 🛠️ Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Vanilla CSS (with CSS variables, glassmorphism, and responsive grids)
- **Icons:** Lucide React

## 📦 Project Structure
```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and SVGs
│   ├── components/      # Reusable UI components (Navbar, Footer)
│   ├── pages/           # Application routes (Home, About, Services, etc.)
│   ├── App.jsx          # Main application component & routing setup
│   ├── index.css        # Global styles, variables, and animations
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables
├── vercel.json          # Vercel deployment configuration (SPA routing)
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## ⚙️ Setup Instructions for Local Execution

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone [Insert your GitHub URL here]
cd Intern
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
The project includes a `.env` file with basic configuration. Ensure it is present in the root directory:
```env
VITE_APP_NAME="Quad Solutions Medical"
VITE_API_URL="http://localhost:5173/api"
VITE_CONTACT_EMAIL="info@quadsolutions.com"
```

### 4. Start the development server
```bash
npm run dev
```

### 5. View the application
Open your browser and navigate to `http://localhost:5173/`

## 🎨 Features
- **Dark/Light Mode:** Persistent theme toggling using `localStorage` and CSS variables.
- **Responsive Design:** Adapts flawlessly to mobile, tablet, and desktop screens.
- **Micro-Animations:** Smooth slide-ups, fade-ins, and hover effects for a premium feel.
- **SPA Routing:** Client-side routing with React Router for seamless page transitions without reloading.

## 🗄️ Database
*(No database files are used in this static frontend application).*

## 🚢 Deployment
This application is configured to be deployed on static hosting platforms like **Render** or **Vercel**. 
- For Vercel, the `vercel.json` file ensures that React Router paths fallback correctly to `index.html`.
- For Render, ensure a rewrite rule is set mapping `/*` to `/index.html`.
