import './Teaching.css';

/**
 * Teaching Page Component
 * 
 * Showcases Larry's teaching experience, including his Fulbright ETA
 * achievement and educational philosophy.
 */
function Teaching() {
  return (
    <div className="teaching-page">
      <section className="page-header-section">
        <div className="page-header-container">
          <h1 className="page-title">Teaching</h1>
          <p className="page-subtitle">
            Educational experience, philosophy, and Fulbright achievement
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Fulbright Experience</h2>
          <div className="highlight-item">
            <h3 className="highlight-title">English Teaching Assistant & Volunteer Program Coordinator</h3>
            <p className="highlight-organization">Fulbright Taiwan, Foundation for Scholarly Exchange</p>
            <p className="highlight-period">August 2024 - June 2025</p>
            <p className="highlight-description">
              Planned and executed comprehensive volunteer tutoring program with 60+ tutors 
              and 20+ events. Developed systematic program processes and liaised with 
              stakeholders to ensure program continuity and success.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-container">
          <h2 className="section-title">Teaching Philosophy</h2>
          <div className="placeholder-content">
            <p className="placeholder-text">
              Teaching philosophy and approach will be detailed here, including 
              methodologies, student engagement strategies, and educational values.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Teaching History</h2>
          <div className="placeholder-content">
            <p className="placeholder-text">
              Detailed teaching history and experience will be added here, 
              including previous positions, student outcomes, and achievements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teaching;
