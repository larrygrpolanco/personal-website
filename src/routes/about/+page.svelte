<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  const languages = [
    {
      title: "English",
      description: "Native speaker with extensive experience in academic and professional communication.",
      category: "Native"
    },
    {
      title: "Spanish",
      description: "Heritage speaker with professional proficiency in research and educational contexts.",
      category: "Heritage"
    },
    {
      title: "Chinese (Mandarin)",
      description: "Conversational proficiency developed through study and immersion in Taiwan.",
      category: "Learned"
    }
  ];
</script>

<Hero 
  title="About" 
  subtitle="Personal story, background, and ways to connect"
/>

<div class="container">
  <section class="story">
    <div class="text-container">
      <h2>My Story</h2>
      <p>
        I'm a research professional with a renaissance background that spans linguistics, education, music, and technology. 
        Currently working as a Research Project Specialist at Moffitt Cancer Center, I bring diverse experience in data 
        analysis, project coordination, and cross-cultural communication to support impactful clinical research.
      </p>
      <p>
        My journey began with music education at Florida State University, where I developed skills in performance, 
        teaching, and creative collaboration. This foundation taught me patience, attention to detail, and the importance 
        of practice—lessons that have informed every aspect of my career since.
      </p>
      <p>
        Transitioning into linguistics, I earned my M.A. in Applied Linguistics from the University of South Florida 
        with a 4.0 GPA, specializing in bilingual research and corpus analysis. My work combines traditional linguistic 
        methods with modern computational approaches to understand language learning and use patterns.
      </p>
      <p>
        As a Fulbright English Teaching Assistant in Taiwan, I created and managed volunteer programs while gaining 
        valuable cross-cultural experience. This role reinforced my belief in education as a tool for empowerment 
        and cultural understanding.
      </p>
      <p>
        Throughout my career, I've been drawn to the intersection of technology and human needs. Whether automating 
        data workflows, building educational tools, or creating research solutions, I enjoy using technical skills 
        to solve real problems and support meaningful work.
      </p>
    </div>
  </section>
  
  <section class="languages">
    <h2>Languages</h2>
    <div class="cards-grid">
      {#each languages as language}
        <Card {...language} />
      {/each}
    </div>
  </section>
  
  <section class="values">
    <div class="text-container">
      <h2>What Drives Me</h2>
      <p>
        I believe in the power of education to transform lives and communities. Whether through language learning, 
        research, or technology, I'm motivated by work that makes a positive difference in people's lives.
      </p>
      <p>
        My diverse background has taught me that innovation often happens at the intersection of different fields. 
        I bring this perspective to everything I do, looking for connections and solutions that others might miss.
      </p>
      <p>
        I value authenticity, continuous learning, and the importance of building systems that work for everyone. 
        In my current role and future endeavors, I'm committed to using my skills to support research that can 
        improve health outcomes and advance human knowledge.
      </p>
    </div>
  </section>
  
  <section class="contact">
    <div class="text-container">
      <h2>Let's Connect</h2>
      <p>
        I'm always interested in connecting with fellow researchers, educators, and professionals who share 
        a passion for meaningful work. Whether you're interested in collaboration, have questions about my 
        experience, or just want to chat about linguistics, music, or technology, I'd love to hear from you.
      </p>
      
      <div class="contact-links">
        <a href="mailto:larrygrpolanco@gmail.com" class="contact-link primary">
          Send me an email
        </a>
        <div class="social-links">
          <a href="https://linkedin.com/in/larrygrpolanco" class="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/larrygrpolanco" class="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .story {
    margin-bottom: var(--space-2xl);
  }
  
  .story h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
    color: var(--c-red);
  }
  
  .languages {
    margin-bottom: var(--space-2xl);
  }
  
  .languages h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
  }
  
  .values {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    margin-bottom: var(--space-2xl);
  }
  
  .values h2 {
    text-align: center;
    margin-bottom: var(--space-lg);
    color: var(--c-red);
  }
  
  .contact {
    background-color: var(--c-slate);
    color: var(--c-cream);
    border-radius: var(--space-sm);
    padding: var(--space-xl);
  }
  
  .contact h2 {
    text-align: center;
    margin-bottom: var(--space-lg);
    color: var(--c-cream);
  }
  
  .contact p {
    color: var(--c-cream);
    opacity: 0.9;
    text-align: center;
  }
  
  .contact-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    margin-top: var(--space-xl);
  }
  
  .contact-link {
    font-family: var(--font-sans);
    font-weight: 500;
    text-decoration: none;
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--space-sm);
    transition: var(--transition-fast);
    text-align: center;
  }
  
  .contact-link.primary {
    background-color: var(--c-red);
    color: var(--c-cream);
    font-size: 1.1rem;
  }
  
  .contact-link.primary:hover {
    background-color: #C14431;
    transform: translateY(-2px);
    opacity: 1;
  }
  
  .social-links {
    display: flex;
    gap: var(--space-lg);
  }
  
  .social-links .contact-link {
    color: var(--c-cream);
    border: 1px solid rgba(244, 240, 233, 0.3);
    opacity: 0.8;
  }
  
  .social-links .contact-link:hover {
    opacity: 1;
    border-color: var(--c-red);
    color: var(--c-red);
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .values {
      padding: var(--space-lg);
    }
    
    .contact {
      padding: var(--space-lg);
    }
    
    .social-links {
      flex-direction: column;
      gap: var(--space-md);
    }
    
    .contact-links {
      gap: var(--space-md);
    }
  }
</style>
