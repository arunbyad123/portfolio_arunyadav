import { useState } from 'react';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'HelpDesk Mini',
      description: 'A full-stack support ticket system with real-time updates using Socket.IO',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      color: '#667eea',
      emoji: '🎫',
      liveLink: 'https://helpdesk-mini-live.com', // replace with your actual live link
      codeLink: 'https://github.com/arunbyad123/helpDisk-mini' // replace with your GitHub repo
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete online shopping experience with payment integration',
      tech: ['React', 'Express', 'Stripe', 'Redux'],
      color: '#f59e0b',
      emoji: '🛒',
      liveLink: 'https://ecommerce-platform-live.com',
      codeLink: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      title: 'CorpHunt',
      description: 'Online Company Search platform with accommodation finder feature',
      tech: ['MERN Stack', 'Nodemailer', 'JWT'],
      color: '#10b981',
      emoji: '📱',
      liveLink: 'https://corphunt-live.com',
      codeLink: 'https://github.com/arunbyad123/corphunt-client'
    },
    {
      title: 'Fitness Platform',
      description: 'Web-based Fitness Recommendation platform',
      tech: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      color: '#ef4444',
      emoji: '✅',
      liveLink: 'https://fitness-platform-1.onrender.com',
      codeLink: 'https://github.com/arunbyad123/fitness-platform'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          Projects
          <span className="title-decoration">_</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${hoveredProject === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ '--project-color': project.color }}
            >
              <div className="project-emoji">{project.emoji}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <span>View Live</span>
                  <span>🚀</span>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <span>Code</span>
                  <span>💻</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
