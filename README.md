# Pitch Right

A modern, responsive marketing and sales support platform built with React, Vite, Tailwind CSS, DaisyUI and AOS animation.  
Users can explore services, view testimonials, submit inquiry forms via EmailJS, and navigate smoothly across sections.

## Features

- Responsive layout with mobile-first design
- Animated scroll effects powered by AOS
- Email form integration via EmailJS with client-side validation and toast notifications
- Modular React components for Navbar, Banner, Services, Testimonials, FAQs, and more
- Utility-first styling with Tailwind CSS and DaisyUI

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3, DaisyUI
- **Animations**: AOS (Animate On Scroll)
- **Forms & Notifications**: EmailJS, React-Toastify
- **Linting**: ESLint with React and Hooks plugins

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url> pitch-right
   cd pitch-right
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` Start Vite development server
- `npm run build` Generate production build in `/dist`
- `npm run preview` Preview production build locally
- `npm run lint` Run ESLint on source files

## Environment Variables

Create a `.env` file in the project root and define your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then load them in `Banner.jsx` or `index.html` as:

```js
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

## Project Structure

```
├── public/               Static assets (favicon, index.html)
├── src/
│   ├── assets/           Images and icons
│   ├── components/       Reusable UI components
│   ├── layouts/          Root layout and global init (AOS)
│   ├── pages/            Page-level components (Home)
│   ├── index.css         Global styles (Tailwind base)
│   └── main.jsx          Application entry point
├── tailwind.config.js    Tailwind CSS configuration
├── postcss.config.js     PostCSS plugins
├── vite.config.js        Vite build configuration
└── package.json          Dependencies and scripts
```

## Contributing

Contributions welcome! Please open an issue or pull request for bug fixes and enhancements.

## License

This project is licensed under the MIT License.
