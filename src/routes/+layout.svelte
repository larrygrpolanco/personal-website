<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import '$lib/styles/global.css';
</script>

<div class="app">
  <Navigation />
  
  <main class="main-content">
    <slot />
  </main>
  
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Connect</h4>
        <div class="footer-links">
          <a href="mailto:larrygrpolanco@gmail.com" class="footer-link">
            Email
          </a>
          <a href="https://linkedin.com/in/larrygrpolanco" class="footer-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/larrygrpolanco" class="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Currently</h4>
        <p class="footer-text">
          Research Project Specialist at Moffitt Cancer Center, Tampa, FL
        </p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p class="footer-copyright">
        © 2025 Larry Grullon-Polanco. Built with SvelteKit.
      </p>
    </div>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main-content {
    flex: 1;
  }
  
  .footer {
    background-color: var(--c-slate);
    color: var(--c-cream);
    margin-top: var(--space-2xl);
  }
  
  .footer-content {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
  }
  
  .footer-section h4 {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--c-cream);
    margin-bottom: var(--space-md);
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .footer-link {
    font-family: var(--font-sans);
    font-weight: 300;
    color: var(--c-cream);
    text-decoration: none;
    transition: var(--transition-fast);
    opacity: 0.8;
  }
  
  .footer-link:hover {
    opacity: 1;
    color: var(--c-red);
    transform: translateX(4px);
  }
  
  .footer-text {
    font-family: var(--font-sans);
    font-weight: 300;
    line-height: 1.6;
    color: var(--c-cream);
    opacity: 0.8;
    margin-bottom: 0;
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(244, 240, 233, 0.1);
    padding: var(--space-lg);
    text-align: center;
  }
  
  .footer-copyright {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--c-cream);
    opacity: 0.6;
    margin: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .footer-content {
      padding: var(--space-lg) var(--space-md);
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
    
    .footer-links {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--space-md);
    }
    
    .footer-bottom {
      padding: var(--space-md);
    }
  }
  
  @media (max-width: 480px) {
    .footer-content {
      padding: var(--space-md);
    }
    
    .footer-links {
      flex-direction: column;
      gap: var(--space-sm);
    }
  }
</style>
