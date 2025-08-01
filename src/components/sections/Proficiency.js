import React from 'react';
import ProficiencyBar from '../ui/ProficiencyBar';
import { proficiencyData } from '../data/portfolioData';

const Proficiency = () => {
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
      marginBottom: '2rem',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    description: {
      textAlign: 'center',
      color: '#d1d5db',
      marginBottom: '4rem',
      maxWidth: '500px',
      margin: '0 auto 4rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Proficiency Levels
        </h2>
        <p style={styles.description}>
          Current market-relevant technologies and my proficiency levels. 
          Technologies marked with "HOT" are in high demand in today's job market.
        </p>
        
        <div style={styles.grid}>
          {proficiencyData.map((skill, index) => (
            <ProficiencyBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;