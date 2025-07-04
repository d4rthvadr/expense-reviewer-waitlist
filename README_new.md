# ExpenseAI - Smart Expense Management Landing Page

A modern, responsive waitlist landing page for ExpenseAI built with Astro, featuring beautiful device mockups, smooth animations, and a fully modular component architecture.

## ✨ Features

- **🎨 Beautiful Design**: Modern gradient backgrounds, elegant typography, and polished UI
- **📱 Responsive Layout**: Optimized for all devices with intelligent device mockup positioning
- **🔧 Modular Architecture**: Fully componentized Astro structure for easy maintenance
- **⚡ Interactive Elements**: Smooth scroll indicators, animated FAQ sections, and hover effects
- **🎭 Device Mockups**: Realistic phone and tablet previews showcasing the ExpenseAI app interface
- **🚀 Performance Optimized**: Fast loading with Astro's static generation and optimized assets
- **♿ Accessible**: ARIA labels, semantic HTML, and keyboard navigation support

## 🎯 Project Overview

This landing page showcases ExpenseAI, an AI-powered expense management application. The page features:

- Hero section with animated device mockups (phone and tablet)
- Interactive FAQ section with expandable items
- Smooth scroll navigation with animated indicators
- Mobile-first responsive design with layered device previews
- Modern gradient text effects and micro-animations
- Email waitlist signup functionality

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

## 📁 Project Structure

```text
expense-review-waitlist/
├── public/
│   ├── favicon.svg
│   └── background.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── FAQ/
│   │   │   ├── FAQ.astro              # Main FAQ container
│   │   │   ├── FAQList.astro          # FAQ items wrapper
│   │   │   └── FAQItem.astro          # Individual FAQ item
│   │   ├── Hero/
│   │   │   ├── Hero.astro             # Main hero section
│   │   │   ├── HeroContent.astro      # Hero text and CTA
│   │   │   ├── DeviceMockups.astro    # Device preview container
│   │   │   ├── PhonePreview.astro     # Phone mockup component
│   │   │   ├── TabletPreview.astro    # Tablet mockup component
│   │   │   └── ScrollIndicator.astro  # Scroll down indicator
│   │   ├── UI/
│   │   │   ├── Button.astro           # Reusable button component
│   │   │   └── GradientText.astro     # Gradient text component
│   │   └── Welcome.astro              # Legacy welcome component
│   ├── data/
│   │   └── faq.ts                     # FAQ data and types
│   ├── layouts/
│   │   └── Layout.astro               # Base layout component
│   ├── pages/
│   │   └── index.astro                # Main page (now clean!)
│   ├── scripts/
│   │   └── app.ts                     # Client-side interactions
│   └── styles/
│       └── global.css                 # Global styles and animations
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🧩 Component Architecture

### Hero Section Components

- **`Hero.astro`**: Main hero container with responsive layout
- **`HeroContent.astro`**: Title, description, and CTA button
- **`DeviceMockups.astro`**: Container for device previews with responsive positioning
- **`PhonePreview.astro`**: Mobile device mockup with app interface
- **`TabletPreview.astro`**: Tablet device mockup with dashboard view
- **`ScrollIndicator.astro`**: Animated scroll indicator with smooth navigation

### FAQ Components

- **`FAQ.astro`**: FAQ section container with responsive layout
- **`FAQList.astro`**: FAQ items wrapper with proper spacing
- **`FAQItem.astro`**: Individual expandable FAQ item with animations

### UI Components

- **`Button.astro`**: Reusable button with multiple variants and hover effects
- **`GradientText.astro`**: Cross-browser gradient text with fallbacks

### Data & Scripts

- **`faq.ts`**: Centralized FAQ data with TypeScript interfaces
- **`app.ts`**: Client-side JavaScript for FAQ toggling and smooth scrolling

## 📱 Mobile Responsiveness

The landing page features advanced mobile responsiveness:

### Device Mockups on Mobile

- **Layered Display**: Both phone and tablet mockups appear on mobile screens
- **Top-Down Clipping**: Devices are clipped from the top for a natural preview effect
- **Intelligent Positioning**: Devices reposition based on screen size and orientation

### Responsive Layout Features

- **Fluid Typography**: Text scales appropriately across all device sizes
- **Adaptive Spacing**: Margins and padding adjust for optimal mobile viewing
- **Touch-Friendly**: Buttons and interactive elements sized for touch interaction
- **Performance**: Optimized images and animations for mobile performance

## 🎨 Design System

### Color Palette

- **Primary Gradient**: Blue to purple gradient for brand elements
- **Background**: Dark theme with subtle gradients
- **Text**: High contrast white and gray text for readability
- **Accents**: Blue and purple accent colors for interactive elements

### Typography

- **Headings**: Large, bold typography with gradient effects
- **Body Text**: Clean, readable font with proper line height
- **Interactive Text**: Hover effects and state changes

### Animations

- **Smooth Transitions**: CSS transitions for all interactive elements
- **Scroll Animations**: Animated scroll indicator with smooth navigation
- **FAQ Interactions**: Expandable sections with smooth open/close animations
- **Device Previews**: Subtle hover effects on device mockups

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

## 🚀 Development Workflow

### Adding New Components

1. Create component in appropriate folder (`components/[Category]/`)
2. Define TypeScript interfaces for props if needed
3. Add scoped styles within the component
4. Import and use in parent components

### Modifying FAQ Data

1. Edit `src/data/faq.ts` to add/modify FAQ items
2. Follow the `FAQItem` interface structure
3. Changes automatically reflect in the FAQ section

### Customizing Styles

1. Global styles: Edit `src/styles/global.css`
2. Component styles: Edit scoped styles in individual `.astro` files
3. Color scheme: Update CSS custom properties in `global.css`

## 🔧 Technical Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Language**: TypeScript for type safety
- **Styling**: Scoped CSS with global styles
- **Deployment**: Optimized for static hosting (Vercel, Netlify, etc.)

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Component-Based Architecture](https://docs.astro.build/en/basics/astro-components/)
- [TypeScript in Astro](https://docs.astro.build/en/guides/typescript/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the established component structure
4. Test responsive design on multiple devices
5. Submit a pull request

---

Built with ❤️ using Astro and modern web technologies.
