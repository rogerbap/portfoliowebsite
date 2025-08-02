// import React from 'react';
// import { Mail, Linkedin, Github } from 'lucide-react';

// const Contact = () => {
//   const styles = {
//     section: {
//       position: 'relative',
//       padding: '5rem 1.5rem',
//       zIndex: 10
//     },
//     container: {
//       maxWidth: '1000px',
//       margin: '0 auto',
//       textAlign: 'center'
//     },
//     title: {
//       fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
//       fontWeight: 'bold',
//       marginBottom: '2rem',
//       background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text'
//     },
//     description: {
//       fontSize: '1.25rem',
//       color: '#d1d5db',
//       marginBottom: '3rem'
//     },
//     contactGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//       marginBottom: '3rem'
//     },
//     contactCard: {
//       background: 'rgba(255, 255, 255, 0.1)',
//       backdropFilter: 'blur(10px)',
//       borderRadius: '1rem',
//       padding: '1.5rem',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer'
//     },
//     contactIcon: {
//       width: '2rem',
//       height: '2rem',
//       color: '#60a5fa',
//       margin: '0 auto 1rem'
//     },
//     contactTitle: {
//       fontSize: '1.125rem',
//       fontWeight: '600',
//       marginBottom: '0.5rem'
//     },
//     contactText: {
//       color: '#d1d5db'
//     },
//     buttonGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1.5rem',
//       alignItems: 'center'
//     },
//     primaryButton: {
//       padding: '1rem 2rem',
//       background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
//       border: 'none',
//       borderRadius: '50px',
//       color: 'white',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       fontSize: '1rem'
//     },
//     secondaryButton: {
//       padding: '1rem 2rem',
//       border: '2px solid rgba(255, 255, 255, 0.3)',
//       borderRadius: '50px',
//       background: 'transparent',
//       color: 'white',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       fontSize: '1rem'
//     }
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.title}>
//           Let's Build Something Great
//         </h2>
//         <p style={styles.description}>
//           Ready to bring your next project to life? I'm available for full-time opportunities and freelance projects.
//         </p>
        
//         <div style={styles.contactGrid}>
//           <div style={styles.contactCard}>
//             <Mail style={styles.contactIcon} />
//             <h3 style={styles.contactTitle}>Email Me</h3>
//             <p style={styles.contactText}>rogerbap@outlook.com</p>
//           </div>
//           <div style={styles.contactCard}>
//             <Linkedin style={styles.contactIcon} />
//             <h3 style={styles.contactTitle}>LinkedIn</h3>
//             <p style={styles.contactText}>Connect with me</p>
//           </div>
//           <div style={styles.contactCard}>
//             <Github style={styles.contactIcon} />
//             <h3 style={styles.contactTitle}>GitHub</h3>
//             <p style={styles.contactText}>View my code</p>
//           </div>
//         </div>
        
//         <div style={styles.buttonGroup}>
//           <button style={styles.primaryButton}>
//             Get In Touch
//           </button>
//           <button style={styles.secondaryButton}>
//             Download Resume
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const styles = {
    section: {
      position: 'relative',
      padding: '5rem 1.5rem',
      zIndex: 10
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 'bold',
      marginBottom: '2rem',
      background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    description: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '3rem'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    contactIcon: {
      width: '2rem',
      height: '2rem',
      color: '#60a5fa',
      margin: '0 auto 1rem'
    },
    contactTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    contactText: {
      color: '#d1d5db'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center'
    },
    primaryButton: {
      padding: '1rem 2rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    secondaryButton: {
      padding: '1rem 2rem',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50px',
      background: 'transparent',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Let's Build Something Great
        </h2>
        <p style={styles.description}>
          Ready to bring your next project to life? I'm available for full-time opportunities and freelance projects.
        </p>
        
        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <Mail style={styles.contactIcon} />
            <h3 style={styles.contactTitle}>Email Me</h3>
            <p style={styles.contactText}>alex@example.com</p>
          </div>
          <div style={styles.contactCard}>
            <Linkedin style={styles.contactIcon} />
            <h3 style={styles.contactTitle}>LinkedIn</h3>
            <p style={styles.contactText}>Connect with me</p>
          </div>
          <div style={styles.contactCard}>
            <Github style={styles.contactIcon} />
            <h3 style={styles.contactTitle}>GitHub</h3>
            <p style={styles.contactText}>View my code</p>
          </div>
        </div>
        
        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton}>
            Get In Touch
          </button>
          <button style={styles.secondaryButton}>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;