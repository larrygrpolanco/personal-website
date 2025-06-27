# System Patterns & Architecture

## Overall Architecture

### SvelteKit File-based Routing Structure
```
src/
├── routes/                    # SvelteKit routing system
│   ├── +layout.svelte        # Global layout with navigation
│   ├── +page.svelte          # Home page
│   ├── linguistics/
│   │   └── +page.svelte      # Linguistics section
│   ├── teaching/
│   │   └── +page.svelte      # Teaching section
│   ├── music/
│   │   └── +page.svelte      # Music section
│   ├── portfolio/
│   │   └── +page.svelte      # Portfolio section
│   ├── writing/
│   │   ├── +page.svelte      # Writing index
│   │   ├── [slug]/
│   │   │   └── +page.svelte  # Dynamic post pages
│   │   └── posts.json        # Post data
│   └── about/
│       └── +page.svelte      # About section
├── lib/
│   ├── components/           # Reusable Svelte components
│   │   ├── Card.svelte       # Achievement/project cards
│   │   ├── Hero.svelte       # Page headers with blur effects
│   │   ├── Navigation.svelte # Main site navigation
│   │   └── PostList.svelte   # Writing posts listing
│   └── styles/
│       ├── global.css        # "Her" aesthetic implementation
│       └── components.css    # Component-specific styles
└── app.html                  # HTML template
```

## Key Technical Decisions

### Component Architecture Philosophy
- **Reusable Components**: Build once, use everywhere approach
- **Consistent Data Patterns**: Standardized data structures across all sections
- **Scoped Styling**: Component-specific styles with global theme variables
- **Composition over Configuration**: Simple, composable components

### Content Management Strategy
- **Source Code Editing**: All content updates through direct file editing
- **JSON Data Files**: Structured data for dynamic content (writing section)
- **Static Content**: Page-specific content embedded in component files
- **No Database**: Maintain simplicity with file-based content management

### Styling Architecture
- **"Her" Aesthetic Variables**: CSS custom properties for consistent theming
- **Mobile-First Design**: All styles start mobile and scale up
- **Component Scoping**: Svelte's built-in style scoping prevents conflicts
- **Utility Classes**: Minimal utility classes for common patterns

## Component Relationships

### Core Component Hierarchy
```
+layout.svelte (Global Layout)
├── Navigation.svelte
├── [Page Content]
│   ├── Hero.svelte (Page Header)
│   ├── Card.svelte (Achievement Display)
│   └── PostList.svelte (Writing Section Only)
└── Footer (Inline in Layout)
```

### Data Flow Patterns
- **Props Down**: Parent components pass data to children via props
- **Events Up**: Child components communicate back via Svelte events
- **Static Data**: Most content embedded directly in components
- **Dynamic Data**: Writing section uses JSON file + dynamic routing

## Critical Implementation Paths

### Phase 1: Foundation & Structure
1. **Global Layout Setup**
   - Implement +layout.svelte with navigation and footer
   - Set up "Her" aesthetic CSS variables and typography
   - Create responsive navigation component

2. **Core Component Creation**
   - Build Card.svelte for consistent achievement display
   - Create Hero.svelte for page headers with blur effects
   - Establish component styling patterns

3. **Page Structure Implementation**
   - Create all 7 main page routes with placeholder content
   - Implement consistent page layouts using Hero and Card components
   - Test navigation and routing functionality

### Phase 2: Content Integration
1. **Achievement Data Integration**
   - Populate all sections with real content from resume/background
   - Implement consistent card-based presentation
   - Ensure 1-3 sentence achievement descriptions

2. **Writing System Implementation**
   - Create posts.json with initial book reflections
   - Implement dynamic routing for individual posts
   - Build PostList component for writing index

3. **Content Refinement**
   - Polish all content for impact and clarity
   - Ensure consistent voice and presentation
   - Test all content displays and interactions

### Phase 3: Polish & Optimization
1. **Visual Refinement**
   - Fine-tune "Her" aesthetic implementation
   - Add subtle animations and hover effects
   - Optimize responsive design across devices

2. **Performance Optimization**
   - Optimize images and assets
   - Test loading performance
   - Ensure accessibility standards

## Reusable Component Patterns

### Card Component Pattern
```svelte
<!-- Card.svelte -->
<script>
  export let title;
  export let description;
  export let link = null;
  export let date = null;
</script>

<div class="card">
  <h3>{title}</h3>
  <p>{description}</p>
  {#if date}<span class="date">{date}</span>{/if}
  {#if link}<a href={link}>More Info</a>{/if}
</div>
```

### Hero Component Pattern
```svelte
<!-- Hero.svelte -->
<script>
  export let title;
  export let subtitle = null;
  export let backgroundImage = null;
</script>

<section class="hero" class:has-bg={backgroundImage}>
  {#if backgroundImage}
    <div class="hero-bg" style="background-image: url({backgroundImage})"></div>
  {/if}
  <div class="hero-content">
    <h1>{title}</h1>
    {#if subtitle}<p>{subtitle}</p>{/if}
  </div>
</section>
```

### Page Structure Pattern
```svelte
<!-- Example: linguistics/+page.svelte -->
<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const achievements = [
    {
      title: "Achievement Title",
      description: "1-3 sentence description of accomplishment.",
      date: "2024"
    }
    // ... more achievements
  ];
</script>

<Hero title="Linguistics" subtitle="Research, publications, and academic work" />

<section class="content">
  <div class="cards-grid">
    {#each achievements as achievement}
      <Card {...achievement} />
    {/each}
  </div>
</section>
```

## Data Structure Patterns

### Achievement Data Structure
```javascript
const achievement = {
  title: "Achievement Title",
  description: "1-3 sentence impact description",
  link: "optional-url",
  date: "optional-date",
  category: "optional-category"
};
```

### Writing Post Data Structure
```json
{
  "slug": "book-title-year",
  "title": "Book Title",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "quote": "Memorable quote from the book",
  "content": "Personal reflection content..."
}
```

## Flexibility Considerations

### Easy Content Updates
- **Embedded Data**: Achievement arrays in component files for easy editing
- **JSON Management**: Writing posts managed through simple JSON file
- **Component Reuse**: Same Card component used across all sections
- **Consistent Patterns**: Standardized data structures enable easy additions

### Future Expansion Capabilities
- **New Sections**: Easy to add new routes following established patterns
- **Content Types**: Flexible component system supports different content formats
- **Styling Updates**: CSS custom properties enable quick visual changes
- **Performance Scaling**: Simple architecture supports optimization as needed

### Maintenance Simplicity
- **Single Source of Truth**: Each piece of content has one clear location
- **Component Documentation**: Clear prop interfaces and usage examples
- **Consistent Naming**: Predictable file and component naming conventions
- **Minimal Dependencies**: Reduced complexity through focused technology choices
