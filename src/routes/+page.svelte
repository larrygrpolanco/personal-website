<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const currentRole = {
    title: "Research Project Specialist",
    description: "Leading data management and process automation at Moffitt Cancer Center, supporting critical clinical research initiatives.",
    date: "2025 - Present"
  };
  
  const highlights = [
    {
      title: "Fulbright English Teaching Assistant",
      description: "Created and managed volunteer tutoring program serving 60+ tutors across 20+ events in Taiwan.",
      date: "2024-2025"
    },
    {
      title: "M.A. Applied Linguistics",
      description: "Graduated with 4.0 GPA from University of South Florida, specializing in bilingual research and data analysis.",
      date: "2024"
    },
    {
      title: "Bilingual Data Collection Specialist",
      description: "Automated data workflows with Python, reducing processing time by 95% while maintaining research integrity.",
      date: "2022-2024"
    }
  ];
</script>

<Hero 
  title="Larry Grullon-Polanco" 
  subtitle="Research Project Specialist • Applied Linguist • Renaissance Professional"
/>

<div class="container">
  <section class="current-role">
    <h2>Current Role</h2>
    <Card {...currentRole} />
  </section>
  
  <section class="highlights">
    <h2>Recent Highlights</h2>
    <div class="cards-grid">
      {#each highlights as highlight}
        <Card {...highlight} />
      {/each}
    </div>
  </section>
  
  <section class="about-preview">
    <div class="text-container">
      <h2>About</h2>
      <p>
        I'm a research professional with a renaissance background spanning linguistics, education, music, and technology. 
        Currently working at Moffitt Cancer Center, I bring diverse experience in data analysis, project coordination, 
        and cross-cultural communication to support impactful clinical research.
      </p>
      <p>
        My journey has taken me from music education and performance to bilingual research and data automation, 
        with recent experience as a Fulbright scholar in Taiwan. I'm passionate about using technology and 
        analytical thinking to solve complex problems and support meaningful work.
      </p>
      <a href="/about" class="cta-link">Learn more about my background →</a>
    </div>
  </section>
</div>

<style>
  .current-role {
    margin-bottom: var(--space-2xl);
  }
  
  .current-role h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
    color: var(--c-red);
  }
  
  .highlights {
    margin-bottom: var(--space-2xl);
  }
  
  .highlights h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
  }
  
  .about-preview {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    margin: var(--space-2xl) 0;
  }
  
  .about-preview h2 {
    text-align: center;
    margin-bottom: var(--space-lg);
  }
  
  .cta-link {
    display: inline-block;
    font-weight: 500;
    color: var(--c-red);
    text-decoration: none;
    margin-top: var(--space-md);
    transition: var(--transition-fast);
  }
  
  .cta-link:hover {
    transform: translateX(4px);
    opacity: 1;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .about-preview {
      padding: var(--space-lg);
      margin: var(--space-xl) 0;
    }
  }
</style>
