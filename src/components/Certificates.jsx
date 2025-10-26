import { useState } from 'react';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const certificates = [
    {
      title: 'Start the UX Design Process: Empathize, Define, and Ideate',
      issuer: 'Coursera',
      date: '2025',
      icon: '🎨',
      color: '#ff6f61',
      skills: ['UX Research', 'Ideation', 'User-Centered Design'],
      link: 'https://www.coursera.org/account/accomplishments/verify/QHZXPEUG46SD'
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Coursera',
      date: '2025',
      icon: '🖌️',
      color: '#6a5acd',
      skills: ['Wireframing', 'Prototyping', 'UX Principles'],
      link: 'https://www.coursera.org/account/accomplishments/verify/70Z2TCW8IQFG'
    },
    {
      title: 'Conduct UX Research and Test Early Concepts',
      issuer: 'Coursera',
      date: '2025',
      icon: '🔍',
      color: '#20b2aa',
      skills: ['Usability Testing', 'Research Methods', 'Feedback Analysis'],
      link: 'https://www.coursera.org/account/accomplishments/verify/IPHR37LQIP7U'
    },
    {
      title: 'Dynamic Programming & Greedy Algorithms',
      issuer: 'Coursera',
      date: '2024',
      icon: '💻',
      color: '#ffa500',
      skills: ['Algorithms', 'Problem Solving', 'Optimization Techniques'],
      link: 'https://www.coursera.org/account/accomplishments/verify/57JJPTNDP97W'
    },
    {
      title: 'Data Structures and Algorithms Self Paced',
      issuer: 'GeeksforGeeks',
      date: '2024',
      icon: '🧩',
      color: '#32cd32',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'],
      link: 'https://www.geeksforgeeks.org/certificate/c2c389236427ed48b0d34527d31aa943'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2024',
      icon: '☁️',
      color: '#1e90ff',
      skills: ['AWS', 'Azure', 'Distributed Systems'],
      // no real link yet
      link: ''
    }
  ];

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          Certificates & Achievements
          <span className="title-decoration">_</span>
        </h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="certificate-card"
              onClick={() => handleCertClick(cert)}
              style={{ '--cert-color': cert.color, animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-ribbon">🎖️</div>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              
              <div className="cert-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>

              <div className="cert-hover-text">
                <span>Click to celebrate! 🎉</span>
              </div>

              {/* View Certificate Button */}
              {cert.link ? (
                <button
                  className="view-cert-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(cert.link, '_blank');
                  }}
                >
                  View Certificate
                </button>
              ) : (
                <button
                  className="view-cert-btn disabled"
                  onClick={(e) => e.stopPropagation()}
                  title="Still waiting for the clouds to clear ☁️😅"
                >
                  Coming Soon 😅
                </button>
              )}
            </div>
          ))}
        </div>

        {showModal && selectedCert && (
          <div className="cert-modal" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
              
              <div className="celebration">
                <div className="trophy-animation">🏆</div>
                <h2>Congratulations!</h2>
                <p className="modal-title">{selectedCert.title}</p>
                <p className="modal-issuer">Issued by: {selectedCert.issuer}</p>
                <p className="modal-date">{selectedCert.date}</p>
                
                <div className="fireworks">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="firework" style={{ '--i': i }}></div>
                  ))}
                </div>

                {/* Button inside Modal */}
                {selectedCert.link ? (
                  <button
                    className="view-cert-btn"
                    onClick={() => window.open(selectedCert.link, '_blank')}
                  >
                    View Certificate
                  </button>
                ) : (
                  <button className="view-cert-btn disabled" title="Certificate Coming soon ☁️😅">
                    Certificate Coming Soon 😅
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="cert-quote">
          <p>"Collecting certificates like Collecting Pokémons!" 😄🎓✨</p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
