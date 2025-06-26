# System Patterns & Architecture

## Overall Architecture

### Component Structure
```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Navigation, header, footer
│   ├── Sections/        # Content section components
│   └── Common/          # Shared components (buttons, cards, etc.)
├── pages/               # Route-based page components
├── styles/              # CSS files with clear class organization
└── assets/              # Images, icons, documents
```

### Routing Strategy
- **React Router**: Multi-page navigation with clean URLs
- **Page Components**: Each major section gets its own route/page
- **Nested Routes**: Potential for sub-sections within major areas
- **Mobile Navigation**: Hamburger menu transforms top navigation

## Key Technical Decisions

### CSS Architecture
- **Traditional CSS**: Simple, straightforward approach for LLM and novice developer
- **Custom Properties**: CSS variables for future theming (Her aesthetic)
- **Mobile-First**: All styles start with mobile and scale up
- **Class Naming**: Descriptive, semantic names (e.g., `.hero-section`, `.nav-primary`)
- **Component Comments**: Each CSS file starts with available class documentation

### React Patterns
- **Functional Components**: Modern React with hooks
- **Component Composition**: Reusable, composable pieces
- **Props Passing**: Simple data flow, no complex state management
- **Educational Comments**: Clear explanations for learning purposes

### Responsive Design
- **Breakpoints**: Mobile (default), Tablet (768px+), Desktop (1024px+)
- **Grid System**: CSS Grid and Flexbox for layout flexibility
- **Navigation**: Top nav on desktop, hamburger menu on mobile
- **Content Stacking**: Logical content flow on smaller screens

## Component Relationships

### Layout Components
- **Header**: Contains navigation, logo/name
- **Navigation**: Responsive menu system
- **Footer**: Contact info, social links
- **PageLayout**: Wrapper for consistent page structure

### Content Components
- **HeroSection**: Prominent intro with current role highlight
- **ContentSection**: Reusable section wrapper
- **PersonalVignette**: Small story/reflection component
- **ProjectCard**: Showcase individual projects/achievements
- **ContactForm**: Simple contact interface

### Page Components
- **Home**: Hero + brief overview + current role prominence
- **Research**: Linguistics work, publications, conferences
- **Teaching**: Education experience, Fulbright, philosophy
- **Creative**: Music + Programming (combined for flexibility)
- **Writing**: Book reflections, essays, personal thoughts
- **About**: Personal story, detailed background, contact

## Critical Implementation Paths

### Phase 1: Skeleton Structure
1. Set up routing with React Router
2. Create basic layout components (Header, Navigation, Footer)
3. Build page structure with placeholder content
4. Implement responsive navigation
5. Establish CSS foundation with custom properties

### Phase 2: Content Integration
1. Add real content to each section
2. Implement personal vignette components
3. Create project/achievement showcase components
4. Add contact functionality

### Phase 3: Future Styling (Her Aesthetic)
1. Implement warm color palette (coral, peach, gold)
2. Add retro-futuristic typography
3. Create intimate, personal visual touches
4. Refine animations and interactions

## Flexibility Considerations

### Content Reorganization
- **Modular Sections**: Each content area as independent component
- **Route Configuration**: Easy to reorder navigation and pages
- **Component Props**: Flexible data passing for content variations
- **CSS Variables**: Quick theme and layout adjustments

### Future Expansion
- **New Sections**: Easy to add new pages/routes
- **Content Types**: Flexible component system for different content
- **Styling Updates**: CSS custom properties enable quick visual changes
- **Performance**: Simple structure allows for easy optimization
