<script>
  export let title;
  export let description;
  export let link = null;
  export let date = null;
  export let category = null;
</script>

<div class="card">
  {#if category}
    <span class="card-category">{category}</span>
  {/if}
  
  <h3 class="card-title">{title}</h3>
  
  <p class="card-description">{description}</p>
  
  <div class="card-footer">
    {#if date}
      <span class="card-date">{date}</span>
    {/if}
    
    {#if link}
      <a href={link} class="card-link" target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    {/if}
  </div>
</div>

<style>
  .card {
    background-color: #FFFFFF;
    padding: var(--space-lg);
    border: 1px solid rgba(58, 50, 50, 0.08);
    border-radius: var(--space-sm);
    transition: var(--transition-smooth);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px -5px var(--c-glow-red);
    border-color: rgba(217, 91, 67, 0.15);
  }
  
  .card-category {
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--c-red);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-sm);
    display: block;
  }
  
  .card-title {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--c-charcoal);
    margin-bottom: var(--space-md);
    line-height: 1.3;
  }
  
  .card-description {
    font-family: var(--font-sans);
    font-weight: 300;
    line-height: 1.6;
    color: var(--c-charcoal);
    margin-bottom: var(--space-lg);
    flex-grow: 1;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: var(--space-md);
    border-top: 1px solid rgba(58, 50, 50, 0.05);
  }
  
  .card-date {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--c-wood);
  }
  
  .card-link {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--c-red);
    text-decoration: none;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--c-red);
    border-radius: var(--space-xs);
    transition: var(--transition-fast);
  }
  
  .card-link:hover {
    background-color: var(--c-red);
    color: var(--c-cream);
    opacity: 1;
    transform: translateY(-1px);
  }
  
  /* Single item footer (only date or only link) */
  .card-footer:has(.card-date):not(:has(.card-link)) {
    justify-content: flex-start;
  }
  
  .card-footer:has(.card-link):not(:has(.card-date)) {
    justify-content: flex-end;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .card {
      padding: var(--space-md);
    }
    
    .card-title {
      font-size: 1.1rem;
    }
    
    .card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
    
    .card-footer:has(.card-date):has(.card-link) {
      align-items: stretch;
    }
    
    .card-link {
      align-self: flex-end;
    }
  }
  
  @media (max-width: 480px) {
    .card {
      padding: var(--space-md);
    }
    
    .card-footer {
      gap: var(--space-xs);
    }
  }
</style>
