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
              I'm a senior software engineer with 7+ years of progressive experience spanning full-stack
              development, cybersecurity, and technical leadership. Currently serving as Senior Engineer
              and Technical Architect at NBH Bank, where I design enterprise-level applications with a
              focus on security, compliance, and scalability.
            </p>
            <p style={styles.textLarge}>
              My journey began at a startup where I rapidly advanced from Junior Developer to Lead Developer,
              building and mentoring a team of 6+ engineers. I then transitioned to cybersecurity and risk
              management before returning to development with a security-first mindset. I excel at API
              integrations, cloud architecture (Azure, AWS), and creating robust systems that meet strict
              regulatory requirements.
            </p>
            
            <div style={styles.statsGrid}>
              <div style={{ ...styles.statCard }}>
                <div style={{ ...styles.statNumber, color: '#a78bfa' }}>7+</div>
                <div style={styles.statLabel}>Years Experience</div>
              </div>
              <div style={{ ...styles.statCard }}>
                <div style={{ ...styles.statNumber, color: '#a78bfa' }}>6+</div>
                <div style={styles.statLabel}>Team Members Led</div>
              </div>
              <div style={{ ...styles.statCard }}>
                <div style={{ ...styles.statNumber, color: '#a78bfa' }}>50+</div>
                <div style={styles.statLabel}>Projects Completed</div>
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