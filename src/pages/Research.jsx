import './Research.css';

/**
 * Research Page Component
 * 
 * Showcases Larry's linguistics research experience, publications,
 * and conference presentations. This is the second priority content area.
 * 
 * React Learning Notes:
 * - Structured content sections for different types of research work
 * - Placeholder content that can be easily expanded
 * - Consistent styling patterns with other pages
 */
function Research() {
  return (
    <div className="research-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="page-header-container">
          <h1 className="page-title">Research</h1>
          <p className="page-subtitle">
            Linguistics research, publications, and academic contributions
          </p>
        </div>
      </section>

      {/* Current Research */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Current Research Interests</h2>
          <div className="content-grid">
            <div className="content-item">
              <h3 className="item-title">Applied Linguistics</h3>
              <p className="item-description">
                M.A. in Applied Linguistics from University of South Florida (2024) 
                with 4.0 GPA and College of Arts and Sciences Gratitude Scholarship.
              </p>
            </div>
            <div className="content-item">
              <h3 className="item-title">Bilingual Research</h3>
              <p className="item-description">
                Experience in bilingual data collection and analysis, working with 
                diverse linguistic communities and multilingual datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Projects */}
      <section className="content-section alt-bg">
        <div className="content-container">
          <h2 className="section-title">Research Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3 className="project-title">Multi-Source Data Analysis: Taiwan Election 2024</h3>
              <p className="project-role">Team Lead Researcher | University of South Florida</p>
              <p className="project-description">
                Led analysis of 290k social media communications using Brandwatch and NodeXL 
                for Taiwan's 2024 election data journalism project. Managed project milestones 
                and presented findings through visualization tools.
              </p>
            </div>
            <div className="project-item">
              <h3 className="project-title">YouTube Academic Spoken English Corpus</h3>
              <p className="project-role">Independent Researcher</p>
              <p className="project-description">
                Built Python/API system to collect and analyze 58M-word academic corpus 
                from 9k+ sources. Developed filtering algorithms achieving 97% content 
                classification accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Conference Presentations</h2>
          <p className="section-description">
            Presented research findings at multiple academic conferences, 
            contributing to the broader linguistics and applied research community.
          </p>
          <div className="placeholder-content">
            <p className="placeholder-text">
              Conference presentation details will be added here, including 
              titles, venues, dates, and abstracts of presented work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
