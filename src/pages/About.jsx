import './About.css';

/**
 * About Page Component
 * 
 * Personal story, detailed background, and contact information.
 * The most personal and comprehensive section of the website.
 */
function About() {
  return (
    <div className="about-page">
      <section className="page-header-section">
        <div className="page-header-container">
          <h1 className="page-title">About</h1>
          <p className="page-subtitle">
            Personal story, background, and how to get in touch
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">My Journey</h2>
          <div className="story-content">
            <p className="story-text">
              My career path has taken me from music to research, with meaningful 
              stops in education and linguistics along the way. Each experience has 
              shaped how I approach problems, collaborate with others, and find 
              creative solutions to complex challenges.
            </p>
            <p className="story-text">
              Currently, I'm excited to begin my role as a Research Project Specialist 
              at Moffitt Cancer Center, where I can apply my diverse background to 
              support critical cancer research that makes a real difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="content-container">
          <h2 className="section-title">Background</h2>
          <div className="background-grid">
            <div className="background-item">
              <h3 className="background-title">Education</h3>
              <p className="background-description">
                M.A. Applied Linguistics, University of South Florida (2024)<br/>
                B.A. Education, Florida State University (2018)
              </p>
            </div>
            <div className="background-item">
              <h3 className="background-title">Languages</h3>
              <p className="background-description">
                English (native), Spanish (proficient-heritage), Chinese (conversational)
              </p>
            </div>
            <div className="background-item">
              <h3 className="background-title">Location</h3>
              <p className="background-description">
                Tampa, FL (currently in Taiwan completing Fulbright commitment)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in connecting with fellow researchers, educators, 
              and anyone working at the intersection of technology and human understanding.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h3 className="contact-method">Email</h3>
                <p className="contact-detail">
                  <a href="mailto:larrygrpolanco@gmail.com" className="contact-link">
                    larrygrpolanco@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <h3 className="contact-method">LinkedIn</h3>
                <p className="contact-detail">
                  <a href="#" className="contact-link">
                    Connect with me on LinkedIn
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <h3 className="contact-method">GitHub</h3>
                <p className="contact-detail">
                  <a href="#" className="contact-link">
                    View my projects on GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
