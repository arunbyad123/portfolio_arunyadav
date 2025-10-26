import { useState } from 'react';
import image from '../assets/image.png';

function About() {
  const [isHovering, setIsHovering] = useState(false);
  const [mood, setMood] = useState('😊');

  const moods = ['😊', '😎', '🤓', '🚀', '💪', '🎯', '🔥', '⚡'];

  const changeMood = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About Me
          <span className="title-decoration">_</span>
        </h2>

        <div className="about-content">
          <div 
            className="about-image-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={changeMood}
          >
            <div className={`profile-card ${isHovering ? 'flip' : ''}`}>
              <div className="card-front">
                {/* <div className="emoji-face">{mood}</div> */}
                <p className="click-me"><img src={image} className="abt-image"/></p>
              </div>
              <div className="card-back">
                <div className="fun-fact">
                  <h3>Fun Fact</h3>
                  <p>I debug with console.log() <br/>and I'm not ashamed! 🐛</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              Hey there! I'm a passionate Full Stack Developer 
              skilled in Frontend,Backend and Relational & Non-Relational databases.
            </p>
            <p className="about-description">
              I enjoy turning complex problems into simple and elegant solutions. Whether it's building APIs, optimizing database queries, or crafting perfect user interfaces Responsively.
              When I'm not coding, you'll find me exploring new technologies,
              or probably debugging something that worked yesterday but mysteriously broke today.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Solved Problems in GFG</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Bugs Fixed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number learning-title">24/7</div>
                <div className="stat-label">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;