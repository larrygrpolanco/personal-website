import './Writing.css';

/**
 * Writing Page Component
 * 
 * A curated collection of book reflections and personal essays.
 * Designed as a public journal space for Larry's thoughts and reflections.
 */
function Writing() {
  return (
    <div className="writing-page">
      <section className="page-header-section">
        <div className="page-header-container">
          <h1 className="page-title">Writing</h1>
          <p className="page-subtitle">
            Book reflections, personal essays, and thoughts on life and learning
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">About This Space</h2>
          <div className="intro-content">
            <p className="intro-text">
              This is my public journal—a space for reflections on books I'm reading, 
              thoughts on experiences, and essays on topics that capture my curiosity. 
              Rather than traditional book reviews, I prefer to pull meaningful lines 
              and explore how they connect to broader ideas and personal insights.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-container">
          <h2 className="section-title">Recent Reflections</h2>
          <div className="placeholder-content">
            <p className="placeholder-text">
              Book reflections and personal essays will be featured here. 
              Each piece will include selected quotes, personal connections, 
              and broader reflections on themes and ideas.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Essays & Thoughts</h2>
          <div className="placeholder-content">
            <p className="placeholder-text">
              Longer-form essays and reflections on various topics will be 
              collected here, creating a record of evolving thoughts and perspectives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Writing;
