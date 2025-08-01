export const styles = {
  // Container styles
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 35%, #4c1d95 100%)',
    color: 'white',
    overflowX: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  
  // Canvas styles
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 0,
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    background: 'transparent'
  },
  
  // Navigation styles
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  
  navContainer: {
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
    backgroundClip: 'text'
  },
  
  // Add more styles as we build...
};

export const keyframes = `
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40%, 43% {
      transform: translateY(-30px) translateX(-50%);
    }
    70% {
      transform: translateY(-15px) translateX(-50%);
    }
    90% {
      transform: translateY(-4px) translateX(-50%);
    }
  }

  .nav-button:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  .primary-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  }
`;