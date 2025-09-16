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
              I'm a full-stack developer with 6+ years of experience combining enterprise application development with cybersecurity expertise. Currently a Cybersecurity Analyst at NBH Bank, I focus on building secure, efficient applications and improving system performance. 
            </p>
            <p style={styles.textLarge}>
               My journey started at Facility Ally, where I rapidly advanced from Junior to Full-Stack Developer, building core business applications with PHP Laravel and JavaScript. I optimized database performance, worked with payment systems, and helped streamline client reporting processes.
I then expanded into cybersecurity at NBH Bank, where I work on security monitoring systems and help improve operational efficiency. This combination of development and security experience gives me a unique perspective on building applications that are both performant and secure.
I enjoy solving technical challenges – whether it's optimizing database queries, improving application performance, or working with different systems and technologies. I believe the best solutions combine solid engineering principles with practical business value. 
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