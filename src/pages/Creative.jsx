import './Creative.css';

/**
 * Creative Page Component
 * 
 * Combines music and programming projects to showcase Larry's
 * creative and technical skills in one flexible section.
 */
function Creative() {
  return (
    <div className="creative-page">
      <section className="page-header-section">
        <div className="page-header-container">
          <h1 className="page-title">Creative</h1>
          <p className="page-subtitle">
            Music, programming projects, and creative technical solutions
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Programming Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3 className="project-name">SABR Automated Coding Tool</h3>
              <p className="project-description">
                Research efficiency solution that reduced qualitative analysis time 
                from days to minutes. Achieved 78% agreement with human coders during validation.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-name">Fulbright Planner</h3>
              <p className="project-description">
                AI planning application using Taiwan's Ministry of Education standards 
                to generate customized educational materials. Saves educators 3-4 hours per lesson plan.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-name">Other Projects</h3>
              <p className="project-description">
                Various small projects, hackathon participation, and research automation tools 
                that demonstrate problem-solving and technical creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-container">
          <h2 className="section-title">Music Experience</h2>
          <div className="music-content">
            <div className="music-item">
              <h3 className="music-title">Music Program Director/Educator</h3>
              <p className="music-organization">Academy Prep Center</p>
              <p className="music-period">February 2020 - July 2022</p>
              <p className="music-description">
                Managed annual music program events with ~130 performers. Coordinated 
                multi-location rehearsals, equipment management, and budget tracking.
              </p>
            </div>
            <div className="placeholder-content">
              <p className="placeholder-text">
                Additional music experience, choir participation, and musical 
                achievements will be detailed here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Creative;
