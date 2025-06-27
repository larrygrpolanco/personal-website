<script>
  import { page } from '$app/stores';
  
  let mobileMenuOpen = false;
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/linguistics', label: 'Linguistics' },
    { href: '/teaching', label: 'Teaching' },
    { href: '/music', label: 'Music' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/writing', label: 'Writing' },
    { href: '/about', label: 'About' }
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
  
  // Close mobile menu when route changes
  $: if ($page.url.pathname) {
    mobileMenuOpen = false;
  }
</script>

<nav class="navigation">
  <div class="nav-container">
    <!-- Logo/Name -->
    <div class="nav-brand">
      <a href="/" class="brand-link">Larry Grullon-Polanco</a>
    </div>
    
    <!-- Desktop Navigation -->
    <ul class="nav-menu desktop-nav">
      {#each navItems as item}
        <li class="nav-item">
          <a 
            href={item.href} 
            class="nav-link"
            class:active={$page.url.pathname === item.href}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    
    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-btn"
      class:open={mobileMenuOpen}
      on:click={toggleMobileMenu}
      aria-label="Toggle navigation menu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
  
  <!-- Mobile Navigation -->
  <div class="mobile-nav" class:open={mobileMenuOpen}>
    <ul class="nav-menu mobile-menu">
      {#each navItems as item}
        <li class="nav-item">
          <a 
            href={item.href} 
            class="nav-link"
            class:active={$page.url.pathname === item.href}
            on:click={closeMobileMenu}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navigation {
    background-color: var(--c-cream);
    border-bottom: 1px solid rgba(58, 50, 50, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .nav-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--space-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
  
  /* Brand/Logo */
  .nav-brand {
    flex-shrink: 0;
  }
  
  .brand-link {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--c-charcoal);
    transition: var(--transition-fast);
  }
  
  .brand-link:hover {
    color: var(--c-red);
    opacity: 1;
  }
  
  /* Navigation Menu */
  .nav-menu {
    list-style: none;
    display: flex;
    gap: var(--space-lg);
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 0;
  }
  
  .nav-link {
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 0.95rem;
    color: var(--c-charcoal);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    transition: var(--transition-fast);
    position: relative;
  }
  
  .nav-link:hover {
    color: var(--c-red);
    opacity: 1;
  }
  
  .nav-link.active {
    color: var(--c-red);
    font-weight: 500;
  }
  
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: var(--space-md);
    right: var(--space-md);
    height: 2px;
    background-color: var(--c-red);
    border-radius: 1px;
  }
  
  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);
  }
  
  .hamburger-line {
    width: 24px;
    height: 2px;
    background-color: var(--c-charcoal);
    margin: 2px 0;
    transition: var(--transition-fast);
    transform-origin: center;
  }
  
  .mobile-menu-btn.open .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-btn.open .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-btn.open .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    display: none;
    background-color: var(--c-cream);
    border-top: 1px solid rgba(58, 50, 50, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .mobile-nav.open {
    max-height: 400px;
  }
  
  .mobile-menu {
    flex-direction: column;
    gap: 0;
    padding: var(--space-md) var(--space-lg);
  }
  
  .mobile-menu .nav-link {
    display: block;
    padding: var(--space-md) 0;
    border-bottom: 1px solid rgba(58, 50, 50, 0.05);
  }
  
  .mobile-menu .nav-link:last-child {
    border-bottom: none;
  }
  
  .mobile-menu .nav-link.active::after {
    display: none;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0 var(--space-md);
    }
    
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-btn {
      display: flex;
    }
    
    .mobile-nav {
      display: block;
    }
    
    .brand-link {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    .nav-container {
      height: 60px;
      padding: 0 var(--space-md);
    }
    
    .brand-link {
      font-size: 1rem;
    }
  }
</style>
