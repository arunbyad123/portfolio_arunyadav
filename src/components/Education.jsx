import { useState } from 'react';

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Lovely Professional University',
      year: '2022 - 2026',
      grade: '6.5 CGPA',
      icon: '🎓',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      achievements: [
        'Solved 190+ problems in GeeksforGeeks',
        'Participated in 3 hackathons'
      ],
      description: 'Pursuing comprehensive education in software development, algorithms, and system design.',
      image: '🏛️'
    },
    {
      degree: 'Senior Secondary',
      field: 'MPC',
      institution: 'Gitam Junior Collage',
      year: '2020 - 2022',
      grade: '91.7%',
      icon: '📚',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      achievements: [], // removed achievements
      description: 'Excelled in Mathematics, Physics, and Chemistry with outstanding academic performance.',
      image: '📖'
    },
    {
      degree: 'Secondary School',
      field: 'All Subjects',
      institution: 'Sri Sai Model High School',
      year: '2020',
      grade: '90%',
      icon: '✏️',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      achievements: [], // removed achievements
      description: 'Strong foundation in academics and sports with exceptional all-round performance.',
      image: '🏫'
    }
  ];

  const currentEdu = education[activeIndex];

  return (
    <section id="education" style={{
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden'
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
          🎓 Education Journey
        </h2>

        <p style={{
          textAlign: 'center',
          color: '#4a5568',
          fontSize: '1.1rem',
          marginBottom: '3rem'
        }}>
          The path that shaped who I am today
        </p>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {education.map((edu, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                background: activeIndex === index ? edu.gradient : 'white',
                color: activeIndex === index ? 'white' : '#4a5568',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === index 
                  ? '0 10px 30px rgba(0, 0, 0, 0.2)' 
                  : '0 5px 15px rgba(0, 0, 0, 0.1)',
                transform: activeIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{edu.icon}</span>
              {edu.year}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div style={{ perspective: '1500px', marginBottom: '3rem' }}>
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              height: '500px',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              cursor: 'pointer'
            }}
          >
            {/* Front of Card */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: 'white',
              borderRadius: '30px',
              padding: '3rem',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        fontSize: '4rem',
                        background: currentEdu.gradient,
                        borderRadius: '20px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px'
                      }}>
                        {currentEdu.icon}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '2rem',
                          color: '#2d3748',
                          marginBottom: '0.5rem'
                        }}>
                          {currentEdu.degree}
                        </h3>
                        <p style={{
                          fontSize: '1.2rem',
                          color: '#718096'
                        }}>
                          {currentEdu.field}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    background: currentEdu.gradient,
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}>
                    {currentEdu.grade}
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginBottom: currentEdu.achievements.length ? '1.5rem' : '0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🏛️</span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      color: '#2d3748',
                      fontWeight: '600'
                    }}>
                      {currentEdu.institution}
                    </h4>
                  </div>
                  <p style={{
                    color: '#718096',
                    lineHeight: '1.6'
                  }}>
                    {currentEdu.description}
                  </p>
                </div>

                {/* Render achievements only if available */}
                {currentEdu.achievements.length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    {currentEdu.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: currentEdu.gradient,
                          color: 'white',
                          padding: '1rem',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.95rem',
                          fontWeight: '500',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <span>🏆</span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                borderRadius: '15px',
                marginTop: '2rem'
              }}>
                <p style={{
                  color: currentEdu.color,
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  Click to flip and see timeline! 🔄
                </p>
              </div>
            </div>

            {/* Back of Card (unchanged) */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: currentEdu.gradient,
              borderRadius: '30px',
              padding: '3rem',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}>
              <div style={{ fontSize: '8rem', marginBottom: '2rem' }}>
                {currentEdu.image}
              </div>
              <h3 style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {currentEdu.year}
              </h3>
              <p style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                opacity: 0.9,
                maxWidth: '500px',
                lineHeight: '1.8'
              }}>
                {currentEdu.institution}
              </p>
              <div style={{
                marginTop: '2rem',
                width: '100%',
                maxWidth: '400px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Performance</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentEdu.grade}</span>
                </div>
                <div style={{
                  height: '15px',
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: currentEdu.grade.includes('CGPA') 
                      ? `${(parseFloat(currentEdu.grade) / 10) * 100}%`
                      : currentEdu.grade,
                    background: 'white',
                    borderRadius: '10px',
                    transition: 'width 1s ease'
                  }} />
                </div>
              </div>
              <div style={{
                marginTop: '3rem',
                fontSize: '1.1rem',
                textAlign: 'center',
                opacity: 0.9
              }}>
                <p>Click again to flip back! 🔄</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              background: i % 2 === 0 ? '#667eea' : '#f59e0b',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export default Education;
