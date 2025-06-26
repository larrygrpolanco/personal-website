import './Footer.css';

/**
 * Footer Component
 * 
 * Simple footer with contact information and copyright.
 * Designed to be minimal and not compete with main content.
 * 
 * React Learning Notes:
 * - Simple functional component with no state
 * - Uses semantic HTML elements for accessibility
 * - Imports its own CSS file for styling
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Larry Grullon-Polanco. All rights reserved.
          </p>
          <p className="footer-contact">
            <a href="mailto:larrygrpolanco@gmail.com" className="footer-link">
              larrygrpolanco@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
