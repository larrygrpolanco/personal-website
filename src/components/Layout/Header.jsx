import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 * 
 * Contains the site navigation and branding. Includes responsive design
 * with a hamburger menu for mobile devices.
 * 
 * React Learning Notes:
 * - useState hook manages the mobile menu open/closed state
 * - useLocation hook from React Router gets current page for active link styling
 * - Event handlers (onClick) manage user interactions
 * - Conditional rendering shows/hides mobile menu based on state
 * - CSS classes are applied conditionally using template literals
 */
function Header() {
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current location to highlight active navigation link
  const location = useLocation();

  // Navigation items - easy to modify and reorder
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/creative', label: 'Creative' },
    { path: '/writing', label: 'Writing' },
    { path: '/about', label: 'About' }
  ];

  // Toggle mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Site branding/logo */}
        <div className="header-brand">
          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            Larry Grullon-Polanco
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'mobile-menu-button-open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-mobile-item">
                <Link 
                  to={item.path} 
                  className={`nav-mobile-link ${location.pathname === item.path ? 'nav-mobile-link-active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
