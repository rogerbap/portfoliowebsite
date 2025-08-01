import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      position: 'relative',
      padding: '3rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 10
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },
    top: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      gap: '1rem'
    },
    brand: {
      marginBottom: '0.5rem'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#9ca3af'
    },
    links: {
      display: 'flex',
      gap: '1.5rem'
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    bottom: {
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#9ca3af'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              Roger Baptiste
            </div>
            <p style={styles.subtitle}>Full Stack Developer</p>
          </div>
          <div style={styles.links}>
            <a href="#" style={styles.link}>
              Privacy Policy
            </a>
            <a href="#" style={styles.link}>
              Terms of Service
            </a>
          </div>
        </div>
        <div style={styles.bottom}>
          <p>
            © 2025 Roger Baptiste. Built with React, Three.js, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;