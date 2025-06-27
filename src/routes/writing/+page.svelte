<script>
  import Hero from '$lib/components/Hero.svelte';
  import Card from '$lib/components/Card.svelte';
  
  // Placeholder posts - will be replaced with JSON data system in Phase 2
  const posts = [
    {
      title: "Atomic Habits",
      description: "\"You do not rise to the level of your goals. You fall to the level of your systems.\" - Reflections on building sustainable change through small, consistent actions.",
      date: "2024-12-15",
      category: "Self-Development"
    },
    {
      title: "The Pragmatic Programmer",
      description: "\"Care about your craft. Think! about your work.\" - Lessons on software craftsmanship that apply far beyond programming.",
      date: "2024-11-28",
      category: "Technology"
    },
    {
      title: "Educated",
      description: "\"You can love someone and still choose to say goodbye to them.\" - A powerful memoir about education, family, and self-discovery.",
      date: "2024-10-22",
      category: "Memoir"
    }
  ];
</script>

<Hero 
  title="Writing" 
  subtitle="Book reflections, essays, and intellectual explorations"
/>

<div class="container">
  <section class="intro">
    <div class="text-container">
      <p>
        This is my space for reflecting on books, ideas, and experiences that shape my thinking. 
        Rather than traditional reviews, these are personal explorations of how different texts 
        connect to my work, learning, and understanding of the world.
      </p>
    </div>
  </section>
  
  <section class="posts">
    <h2>Recent Reflections</h2>
    <div class="posts-list">
      {#each posts as post}
        <article class="post-preview">
          <div class="post-meta">
            <span class="post-category">{post.category}</span>
            <span class="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <h3 class="post-title">{post.title}</h3>
          <p class="post-description">{post.description}</p>
          <a href="/writing/{post.title.toLowerCase().replace(/\s+/g, '-')}" class="read-more">
            Read reflection →
          </a>
        </article>
      {/each}
    </div>
  </section>
  
  <section class="coming-soon">
    <div class="text-container">
      <h2>Coming Soon</h2>
      <p>
        I'm building a simple system to share book reflections and occasional essays. 
        This space will grow as I continue reading and thinking about ideas that matter to me. 
        Check back soon for more content.
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
  
  .posts h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
    color: var(--c-red);
  }
  
  .posts-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
  }
  
  .post-preview {
    background-color: #FFFFFF;
    padding: var(--space-lg);
    border: 1px solid rgba(58, 50, 50, 0.08);
    border-radius: var(--space-sm);
    transition: var(--transition-smooth);
  }
  
  .post-preview:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px var(--c-glow-red);
    border-color: rgba(217, 91, 67, 0.15);
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-md);
  }
  
  .post-category {
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--c-red);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .post-date {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: var(--c-wood);
  }
  
  .post-title {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--c-charcoal);
    margin-bottom: var(--space-md);
    line-height: 1.3;
  }
  
  .post-description {
    font-family: var(--font-sans);
    font-weight: 300;
    line-height: 1.6;
    color: var(--c-charcoal);
    margin-bottom: var(--space-md);
  }
  
  .read-more {
    font-family: var(--font-sans);
    font-weight: 500;
    color: var(--c-red);
    text-decoration: none;
    transition: var(--transition-fast);
  }
  
  .read-more:hover {
    transform: translateX(4px);
    opacity: 1;
  }
  
  .coming-soon {
    background-color: #FFFFFF;
    border-radius: var(--space-sm);
    padding: var(--space-xl);
    text-align: center;
  }
  
  .coming-soon h2 {
    color: var(--c-red);
    margin-bottom: var(--space-lg);
  }
  
  .coming-soon p {
    color: var(--c-wood);
    margin-bottom: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .post-preview {
      padding: var(--space-md);
    }
    
    .post-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-xs);
    }
    
    .post-title {
      font-size: 1.25rem;
    }
    
    .coming-soon {
      padding: var(--space-lg);
    }
  }
</style>
