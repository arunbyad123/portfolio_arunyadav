function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span>{'<'}</span>
              AY
              <span>{'/>'}</span>
            </h3>
            <p className="footer-tagline">
              Building digital experiences, one commit at a time 💻
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://github.com/arunbyad123" target="_blank" rel="noopener noreferrer">💻</a>
              <a href="https://www.linkedin.com/in/arunyadav27/" target="_blank" rel="noopener noreferrer">💼</a>
              <a href="https://x.com/arun_yadav55377" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="mailto:arunyadavbelli8@gmail.com">📧</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;