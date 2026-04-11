# Portfolio Project — Init Reference

## Quick Start

```bash
npm install
npm run dev
```

## Tech Stack

| Technology       | Version | Purpose                      |
| ---------------- | ------- | ---------------------------- |
| React            | 19.2    | UI Library                   |
| Vite             | 7.2     | Build Tool & Dev Server      |
| Tailwind CSS     | 4.1     | Utility-First Styling        |
| Framer Motion    | 12.28   | Animations & Transitions     |
| React Router DOM | 7.12    | Client-Side Routing          |
| React Typewriter | 5.0     | Typing Effect on Hero        |

## Project Structure

```
src/
├── assets/            # Images, SVGs, resume PDF
├── components/        # Reusable UI components
│   ├── Button.jsx         — Generic nav button
│   ├── BodyButton.jsx     — Icon + text button (hero section)
│   ├── EducationDiv.jsx   — Timeline education card
│   ├── Menu.jsx           — Mobile slide-in navigation
│   ├── MockDiv.jsx        — Spacer for education timeline
│   ├── OtherSkills.jsx    — Software skills card
│   └── SkillsDiv.jsx      — Animated skill bar
├── layouts/           # Page-level section layouts
│   ├── Navigation.jsx     — Sticky navbar with scroll-hide
│   ├── Body.jsx           — Hero section with typewriter
│   ├── Education.jsx      — Education timeline
│   ├── Skills.jsx         — Skills bars + other skills
│   └── Project.jsx        — Projects showcase
├── pages/             # Route-level page components
│   └── Home.jsx           — Main single-page layout
├── routes/
│   └── AppRoutes.jsx      — Route definitions
├── styles/
│   ├── main.css           — Global styles + Tailwind import
│   └── hexagon.css        — Hexagonal profile image clip
└── main.jsx               — App entry point
```

## Design Tokens

| Token           | Value                                 |
| --------------- | ------------------------------------- |
| Primary Accent  | `#d4a373` (warm gold)                 |
| Link/Bar Color  | `#67a3fd` (blue)                      |
| BG Gradient     | `#1a1a1a → #0d1b2a → #1b263b`        |
| Font            | Google Flex (variable)                |
| Text Color      | White (`text-white`)                  |

## Key Patterns

- **Scroll-to-section**: Desktop nav uses `scrollIntoView({ behavior: 'smooth' })`
- **Scroll-hide navbar**: Shows on scroll-up, hides on scroll-down (80px threshold)
- **Framer Motion animations**: `whileInView` with `viewport: { once: false }` for re-triggering
- **Responsive breakpoints**: Mobile-first with `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Mobile menu**: AnimatePresence + slide-in from right

## Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Production build        |
| `npm run lint`  | Run ESLint              |
| `npm run preview` | Preview production build |

## Deployment

Configured for Vercel (`vercel.json` present).
