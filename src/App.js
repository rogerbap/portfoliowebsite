import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ThreeBackground from './components/ui/ThreeBackground';
import Projects from './components/sections/Projects.js';
import Proficiency from './components/sections/Proficiency.js';
import { techStack } from './components/data/portfolioData.js';
import About from './components/sections/About.js';
import Hero from './components/sections/Hero.js';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 35%, #4c1d95 100%)',
    color: 'white',
    overflowX: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '5rem 1.5rem',
    paddingTop: '8rem',
    zIndex: 10
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    color: '#d1d5db',
    marginBottom: '2rem'
  };

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#9ca3af',
    maxWidth: '500px',
    margin: '0 auto 3rem',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      {/* 3D Background */}
      <ThreeBackground />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" style={sectionStyle}>
          {/* <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <h1 style={titleStyle}>
              Roger Baptiste
            </h1>
            <p style={subtitleStyle}>
              Full Stack Developer & Technical Architect
            </p>
            <p style={descriptionStyle}>
              I build scalable web applications and digital experiences using modern technologies.
              Specializing in React, Node.js, and cloud architecture to create solutions that drive business growth.
            </p>
            <button style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              View My Work
            </button>
          </div> */}
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" style={sectionStyle}>
          <About />
          {/* <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              About Me
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem'
                }}>
                  I'm a passionate full-stack developer with 5+ years of experience building scalable web applications
                  and leading technical teams. I specialize in modern JavaScript frameworks, cloud architecture, and
                  creating seamless user experiences that drive business results.
                </p>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  lineHeight: '1.7'
                }}>
                  My expertise spans the entire development lifecycle - from crafting pixel-perfect frontends with
                  React and Next.js to architecting robust backend systems with Node.js and Python.
                </p>
              </div>
              <div style={{
                width: '320px',
                height: '320px',
                margin: '0 auto',
                background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                borderRadius: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem'
              }}>
                👨‍💻
              </div>
            </div>
          </div> */}
        </section>

        {/* Skills Section Placeholder */}
        <section id="skills" style={sectionStyle}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Tech Stack & Expertise
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#d1d5db',
              marginBottom: '3rem'
            }}>
              Modern technologies I use to build amazing digital experiences
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} style={{
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'left',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <IconComponent
                        size={32}
                        style={{
                          color: '#60a5fa',
                          marginRight: '1rem'
                        }}
                      />
                      <h3 style={{
                        color: '#60a5fa',
                        margin: 0,
                        fontSize: '1.25rem',
                        fontWeight: '600'
                      }}>
                        {tech.title}
                      </h3>
                    </div>
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '0.875rem',
                      marginBottom: '1rem',
                      lineHeight: '1.4'
                    }}>
                      {tech.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {tech.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} style={{
                          background: 'rgba(96, 165, 250, 0.2)',
                          color: '#60a5fa',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid rgba(96, 165, 250, 0.3)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="proficiency" style={sectionStyle}>
          <Proficiency />
          {/* <Proficiency/> */}
        </section>
        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>
        {/* Contact Section */}
        <section id="contact" style={sectionStyle}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Let's Build Something Great
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#d1d5db',
              marginBottom: '3rem'
            }}>
              Ready to bring your next project to life?
            </p>
            <button style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}>
              Get In Touch
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;