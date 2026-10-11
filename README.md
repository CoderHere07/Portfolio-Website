# ⚡ Adnan Shahzad — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/HTML5_Canvas-WebGL_Aesthetic-CCFF00?style=for-the-badge&logo=html5&logoColor=black" alt="HTML5 Canvas" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  A high-performance, modern developer portfolio featuring an interactive <b>3D vertical project deck</b>, an electric plasma canvas background, dynamic <b>Day & Night mode</b> theming, and an expanding stack accordion for GitHub open source repositories.
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-customization">Customization</a> •
  <a href="#-license">License</a>
</p>

---

## ✨ Key Features

- 🌓 **Day & Night Mode Switcher**:
  - Seamlessly toggle between dark agency aesthetics (`#050505` + `#CCFF00` neon accent) and a crisp light theme (`#F4F5F8` + `#5E8A00` emerald accent).
  - Preference automatically persists across sessions via `localStorage`.
- 🪐 **Interactive 3D Vertical Project Deck**:
  - Vertical orbital project carousel using CSS 3D transforms (`translate3d`, `rotateX`, `rotateY`, `scale`).
  - Smooth mouse drag and touch swipe physics with keyboard navigation and active project banner.
- ⚡ **Electric Plasma Wave Canvas**:
  - High-performance, mathematical sine/cosine wave generative canvas backdrop with floating particles.
  - Dynamically adapts its color gradients and stroke lighting based on the active theme.
- 📂 **Expanding Stack Accordion (Open Source)**:
  - Custom accordion stack inspired by high-end design showcases.
  - Integrates with the **GitHub REST API** to display live repository stats (stars, forks, languages) with curated fallback data.
- 🎯 **Smart Fluid Custom Cursor**:
  - Dual-element mouse pointer (tracking dot + trailing lerp circle).
  - Features idle indicator animations and intelligent automatic suppression over interactive links and contact footers.
- 🍔 **Animated Hamburger Navigation**:
  - Floating pill toggle button that morphs into a close icon.
  - Fullscreen glassmorphic overlay navigation with keyboard accessibility (`ESC` to close) and locked body scrolling.
- 📱 **Fully Responsive & Accessible**:
  - Fluid typography with CSS `clamp()`.
  - Optimized for mobile, tablet, and ultra-wide displays.

---

## 🛠 Tech Stack

- **Frontend Core**: [React 18](https://react.dev/), JavaScript (ES Modules)
- **Build Tool**: [Vite 5](https://vitejs.dev/) (lightning-fast HMR and optimized production bundles)
- **Styling**: Vanilla CSS (CSS Custom Properties, 3D Transforms, Glassmorphism, Micro-animations)
- **Graphics**: HTML5 2D Canvas API (High-frame-rate particle and wave simulation)
- **Data & APIs**: GitHub REST API (`https://api.github.com/users/CoderHere07/repos`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or later) and `npm` installed.

### 1. Clone the repository
```bash
git clone https://github.com/CoderHere07/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── pics/
│   │   └── pic.jpeg          # Profile portrait image
│   └── resume.pdf            # Downloadable developer resume
├── src/
│   ├── components/
│   │   ├── Contact.jsx       # Footer contact section with social links
│   │   ├── CustomCursor.jsx  # Interactive trailing custom cursor
│   │   ├── Hero.jsx          # Hero section with intro bio & CTAs
│   │   ├── Marquee.jsx       # Infinite skill words ticker
│   │   ├── Nav.jsx           # Header navbar with theme toggle & hamburger menu
│   │   ├── Projects.jsx      # 3D vertical project deck & canvas backdrop
│   │   ├── Repos.jsx         # Expanding stack accordion for GitHub repos
│   │   └── Skills.jsx        # Categorized core technical expertise grid
│   ├── App.jsx               # Root application layout
│   ├── data.js               # Projects data, pinned repos, and bio information
│   ├── main.jsx              # Application entry point
│   └── styles.css            # Global design system, animations, and theme styles
├── index.html                # HTML entry point with Google Fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## ⚙️ Customization

### Updating Profile & Bio Information
Edit [`src/data.js`](src/data.js) to configure your name, summary, social links, and GitHub username:
```javascript
export const GITHUB_USER = "YourGitHubUsername";

export const profile = {
  name: "Your Name",
  role: "Your Role / Specialty",
  location: "Your Location",
  summary: "Brief description of your background and expertise...",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: `https://github.com/${GITHUB_USER}`,
};
```

### Managing Selected Projects
In [`src/data.js`](src/data.js), update the `projects` array:
```javascript
export const projects = [
  {
    title: "Project Title",
    stack: "React, Node.js, MongoDB",
    summary: "Brief overview of what you built and challenges solved.",
    live: "https://your-live-demo-url.com",
    demoLink: "https://youtube.com/... or demo link",
  },
];
```

### Managing Pinned Repositories
In [`src/data.js`](src/data.js), specify your featured repositories in `PINNED_REPOS`. The application will automatically fetch live star and fork counts from the GitHub API:
```javascript
export const PINNED_REPOS = [
  {
    name: "Repo-Name",
    description: "Curated description for the repository.",
    language: "JavaScript"
  },
];
```

---

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub.
2. Import the project on [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 👤 Author

**Adnan Shahzad**
- GitHub: [@CoderHere07](https://github.com/CoderHere07)
- LinkedIn: [Adnan Shahzad](https://www.linkedin.com/in/adnan-shahzad-6429362a9/)
- Email: [adnanshahzad2003@gmail.com](mailto:adnanshahzad2003@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
