import React from 'react';
import { sections } from '../data/portfolioData';

const Navigation = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      cursor: 'pointer'
    },
    menu: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      background: 'transparent',
      color: '#d1d5db',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    activeButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#60a5fa'
    },
    // Mobile responsive styles
    '@media (max-width: 768px)': {
      menu: {
        gap: '1rem'
      },
      button: {
        padding: '0.25rem 0.75rem',
        fontSize: '0.875rem'
      }
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div 
          style={styles.logo}
          onClick={() => scrollToSection('hero')}
        >
          DevPortfolio
        </div>
        <div style={styles.menu}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                ...styles.button,
                ...(activeSection === section.id ? styles.activeButton : {})
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#d1d5db';
                }
              }}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;