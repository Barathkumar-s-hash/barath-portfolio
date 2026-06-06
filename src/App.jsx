import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Animated Networking Background */}
      <div className="network-bg"></div>
      
      {/* Top Navigation Bar */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        
        {/* Placed the terminal right after the Hero for maximum "wow" factor */}
         
        
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications/>
        <Achievements/>
        <Contact />
      </main>
      
      {/* Footer Section */}
      {/* Footer Section */}
      <footer style={{ 
        padding: '40px 10%', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border-color)',
        background: '#0a0f16',
        marginTop: '50px',
        position: 'relative' // Added to position the up arrow
      }}>
        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
          <a href="https://github.com/Barathkumar-s-hash" target="_blank" rel="noopener noreferrer" style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🐙 GitHub
          </a>
          <a href="https://www.linkedin.com/in/barathkumar-s-8381bb374" target="_blank" rel="noopener noreferrer" style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💼 LinkedIn
          </a>
          <a href="mailto:barathkumar01405@gmail.com" style={{ color: '#8b9bb4', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📧 Email
          </a>
        </div>
        
        {/* Copyright Section */}
        <p style={{ margin: '15px 0', color: '#8b9bb4', fontSize: '0.85rem' }}>
          Designed & Developed by <span className="neon-text-teal" style={{ fontWeight: 'bold' }}>Barath Kumar</span> 
          <span style={{ margin: '0 10px', color: '#8b9bb4' }}>|</span> 
          <span style={{ color: 'var(--neon-green)', fontWeight: '500' }}>© 2026 All Rights Reserved</span>
        </p>
        
        {/* Tech Stack Footer */}
        <p style={{ margin: '10px 0 0 0', fontSize: '0.8rem', color: 'var(--neon-teal)' }}>
          Built with React.js · SQL · Java · Networking Passion
        </p>

        {/* Scroll to Top Button */}
        <a 
          href="#home" 
          style={{
            position: 'absolute',
            right: '5%',
            bottom: '40px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid var(--neon-teal)',
            background: 'transparent',
            color: 'var(--neon-teal)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(45, 212, 191, 0.1)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          ↑
        </a>
      </footer>
    </div>
  );
}

export default App;