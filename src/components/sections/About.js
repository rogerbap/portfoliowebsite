import React from 'react';

const About = () => {
  const styles = {
    section: {
      position: 'relative',
      padding: '5rem 1.5rem',
      zIndex: 10
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'center'
    },
    textLarge: {
      fontSize: '1.125rem',
      color: '#d1d5db',
      lineHeight: '1.7',
      marginBottom: '1.5rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginTop: '2rem'
    },
    statCard: {
      textAlign: 'center',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '0.75rem',
      backdropFilter: 'blur(10px)'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#60a5fa'
    },
    statLabel: {
      color: '#d1d5db'
    },
    avatarContainer: {
      position: 'relative'
    },
    avatar: {
      width: '320px',
      height: '320px',
      margin: '0 auto',
      background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
      borderRadius: '1.5rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '5rem',
      transition: 'transform 0.5s ease',
      cursor: 'pointer'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          About Me
        </h2>
        <div style={styles.grid}>
          <div>
            <p style={styles.textLarge}>
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications 
              and leading technical teams. I specialize in modern JavaScript frameworks, cloud architecture, and 
              creating seamless user experiences that drive business results.
            </p>
            <p style={styles.textLarge}>
              My expertise spans the entire development lifecycle - from crafting pixel-perfect frontends with 
              React and Next.js to architecting robust backend systems with Node.js and Python. I'm passionate 
              about clean code, performance optimization, and staying at the forefront of web technology.
            </p>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Projects Completed</div>
              </div>
              <div style={{ ...styles.statCard }}>
                <div style={{ ...styles.statNumber, color: '#a78bfa' }}>5+</div>
                <div style={styles.statLabel}>Years Experience</div>
              </div>
            </div>
          </div>
          <div style={styles.avatarContainer}>
            <div style={styles.avatar}>
              👨‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;