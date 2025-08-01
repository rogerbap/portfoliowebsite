import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const styles = {
    card: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.5s ease',
      cursor: 'pointer'
    },
    featuredBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 10,
      padding: '0.25rem 0.75rem',
      background: 'linear-gradient(45deg, #f59e0b, #f97316)',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    imageContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.7s ease'
    },
    content: {
      padding: '1.5rem'
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem'
    },
    description: {
      color: '#d1d5db',
      marginBottom: '1rem',
      lineHeight: '1.5'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    techTag: {
      padding: '0.25rem 0.75rem',
      background: 'rgba(59, 130, 246, 0.2)',
      color: '#93c5fd',
      borderRadius: '50px',
      fontSize: '0.875rem',
      border: '1px solid rgba(59, 130, 246, 0.3)'
    },
    buttonGroup: {
      display: 'flex',
      gap: '0.5rem'
    },
    button: {
      flex: 1,
      padding: '0.5rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  };

  return (
    <div style={styles.card}>
      {project.featured && (
        <div style={styles.featuredBadge}>
          <Star size={12} fill="currentColor" />
          FEATURED
        </div>
      )}
      
      <div style={styles.imageContainer}>
        <img 
          src={project.image} 
          alt={project.title}
          style={styles.image}
        />
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>
        <div style={styles.techTags}>
          {project.tech.map((tech, i) => (
            <span key={i} style={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>
            <ExternalLink size={16} />
            Live Demo
          </button>
          <button style={{...styles.button, ...styles.secondaryButton}}>
            <Github size={16} />
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;