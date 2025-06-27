<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const achievements = [
    {
      title: "Fulbright English Teaching Assistant",
      description: "Selected for prestigious cultural exchange program in Taiwan, teaching English and coordinating volunteer programs.",
      date: "2024-2025",
      category: "International"
    },
    {
      title: "Volunteer Program Coordinator",
      description: "Created and managed comprehensive tutoring program serving 60+ tutors across 20+ events with systematic processes.",
      date: "2024-2025",
      category: "Leadership"
    },
    {
      title: "Graduate Teaching Assistant",
      description: "Tutored 40+ students in Spanish and Chinese, incorporating metacognitive strategies and job-specific English instruction.",
      date: "2022-2024",
      category: "University"
    },
    {
      title: "ESL Facilities Program",
      description: "Conducted needs analysis and developed targeted English instruction for USF employees in professional contexts.",
      date: "2023",
      category: "Professional Development"
    },
    {
      title: "Music Program Director",
      description: "Managed comprehensive music education program for 130+ performers, coordinating logistics and curriculum development.",
      date: "2020-2022",
      category: "Arts Education"
    },
    {
      title: "Multilingual Education",
      description: "Extensive experience teaching across languages (English, Spanish, Chinese) and cultural contexts with adaptive methodologies.",
      date: "2020-Present",
      category: "Specialization"
    }
  ];
</script>

<Hero 
  title="Teaching" 
  subtitle="Education experience, cultural exchange, and pedagogical innovation"
/>

<div class="container">
  <section class="intro">
    <div class="text-container">
      <p>
        My teaching philosophy centers on creating inclusive, engaging environments where students develop both 
        language skills and cultural competence. I believe education should foster curiosity, critical thinking, 
        and the confidence to engage with complex ideas across linguistic and cultural boundaries.
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
  
  <section class="philosophy">
    <div class="text-container">
      <h2>Teaching Philosophy</h2>
      <p>
        Education is fundamentally about empowerment. Whether teaching language, music, or research methods, 
        I focus on building students' confidence and metacognitive awareness. Learning happens best when 
        students understand not just what they're learning, but how they learn.
      </p>
      <p>
        My multicultural background and experience across different educational systems inform my adaptive 
        approach to instruction. I believe in meeting students where they are and providing scaffolded 
        support that honors their diverse backgrounds while challenging them to grow.
      </p>
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
  
  .philosophy {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    margin-top: var(--space-2xl);
  }
  
  .philosophy h2 {
    text-align: center;
    margin-bottom: var(--space-lg);
    color: var(--c-red);
  }
  
  @media (max-width: 768px) {
    .philosophy {
      padding: var(--space-lg);
    }
  }
</style>
