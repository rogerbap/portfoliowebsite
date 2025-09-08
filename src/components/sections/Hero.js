import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '5rem 1.5rem',
      paddingTop: '8rem'
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    title: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      color: '#d1d5db',
      marginBottom: '2rem'
    },
    description: {
      fontSize: '1.125rem',
      color: '#9ca3af',
      maxWidth: '500px',
      margin: '0 auto 3rem',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      marginBottom: '4rem'
    },
    primaryButton: {
      padding: '1rem 2rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem'
    },
    socialLink: {
      padding: '0.75rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    },
    bounceAnimation: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite'
    }
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.container}>
        <div>
          <h1 style={styles.title}>
            Roger Baptiste
          </h1>
          <p style={styles.subtitle}>
            Software Engineer & Technical Architect
          </p>
          <p style={styles.description}>
            I build secure, scalable enterprise applications with expertise in full-stack development,
            cybersecurity, and cloud architecture. Specializing in API integrations, system architecture,
            and leading technical teams to deliver mission-critical solutions.
          </p>
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton}>
            View My Work
            <ChevronDown size={20} />
          </button>
          <div style={styles.socialLinks}>
            <a href="https://github.com/rogerbap" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/rogerbaptiste" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:rogerbap@outlook.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bounceAnimation}>
        <ChevronDown size={32} color="#9ca3af" />
      </div>
    </section>
  );
};

export default Hero;