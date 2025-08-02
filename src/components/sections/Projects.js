import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects, categories } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
      marginBottom: '3rem',
      maxWidth: '500px',
      margin: '0 auto 3rem'
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    filterButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.875rem'
    },
    activeFilter: {
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
    },
    inactiveFilter: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#d1d5db'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Featured Projects
        </h2>
        <p style={styles.description}>
          A showcase of my recent work spanning full-stack applications, 
          frontend experiences, and backend architectures.
        </p>
        
        <div style={styles.filters}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                ...styles.filterButton,
                ...(selectedCategory === category.id ? styles.activeFilter : styles.inactiveFilter)
              }}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
        
        <div style={styles.grid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;