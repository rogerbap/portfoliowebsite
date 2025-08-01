import React from 'react';
import { TrendingUp } from 'lucide-react';

const ProficiencyBar = ({ skill }) => {
  const styles = {
    container: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '0.75rem',
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.75rem'
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    name: {
      fontWeight: '600',
      color: 'white'
    },
    hotBadge: {
      marginLeft: '0.5rem',
      padding: '0.25rem 0.5rem',
      background: 'linear-gradient(45deg, #f97316, #ef4444)',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    level: {
      color: '#60a5fa',
      fontWeight: 'bold'
    },
    progressBar: {
      width: '100%',
      height: '0.75rem',
      background: 'rgba(55, 65, 81, 0.5)',
      borderRadius: '50px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      borderRadius: '50px',
      transition: 'width 1s ease-out',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
      width: `${skill.level}%`
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.nameContainer}>
          <span style={styles.name}>{skill.name}</span>
          {skill.hot && (
            <div style={styles.hotBadge}>
              <TrendingUp size={12} />
              HOT
            </div>
          )}
        </div>
        <span style={styles.level}>{skill.level}%</span>
      </div>
      <div style={styles.progressBar}>
        <div style={styles.progressFill} />
      </div>
    </div>
  );
};

export default ProficiencyBar;