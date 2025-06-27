# Technical Context

## Technology Stack

### Core Technologies
- **SvelteKit**: Modern full-stack framework with file-based routing
- **Svelte 5.0**: Latest version with enhanced reactivity and performance
- **Vite 6.2.6**: Fast build tool and development server
- **CSS3**: Traditional CSS with custom properties for "Her" aesthetic theming
- **JavaScript ES6+**: Modern JavaScript features and modules

### Development Environment
- **Node.js**: Runtime environment for development
- **npm**: Package management and script execution
- **ESLint**: Code linting with Svelte-specific rules
- **Prettier**: Code formatting with Svelte plugin
- **VS Code**: Primary development editor
- **macOS**: Development platform

### Current Dependencies
```json
{
  "devDependencies": {
    "@eslint/compat": "^1.2.5",
    "@eslint/js": "^9.18.0",
    "@sveltejs/adapter-vercel": "^5.6.3",
    "@sveltejs/kit": "^2.16.0",
    "@sveltejs/vite-plugin-svelte": "^5.0.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-svelte": "^3.0.0",
    "globals": "^16.0.0",
    "prettier": "^3.4.2",
    "prettier-plugin-svelte": "^3.3.3",
    "svelte": "^5.0.0",
    "vite": "^6.2.6"
  }
}
```

## Technical Constraints

### Simplicity Requirements
- **No Database**: All content managed through source code and JSON files
- **File-based Routing**: Leverage SvelteKit's built-in routing system
- **Traditional CSS**: Custom properties for theming, no CSS-in-JS complexity
- **Minimal Dependencies**: Keep package.json lean and focused on essentials

### Performance Considerations
- **Mobile-First**: Optimize for mobile performance and experience
- **Fast Loading**: Minimize bundle size and optimize assets
- **Responsive Design**: Efficient layouts that work across all screen sizes
- **Clean Code**: Maintainable, readable component structure

### Browser Support
- **Modern Browsers**: Focus on current versions of Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Core functionality works without JavaScript

## Development Setup

### Local Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Format code with Prettier
npm run lint         # Run ESLint checks
```

### Project Structure
```
personal-website/
├── src/
│   ├── routes/              # SvelteKit file-based routing
│   │   ├── +layout.svelte   # Global layout
│   │   ├── +page.svelte     # Home page
│   │   ├── linguistics/     # Linguistics section
│   │   ├── teaching/        # Teaching section
│   │   ├── music/           # Music section
│   │   ├── portfolio/       # Portfolio section
│   │   ├── writing/         # Writing section with dynamic routing
│   │   └── about/           # About section
│   ├── lib/
│   │   ├── components/      # Reusable Svelte components
│   │   └── styles/          # CSS files and style utilities
│   └── app.html             # HTML template
├── static/                  # Static assets (images, documents)
├── memory-bank/             # Project documentation
└── og_assets/               # Original content and style references
```

## Component Architecture

### Core Components
- **Card.svelte**: Reusable achievement/project display component
- **Hero.svelte**: Page header with blurred background capability
- **Navigation.svelte**: Main site navigation with mobile responsiveness
- **PostList.svelte**: Writing section post listing component

### Layout Strategy
- **Global Layout**: Consistent navigation and footer across all pages
- **Page-specific Layouts**: Flexible content areas for different section needs
- **Component Composition**: Build complex pages from simple, reusable pieces

## Styling Architecture

### "Her" Aesthetic Implementation
```css
:root {
  /* Color Palette */
  --c-red: #D95B43;        /* Primary accent */
  --c-cream: #F4F0E9;      /* Background */
  --c-charcoal: #3A3232;   /* Text */
  --c-wood: #6E4A34;       /* Borders */
  --c-slate: #31363F;      /* Dark backgrounds */
  --c-twilight: #4A4C5E;   /* Accents */
  
  /* Typography */
  --font-serif: 'Lora', serif;      /* Headings */
  --font-sans: 'Inter', sans-serif; /* Body text */
  
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
}
```

### CSS Organization
- **Global Styles**: Typography, color palette, base element styling
- **Component Styles**: Scoped styles within individual Svelte components
- **Utility Classes**: Reusable spacing, layout, and effect classes
- **Responsive Design**: Mobile-first approach with logical breakpoints

## Content Management

### Writing System Architecture
- **JSON Data**: Simple `posts.json` file for blog post metadata
- **Dynamic Routing**: SvelteKit's `[slug]` routing for individual posts
- **File-based Content**: Easy editing through source code updates
- **No CMS**: Direct file editing maintains simplicity and control

### Data Structure Example
```json
{
  "posts": [
    {
      "slug": "book-title-2024",
      "title": "Book Title",
      "author": "Author Name",
      "date": "2024-01-15",
      "quote": "Memorable quote from the book",
      "content": "Reflection content..."
    }
  ]
}
```

## Deployment Configuration

### Vercel Adapter
- **@sveltejs/adapter-vercel**: Optimized for Vercel deployment
- **Static Generation**: Pre-rendered pages for optimal performance
- **Edge Functions**: Serverless functions for dynamic content if needed

### Build Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Vite handles CSS and JavaScript bundling
- **Static Assets**: Efficient serving of images and documents

## Future Technical Considerations

### Scalability
- **Component Library**: Reusable components for easy expansion
- **Content Structure**: Flexible data patterns for new content types
- **Performance Monitoring**: Built-in Vite performance insights

### Maintenance
- **Type Safety**: Consider TypeScript adoption for larger feature sets
- **Testing**: Component testing framework integration if complexity grows
- **Documentation**: Inline code documentation for component usage

### Enhancement Opportunities
- **Image Optimization**: Responsive image handling for better performance
- **SEO Optimization**: Meta tags and structured data implementation
- **Analytics**: Privacy-focused analytics integration if needed
- **Progressive Web App**: PWA features for enhanced mobile experience
