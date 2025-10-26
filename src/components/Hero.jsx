import { useState, useEffect } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Arun Yadav";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const [floatingEmojis, setFloatingEmojis] = useState([]);

  const createFloatingEmoji = (e) => {
    const emojis = ['🚀', '✨', '🎉', '💻', '⚡', '🔥', '🎨', '🌟'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const id = Date.now();
    
    setFloatingEmojis(prev => [...prev, {
      id,
      emoji,
      x: e.clientX,
      y: e.clientY
    }]);

    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== id));
    }, 2000);
  };

  return (
    <section id="home" className="hero" onClick={createFloatingEmoji}>
      {floatingEmojis.map(({ id, emoji, x, y }) => (
        <div
          key={id}
          className="floating-emoji"
          style={{ left: x, top: y }}
        >
          {emoji}
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch" data-text={text}>
            {text}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h1>
          <p className="hero-subtitle bounce-in">
            Full Stack Developer | MERN Enthusiast
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary wobble"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary wobble"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className="hero-animation">
          <div className="code-box">
            <div className="code-line">
              <span className="keyword">const</span> developer = {'{'}
            </div>
            <div className="code-line indent">
              <span className="property">name:</span> <span className="string">"Arun Yadav"</span>,
            </div>
            <div className="code-line indent">
              <span className="property">skills:</span> [<span className="string">"React"</span>, <span className="string">"Node"</span>,<span className="string">"MongoDB"</span>,<span className="string">"JavaScript"</span>,<span className="string">"SQL"</span>,<span className="string">"Express"</span>],
            </div>
            <div className="code-line">{'}'}</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
}

export default Hero;