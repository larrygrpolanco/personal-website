<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const achievements = [
    {
      title: "M.A. Applied Linguistics",
      description: "Graduated with 4.0 GPA from University of South Florida, specializing in bilingual research and corpus analysis.",
      date: "2024",
      category: "Education"
    },
    {
      title: "YouTube Academic Spoken English Corpus",
      description: "Built Python/API system to collect and analyze 58M-word academic corpus from 9k+ sources with 97% classification accuracy.",
      date: "2024",
      category: "Research"
    },
    {
      title: "Multi-Source Data Analysis: Taiwan Election 2024",
      description: "Led team analysis of 290k social media communications for election data journalism project using advanced analytical tools.",
      date: "2024",
      category: "Research"
    },
    {
      title: "TESOL Conference Presentations",
      description: "Presented research on Netflix and incidental vocabulary acquisition at multiple international conferences.",
      date: "2024",
      category: "Conferences"
    },
    {
      title: "TESOLgraphics Research Member",
      description: "Create accessible infographics translating secondary research for language teachers and practitioners.",
      date: "2023-Present",
      category: "Publications"
    },
    {
      title: "Bilingual Research Expertise",
      description: "Specialized in Spanish-English bilingual studies, corpus linguistics, and second language acquisition research methods.",
      date: "2022-2024",
      category: "Specialization"
    }
  ];
</script>

<Hero 
  title="Linguistics" 
  subtitle="Research, publications, and academic contributions in applied linguistics"
/>

<div class="container">
  <section class="intro">
    <div class="text-container">
      <p>
        My work in applied linguistics focuses on bilingual research, corpus analysis, and second language acquisition. 
        I combine traditional linguistic methods with modern computational approaches to understand how language learning 
        and use patterns emerge in different contexts.
      </p>
    </div>
  </section>
  
  <section class="achievements">
    <div class="cards-grid">
      {#each achievements as achievement}
        <Card {...achievement} />
      {/each}
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
</style>
