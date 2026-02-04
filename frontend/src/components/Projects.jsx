function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>SkillFusion – Community Skill Exchange Platform</h3>
            <p>
              A web platform that enables users to exchange skills by creating
              profiles, requesting skills, and providing feedback. Designed to
              promote collaborative learning.
            </p>
            <span>Tech Stack: HTML, CSS, JavaScript, React</span>
          </div>

          <div className="project-card">
            <h3>Blockchain-Based Secure Data Sharing System</h3>
            <p>
              A research-driven project focused on secure and transparent data
              sharing using blockchain technology with enhanced security
              mechanisms.
            </p>
            <span>Tech Stack: Blockchain, Cryptography Concepts</span>
          </div>

          <div className="project-card">
            <h3>Hospital Management Software (Case Study)</h3>
            <p>
              Designed a complete hospital management system covering
              requirements, design, and deployment aspects as part of a
              software engineering case study.
            </p>
            <span>Tech Stack: Software Engineering, UML, Documentation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
