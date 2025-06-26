# Technical Context

## Technology Stack

### Core Technologies
- **Vite**: Fast build tool and development server
- **React 19.1.0**: Modern functional components with hooks
- **React Router**: Client-side routing for multi-page navigation
- **CSS3**: Traditional CSS with custom properties for theming
- **JavaScript ES6+**: Modern JavaScript features

### Development Environment
- **Node.js**: Runtime environment
- **npm**: Package management
- **ESLint**: Code linting and quality
- **VS Code**: Primary development editor
- **macOS**: Development platform

### Current Dependencies
```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.29.0",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.5.2",
    "eslint": "^9.29.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.2.0",
    "vite": "^7.0.0"
  }
}
```

## Technical Constraints

### Simplicity Requirements
- **No Complex State Management**: Avoid Redux, Zustand, or Context API complexity
- **Basic React Patterns**: Functional components, simple props, basic hooks only
- **Traditional CSS**: No CSS-in-JS, styled-components, or CSS frameworks
- **Minimal Dependencies**: Keep package.json lean and focused

### Performance Considerations
- **Mobile-First**: Optimize for mobile performance first
- **Fast Loading**: Minimize bundle size and optimize assets
- **Responsive Images**: Proper image optimization for different screen sizes
- **Clean Code**: Maintainable, readable code structure

### Browser Support
- **Modern Browsers**: Focus on current versions of Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Core functionality works without JavaScript

## Development Setup

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure
```
personal-website/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── styles/      # CSS files
│   ├── assets/      # Images, documents
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── memory-bank/     # Project documentation
└── package.json     # Dependencies and scripts
```

## Tool Usage Patterns

### CSS Organization
- **File Structure**: One CSS file per component/page
- **Class Naming**: Descriptive, semantic names (`.hero-section`, `.nav-primary`)
- **Custom Properties**: CSS variables for colors, spacing, typography
- **Comments**: Each CSS file starts with available class documentation
- **Mobile-First**: All styles start with mobile and scale up

### React Development
- **Component Files**: One component per file, clear naming
- **Props Interface**: Simple, well-documented prop passing
- **Educational Comments**: Explain React concepts for learning
- **Functional Components**: Modern React patterns with hooks
- **Component Composition**: Build complex UIs from simple pieces

### Asset Management
- **Images**: Optimized for web, multiple sizes for responsive design
- **Documents**: PDFs, resume files in public directory
- **Icons**: Simple SVG icons, possibly icon font for consistency
- **Fonts**: Web fonts optimized for performance

## Future Technical Considerations

### Routing Setup
- **React Router v6**: Modern routing patterns
- **Clean URLs**: `/research`, `/teaching`, `/creative`, etc.
- **Navigation State**: Active link highlighting
- **Mobile Menu**: Hamburger menu with smooth transitions

### Styling Architecture
- **CSS Custom Properties**: Foundation for "Her" aesthetic theming
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Animation**: Subtle transitions and hover effects
- **Typography**: Scalable type system with custom properties

### Performance Optimization
- **Code Splitting**: Route-based code splitting if needed
- **Image Optimization**: Responsive images with proper formats
- **Bundle Analysis**: Monitor and optimize bundle size
- **Caching**: Proper cache headers for static assets

### Deployment Considerations
- **Static Hosting**: Netlify, Vercel, or GitHub Pages
- **Build Optimization**: Production build with minification
- **Environment Variables**: Configuration for different environments
- **Domain Setup**: Custom domain configuration
