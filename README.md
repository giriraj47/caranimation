# 🏎️ Car Scroll Animation Project

A premium, high-performance scroll-driven animation website built with **React**, **Vite**, and **GSAP**. This project features a smooth car animation that reveals content as the user scrolls, creating an engaging storytelling experience.

## ✨ Features

- **Smooth Scroll-Driven Animation**: Utilizes **GSAP ScrollTrigger** for frame-perfect animation control.
- **Dynamic Content Reveal**: Text and informational cards fade and move into view based on the scroll position.
- **Responsive Design**: Optimized for different screen sizes, ensuring the car and animations stay within the viewport.
- **Premium Aesthetics**: Dark mode interface with vibrant, high-contrast typography and statistics cards.
- **Fast Performance**: Built with **Vite** for near-instant hot module replacement (HMR) and optimized build times.

## 🚀 Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **Animation**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd caranimation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the animation.

## 📂 Project Structure

```text
src/
├── App.jsx             # Main application component & GSAP logic
├── App.css             # Component-specific styles
├── index.css           # Global styles and Tailwind configuration
└── main.jsx            # React entry point
public/                 # Static assets (car images, etc.)
package.json            # Project dependencies and scripts
vite.config.js          # Vite configuration
```

## 🎮 How it Works

The animation is driven by the user's scroll position. As you scroll down:
1. The **Car** moves horizontally across the "track".
2. The **Welcome Text** ("WELCOME ITZFIZZ") is revealed character by character as the car passes by.
3. **Statistic Cards** (e.g., "58% Increase", "23% Decreased") fade into view at specific scroll intervals to provide key business metrics.

## 🎨 Design Decisions

- **Sticky Track**: The animation section stays "stuck" in the viewport while the internal elements animate, providing a focused experience.
- **High Contrast**: The use of bright greens, yellows, and oranges against a dark background ensures that key statistics are immediately eye-catching.
- **Micro-animations**: Subtle transitions and easing functions (`power2.out`) provide a premium, "alive" feel.

