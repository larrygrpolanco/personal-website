<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const projects = [
    {
      title: "SABR Automated Coding Tool",
      description: "Developed research efficiency solution reducing qualitative analysis time from days to minutes with 78% agreement with human coders.",
      date: "2024",
      category: "Research Tools",
      link: "https://github.com/larrygrpolanco"
    },
    {
      title: "Fulbright Planner",
      description: "AI planning application using Taiwan's Ministry of Education standards to generate customized educational materials for Fulbright assistants.",
      date: "2024",
      category: "Education Tech",
      link: "https://github.com/larrygrpolanco"
    },
    {
      title: "Taped Chinese",
      description: "Web application helping language learners study with subtitles, integrating video content with vocabulary learning tools.",
      date: "2023",
      category: "Language Learning",
      link: "https://github.com/larrygrpolanco"
    },
    {
      title: "Python Data Automation",
      description: "Automated transcript cleaning and data processing workflows, reducing processing time by 95% for research teams.",
      date: "2022-2024",
      category: "Data Science"
    },
    {
      title: "Corpus Analysis Tools",
      description: "Built Python/API systems for large-scale text analysis, processing 58M+ words with advanced filtering algorithms.",
      date: "2024",
      category: "NLP"
    },
    {
      title: "Research Dashboard",
      description: "Interactive Tableau dashboard for visualizing lexical demand patterns in streaming content for language learners.",
      date: "2024",
      category: "Data Visualization"
    }
  ];
</script>

<Hero 
  title="Portfolio" 
  subtitle="Coding projects, tools, and technical innovations"
/>

<div class="container">
  <section class="intro">
    <div class="text-container">
      <p>
        My programming work focuses on creating practical tools that solve real problems in research, education, 
        and language learning. I enjoy building solutions that bridge the gap between complex technical capabilities 
        and user-friendly interfaces.
      </p>
    </div>
  </section>
  
  <section class="projects">
    <div class="cards-grid">
      {#each projects as project}
        <Card {...project} />
      {/each}
    </div>
  </section>
  
  <section class="skills">
    <div class="text-container">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Programming</h3>
          <p>Python, JavaScript, SQL, R</p>
        </div>
        <div class="skill-category">
          <h3>Data & Research</h3>
          <p>REDCap, SPSS, Tableau, NodeXL</p>
        </div>
        <div class="skill-category">
          <h3>Web Development</h3>
          <p>SvelteKit, HTML/CSS, APIs</p>
        </div>
        <div class="skill-category">
          <h3>Tools & Platforms</h3>
          <p>GitHub, Atlas.ti, Microsoft Office</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .intro {
    margin-bottom: var(--space-2xl);
  }
  
  .intro p {
    font-size: 1.1rem;
    text-align: center;
    color: var(--c-wood);
  }
  
  .skills {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    margin-top: var(--space-2xl);
  }
  
  .skills h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
    color: var(--c-red);
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-lg);
  }
  
  .skill-category {
    text-align: center;
  }
  
  .skill-category h3 {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--c-charcoal);
    margin-bottom: var(--space-sm);
  }
  
  .skill-category p {
    font-family: var(--font-sans);
    font-weight: 300;
    color: var(--c-wood);
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    .skills {
      padding: var(--space-lg);
    }
    
    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--space-md);
    }
  }
</style>
