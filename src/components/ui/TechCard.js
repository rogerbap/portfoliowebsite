import React from 'react';

const TechCard = ({ tech }) => {
  const Icon = tech.icon;
  
  const styles = {
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.5s ease',
      cursor: 'pointer'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    iconContainer: {
      padding: '0.75rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem'
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.25rem'
    },
    description: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.5rem'
    },
    skillTag: {
      padding: '0.5rem 0.75rem',
      background: 'rgba(31, 41, 55, 0.5)',
      color: '#d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <div>
          <h3 style={styles.title}>{tech.title}</h3>
          <p style={styles.description}>{tech.description}</p>
        </div>
      </div>
      <div style={styles.skillsGrid}>
        {tech.skills.map((skill, i) => (
          <div key={i} style={styles.skillTag}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;