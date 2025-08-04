import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ThreeBackground from './components/ui/ThreeBackground';
import Projects from './components/sections/Projects.js';
import Proficiency from './components/sections/Proficiency.js';
import About from './components/sections/About.js';
import Hero from './components/sections/Hero.js';
import TechStack from './components/sections/TechStack.js';
import Contact from './components/sections/Contact.js';

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
    // display: 'flex',    //Removed in order to allow stacked rows and block flow
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
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" style={sectionStyle}>
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" style={sectionStyle}>
          <TechStack />
        </section>

        <section id="proficiency" style={sectionStyle}>
          <Proficiency />
        </section>

        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" style={sectionStyle}>
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;