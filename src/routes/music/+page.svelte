<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const achievements = [
    {
      title: "Music Program Director",
      description: "Led comprehensive music education program for 130+ performers, managing logistics, curriculum, and annual events.",
      date: "2020-2022",
      category: "Education"
    },
    {
      title: "Professional Choir Performance",
      description: "Performed with professional choirs and a cappella groups, developing advanced vocal technique and ensemble skills.",
      date: "2018-2022",
      category: "Performance"
    },
    {
      title: "Multi-Instrumental Instruction",
      description: "Taught choir, guitar, and piano from kindergarten through high school, adapting methods for different age groups.",
      date: "2019-2022",
      category: "Teaching"
    },
    {
      title: "Album Production & Recording",
      description: "Produced and recorded multiple albums, managing all aspects from composition to final production.",
      date: "2019-2021",
      category: "Production"
    },
    {
      title: "B.A. Music Education",
      description: "Graduated from Florida State University with comprehensive training in music theory, pedagogy, and performance.",
      date: "2018",
      category: "Education"
    },
    {
      title: "Cross-Cultural Music Integration",
      description: "Incorporated diverse musical traditions and languages into educational programs, fostering cultural appreciation.",
      date: "2019-2022",
      category: "Innovation"
    }
  ];
</script>

<Hero 
  title="Music" 
  subtitle="Performance, education, and creative expression through sound"
/>

<div class="container">
  <section class="intro">
    <div class="text-container">
      <p>
        Music has been a constant thread throughout my life, from formal education and performance to teaching 
        and production. I believe music education develops discipline, creativity, and collaborative skills 
        that transfer to all areas of life.
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
  
  <section class="reflection">
    <div class="text-container">
      <h2>Music & Learning</h2>
      <p>
        Teaching music taught me patience, the importance of practice, and how to break complex skills into 
        manageable steps. These lessons have informed my approach to research, language teaching, and 
        project management throughout my career.
      </p>
      <p>
        While I no longer teach music professionally, the analytical thinking, attention to detail, and 
        collaborative skills developed through musical training continue to enhance my work in linguistics 
        and research. Music remains an important part of who I am.
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
  
  .reflection {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    margin-top: var(--space-2xl);
  }
  
  .reflection h2 {
    text-align: center;
    margin-bottom: var(--space-lg);
    color: var(--c-red);
  }
  
  @media (max-width: 768px) {
    .reflection {
      padding: var(--space-lg);
    }
  }
</style>
