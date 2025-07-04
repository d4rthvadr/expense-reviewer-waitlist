# ExpenseAI - Smart Expense Management Landing Page

A modern, responsive landing page for ExpenseAI built with Astro, featuring beautiful device mockups, smooth animations, and a fully modular component architecture.

## ✨ Features

- **🎨 Beautiful Design**: Modern gradient backgrounds, elegant typography, and polished UI
- **📱 Responsive Layout**: Optimized for all devices with intelligent device mockup positioning
- **🔧 Modular Architecture**: Fully componentized Astro structure for easy maintenance
- **⚡ Interactive Elements**: Smooth scroll indicators, animated FAQ sections, and hover effects
- **🎭 Device Mockups**: Realistic phone and tablet previews showcasing the ExpenseAI app interface
- **🚀 Performance Optimized**: Fast loading with Astro's static generation and optimized assets

## 🎯 Project Overview

This landing page showcases ExpenseAI, an AI-powered expense management application. The page features:
- Hero section with animated device mockups (phone and tablet)
- Interactive FAQ section with expandable items
- Smooth scroll navigation
- Mobile-first responsive design with clipped device previews
- Modern gradient text effects and animations

## 🏗️ Architecture & Refactoring

This project has been completely refactored from a monolithic single-file structure into a modular, component-based architecture:

### **Before**: Single File (~900 lines)
- All HTML, CSS, and JavaScript in one `index.astro` file
- Difficult to maintain and extend
- Mixed concerns and responsibilities

### **After**: Modular Component Structure
- **13 specialized components** with single responsibilities
- **Externalized data** for easy content management
- **Shared utilities** for consistent styling and interactions
- **Type-safe interfaces** for component props

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
