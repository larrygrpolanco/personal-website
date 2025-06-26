import './Home.css';

/**
 * Home Page Component
 * 
 * The main landing page that introduces Larry and prominently features
 * his current role at Moffitt Cancer Center. Designed to give visitors
 * an immediate understanding of who he is and what he does now.
 * 
 * React Learning Notes:
 * - Simple functional component with static content
 * - Uses semantic HTML structure for accessibility
 * - Imports page-specific CSS for styling
 * - Component composition with reusable section structure
 */
function Home() {
  return (
    <div className="home-page">
      {/* Hero Section - Most prominent area */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Larry Grullon-Polanco</h1>
            <p className="hero-subtitle">Research Project Specialist</p>
            <p className="hero-organization">Moffitt Cancer Center</p>
            <p className="hero-description">
              Bridging linguistics, education, and research to support impactful clinical studies 
              and data-driven healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Brief Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <h2 className="section-title">About</h2>
          <div className="overview-content">
            <p className="overview-text">
              I'm a research professional with a unique background spanning linguistics, 
              education, music, and programming. Currently starting my journey at Moffitt 
              Cancer Center as a Research Project Specialist, where I'll apply my skills 
              in data management, process automation, and stakeholder coordination to 
              support critical cancer research.
            </p>
            <p className="overview-text">
              My diverse experience includes published linguistics research, Fulbright 
              teaching in Taiwan, music education, and developing automation tools for 
              research workflows. I believe this multifaceted background brings a unique 
              perspective to collaborative research environments.
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="current-focus-section">
        <div className="current-focus-container">
          <h2 className="section-title">Current Focus</h2>
          <div className="focus-grid">
            <div className="focus-item">
              <h3 className="focus-title">Research Excellence</h3>
              <p className="focus-description">
                Supporting clinical research through meticulous data management, 
                process documentation, and stakeholder coordination at Moffitt Cancer Center.
              </p>
            </div>
            <div className="focus-item">
              <h3 className="focus-title">Technical Innovation</h3>
              <p className="focus-description">
                Developing automation solutions and efficient workflows to enhance 
                research productivity and data quality.
              </p>
            </div>
            <div className="focus-item">
              <h3 className="focus-title">Collaborative Impact</h3>
              <p className="focus-description">
                Building bridges between technical and non-technical team members 
                to ensure clear communication and project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Vignette */}
      <section className="vignette-section">
        <div className="vignette-container">
          <div className="vignette-content">
            <p className="vignette-text">
              "I own way too many succulents. They take patience, attention, consistency, 
              and understanding how small adjustments make a big difference over time. 
              I like to approach work similarly, with dedication and a focus on creating 
              organized, robust, and easy-to-follow systems."
            </p>
            <p className="vignette-attribution">— From my Moffitt cover letter</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
