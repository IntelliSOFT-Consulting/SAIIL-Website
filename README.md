# SAIIL Website

Standards, Artificial Intelligence & Interoperability Lab (SAIIL) website, built with **React**, **TypeScript**, and **Vite**.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or the next available port).

### Building for Production
Type-check and create an optimized production build:
```bash
npm run build
```

The production output is generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```text
├── public/                 # Static assets (logos, partner emblems, testbed screenshots)
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.tsx      # Header navigation bar with smooth scrolling
│   │   ├── Hero.tsx        # Hero section with interactive SVG network visualization
│   │   ├── ProblemSection.tsx # Problem statement and key metrics
│   │   ├── FourTsSection.tsx  # The 4Ts methodology (Teaming, Tooling, Testing, Training)
│   │   ├── AiLayerSection.tsx # AI Layer SVG architecture and feature cards
│   │   ├── SandboxSection.tsx # Interoperability Test Bed terminal and screenshot gallery
│   │   ├── Lightbox.tsx    # Accessible modal lightbox with keyboard and click navigation
│   │   ├── ApproachBand.tsx   # Core mission banner
│   │   ├── PartnersSection.tsx# Ministry of Health & partner highlights
│   │   ├── CtaBand.tsx     # Call to action section
│   │   ├── ContactSection.tsx # Direct email and contact inquiry form
│   │   └── Footer.tsx      # Footer with links and copyright info
│   ├── data/
│   │   └── gallery.ts      # Structured data for test bed screenshots
│   ├── App.tsx             # Main layout component
│   ├── index.css           # Global typography, color variables, and styling
│   └── main.tsx            # Application entry point
├── index.html              # HTML entry template for Vite
├── index.html.original     # Preserved original static HTML backup
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```
