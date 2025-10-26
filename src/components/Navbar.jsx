import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">AY</span>
          <span className="logo-bracket">{'/>'}</span>
        </div>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'].map((item) => (
            <li key={item} onClick={() => scrollToSection(item)}>
              <span className="nav-link">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;