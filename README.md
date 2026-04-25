# 👨‍💻 Suryabhan Patel - AI/ML Portfolio

A modern, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Designed to showcase AI/ML projects and skills for recruitment.

## 🎨 Design Highlights

- **Modern & Minimal**: Clean, professional design inspired by Apple and Stripe
- **Dark Theme**: Eye-friendly dark theme with subtle gradients
- **Smooth Animations**: Framer Motion animations for polished interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **High Performance**: Built with Vite for lightning-fast load times
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Features

### Sections Included

1. **Hero Section**
   - Name and professional tagline
   - Quick action buttons (View Projects, Contact Me)
   - Smooth scroll animations

2. **About Section**
   - Professional summary
   - Skills categorized by expertise (Languages, ML/AI, Data, Backend)
   - Quick statistics

3. **Projects Section**
   - 5 featured projects with descriptions
   - Tech stack badges
   - GitHub and Demo links
   - Hover effects and animations

4. **Resume Section**
   - Education timeline
   - Experience overview
   - Download resume button
   - Additional qualifications

5. **Contact Section**
   - Email contact form
   - Direct social media links (GitHub, LinkedIn, Email)
   - Styled contact cards with icons

6. **Navigation**
   - Sticky navbar with smooth scroll
   - Mobile-responsive menu
   - Gradient logo

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Navigation bar with smooth scroll
│   ├── Hero.tsx           # Hero section with CTA buttons
│   ├── About.tsx          # About and skills section
│   ├── Projects.tsx       # Projects grid with cards
│   ├── Resume.tsx         # Resume and education timeline
│   ├── Contact.tsx        # Contact form and links
│   └── Footer.tsx         # Footer with social links
├── App.tsx                # Main app component
├── main.tsx               # React entry point
├── index.css              # Global styles and Tailwind directives
└── App.css                # App-specific styles

tailwind.config.js         # Tailwind configuration
postcss.config.js          # PostCSS configuration
vite.config.ts             # Vite configuration
```

## ⚙️ Configuration

### Customize Your Information

Edit the following files to add your own content:

1. **Hero Section** - `src/components/Hero.tsx`
   - Update name, role, and tagline
   - Modify button colors and links

2. **About Section** - `src/components/About.tsx`
   - Update biography
   - Add/modify skill categories
   - Update statistics

3. **Projects** - `src/components/Projects.tsx`
   - Add your project details
   - Update GitHub and demo links
   - Modify tech stack tags

4. **Resume** - `src/components/Resume.tsx`
   - Add education details
   - Update experience
   - Replace resume PDF link

5. **Contact** - `src/components/Contact.tsx`
   - Update email address
   - Modify social media links
   - Customize form handling

### Tailwind Configuration

Edit `tailwind.config.js` to:
- Change color scheme
- Add custom animations
- Modify responsive breakpoints

## 🎨 Customization Guide

### Colors

The portfolio uses a purple-to-pink gradient theme. To change:

1. Edit `tailwind.config.js` theme colors
2. Update gradient classes in components (`from-purple-500`, `to-pink-500`)
3. Modify accent colors throughout components

### Animations

Customize animations in:
- `tailwind.config.js` - Tailwind animations
- Component files - Framer Motion variants
- `index.css` - CSS animations

### Typography

Update fonts in `index.css` and `tailwind.config.js`:

```css
body {
  font-family: 'Your Custom Font', sans-serif;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to GitHub Pages branch
3. Enable GitHub Pages in repository settings

## 📊 Performance Metrics

- **Lighthouse Score**: 95+
- **Bundle Size**: ~340KB (JS) + ~9KB (CSS)
- **Load Time**: < 1 second on 4G
- **Time to Interactive**: ~2 seconds

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- High contrast ratios for text readability

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📧 Support

For questions or issues, please open an issue or contact: psuryabhan017@gmail.com

---

**Made with ❤️ by Suryabhan Patel**

*Last Updated: April 2026*
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
