import { useState, useEffect, useRef } from 'react';

function Skills() {
  const canvasRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const animationFrameRef = useRef();
  const planetPositionsRef = useRef([]);

  const skills = [
    // Inner orbit - Frontend
    { 
      name: 'React', 
      level: 90, 
      icon: '⚛️', 
      color: '#61DAFB',
      projects: ['HelpDesk Mini', 'E-Commerce Platform', 'CorpHunt'],
      commits: 450,
      hours: 280,
      size: 50,
      orbitRadius: 140,
      angle: 0,
      floatSpeed: 0.02,
      floatOffset: 0
    },
    { 
      name: 'JavaScript', 
      level: 95, 
      icon: '🟨', 
      color: '#F7DF1E',
      projects: ['All Projects', 'Interactive Games', 'Data Viz'],
      commits: 520,
      hours: 350,
      size: 55,
      orbitRadius: 140,
      angle: 90,
      floatSpeed: 0.025,
      floatOffset: 1
    },
    { 
      name: 'CSS', 
      level: 80, 
      icon: '💅', 
      color: '#1572B6',
      projects: ['Portfolio', 'Landing Pages', 'Animations'],
      commits: 340,
      hours: 220,
      size: 45,
      orbitRadius: 140,
      angle: 180,
      floatSpeed: 0.024,
      floatOffset: 2
    },
    { 
      name: 'Tailwind', 
      level: 88, 
      icon: '🎨', 
      color: '#06B6D4',
      projects: ['UI Design', 'Responsive Layouts', 'Component Library'],
      commits: 360,
      hours: 210,
      size: 47,
      orbitRadius: 140,
      angle: 270,
      floatSpeed: 0.017,
      floatOffset: 3
    },
    
    // Middle orbit - Backend
    { 
      name: 'Node.js', 
      level: 85, 
      icon: '🟢', 
      color: '#339933',
      projects: ['HelpDesk Mini', 'Fitness Platform', 'API Gateway'],
      commits: 380,
      hours: 240,
      size: 48,
      orbitRadius: 210,
      angle: 45,
      floatSpeed: 0.018,
      floatOffset: 4
    },
    { 
      name: 'Express', 
      level: 87, 
      icon: '🚂', 
      color: '#4A4A4A',
      projects: ['REST APIs', 'Middleware Systems', 'Auth Services'],
      commits: 310,
      hours: 200,
      size: 47,
      orbitRadius: 210,
      angle: 135,
      floatSpeed: 0.019,
      floatOffset: 5
    },
    { 
      name: 'Java', 
      level: 65, 
      icon: '☕', 
      color: '#E76F00',
      projects: ['DSA Problems', 'Backend Services', 'Android Apps'],
      commits: 180,
      hours: 140,
      size: 43,
      orbitRadius: 210,
      angle: 225,
      floatSpeed: 0.020,
      floatOffset: 6
    },
    { 
      name: 'Git', 
      level: 82, 
      icon: '🔀', 
      color: '#F05032',
      projects: ['Version Control', 'Team Collaboration', 'All Projects'],
      commits: 520,
      hours: 250,
      size: 45,
      orbitRadius: 210,
      angle: 315,
      floatSpeed: 0.023,
      floatOffset: 7
    },
    
    // Outer orbit - Database
    { 
      name: 'MongoDB', 
      level: 80, 
      icon: '🍃', 
      color: '#47A248',
      projects: ['CorpHunt', 'Fitness Platform', 'HelpDesk Mini'],
      commits: 280,
      hours: 180,
      size: 46,
      orbitRadius: 280,
      angle: 0,
      floatSpeed: 0.022,
      floatOffset: 8
    },
    { 
      name: 'SQL', 
      level: 95, 
      icon: '🗄️', 
      color: '#3776AB',
      projects: ['Database Design', 'Query Optimization', 'Data Analysis'],
      commits: 290,
      hours: 190,
      size: 50,
      orbitRadius: 280,
      angle: 180,
      floatSpeed: 0.021,
      floatOffset: 9
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const setCanvasSize = () => {
      canvas.width = Math.min(window.innerWidth - 40, 800);
      canvas.height = 700;
    };
    setCanvasSize();

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let time = 0;

    const drawStars = () => {
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        const opacity = Math.random() * 0.6 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawSun = () => {
      const pulseSize = 50 + Math.sin(time * 0.05) * 5;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize);
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(0.4, '#FFA500');
      gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💡', centerX, centerY);
    };

    const drawOrbits = () => {
      // Inner orbit
      ctx.strokeStyle = 'rgba(97, 218, 251, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
      ctx.stroke();
      
      // Middle orbit
      ctx.strokeStyle = 'rgba(51, 153, 51, 0.3)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 210, 0, Math.PI * 2);
      ctx.stroke();
      
      // Outer orbit
      ctx.strokeStyle = 'rgba(71, 178, 72, 0.3)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 280, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.setLineDash([]);
    };

    const drawPlanet = (skill, index) => {
      const angleInRadians = (skill.angle * Math.PI) / 180;
      const floatOffset = Math.sin(time * skill.floatSpeed + skill.floatOffset) * 10;
      const x = centerX + Math.cos(angleInRadians) * skill.orbitRadius;
      const y = centerY + Math.sin(angleInRadians) * skill.orbitRadius + floatOffset;
      
      planetPositionsRef.current[index] = { x, y, size: skill.size };
      
      const isHovered = hoveredPlanet === index;
      const planetSize = isHovered ? skill.size * 1.3 : skill.size;
      
      // Outer glow with pulsing effect
      const glowSize = planetSize * 1.5 + Math.sin(time * 0.03 + index) * 5;
      const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
      outerGlow.addColorStop(0, skill.color + '80');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(x, y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Planet body with 3D effect
      const gradient = ctx.createRadialGradient(x - planetSize/4, y - planetSize/4, 0, x, y, planetSize);
      gradient.addColorStop(0, skill.color);
      gradient.addColorStop(0.7, skill.color + 'CC');
      gradient.addColorStop(1, skill.color + '80');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, planetSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Planet border
      ctx.strokeStyle = skill.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, planetSize, 0, Math.PI * 2);
      ctx.stroke();
      
      // Icon with slight rotation
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time * 0.01);
      ctx.font = `${planetSize * 1}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(skill.icon, 0, 0);
      ctx.restore();
      
      // Progress ring (orbital ring)
      const ringRadius = planetSize + 5;
      const progressAngle = (skill.level / 100) * Math.PI * 2;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, ringRadius, -Math.PI / 2, (-Math.PI / 2) + progressAngle);
      ctx.stroke();
      
      // Label on hover
      if (isHovered) {
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Arial';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fillText(skill.name, x, y + planetSize + 25);
        ctx.font = '14px Arial';
        ctx.fillText(`${skill.level}%`, x, y + planetSize + 45);
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      drawStars();
      drawOrbits();
      drawSun();
      
      skills.forEach((skill, index) => {
        drawPlanet(skill, index);
      });
      
      time++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      let foundHover = null;
      planetPositionsRef.current.forEach((planet, index) => {
        if (planet) {
          const distance = Math.sqrt((mouseX - planet.x) ** 2 + (mouseY - planet.y) ** 2);
          if (distance < planet.size + 10) {
            foundHover = index;
          }
        }
      });
      
      setHoveredPlanet(foundHover);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      planetPositionsRef.current.forEach((planet, index) => {
        if (planet) {
          const distance = Math.sqrt((mouseX - planet.x) ** 2 + (mouseY - planet.y) ** 2);
          if (distance < planet.size + 10) {
            setSelectedSkill(selectedSkill === index ? null : index);
          }
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [hoveredPlanet, selectedSkill]);

  return (
    <section id="skills" style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a3e 100%)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'default'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '10px 20px',
          borderRadius: '10px',
          color: 'white',
          display: 'inline-block',
          width: '100%'
        }}>
          🌌 Skills Galaxy
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.1rem',
          marginBottom: '1rem'
        }}>
          Hover over planets to explore • Click to see detailed stats
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '2px', background: 'rgba(97, 218, 251, 0.6)' }}></div>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Frontend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '2px', background: 'rgba(51, 153, 51, 0.6)' }}></div>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Backend</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '2px', background: 'rgba(71, 178, 72, 0.6)' }}></div>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Database</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <canvas 
            ref={canvasRef}
            style={{
              border: '2px solid rgba(102, 126, 234, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              cursor: hoveredPlanet !== null ? 'pointer' : 'default'
            }}
          />
        </div>

        {selectedSkill !== null && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
            borderRadius: '20px',
            padding: '2rem',
            marginTop: '3rem',
            color: 'white',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            animation: 'slideUp 0.5s ease',
            position: 'relative',
            zIndex: 10
          }}>
            <button
              onClick={() => setSelectedSkill(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              ×
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '3rem' }}>{skills[selectedSkill].icon}</span>
                  {skills[selectedSkill].name}
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Proficiency</span>
                    <span style={{ fontWeight: 'bold' }}>{skills[selectedSkill].level}%</span>
                  </div>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    height: '10px', 
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skills[selectedSkill].level}%`,
                      height: '100%',
                      background: 'white',
                      borderRadius: '10px',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>🚀 Projects Built</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {skills[selectedSkill].projects.map((project, idx) => (
                    <li key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span>⭐</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.2rem'
        }}>
          <p>"In the galaxy of code, every skill is a star that lights the way!" ✨</p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;