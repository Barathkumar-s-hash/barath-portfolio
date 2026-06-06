import React from 'react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 1000,
      background: 'var(--nav-bg)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '15px 5%', 
      display: 'flex', 
      justifyContent: 'space-between', /* This is what pushes links to the right */
      alignItems: 'center',
      boxSizing: 'border-box' /* Prevents horizontal scrolling */
    }}>
      
      {/* Left Side: Logo */}
      <div>
        <h1 className="neon-text-teal" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          BK.dev
        </h1>
      </div>
      
      {/* Right Side: Navigation Links (No theme button) */}
      <ul style={{ 
        display: 'flex', 
        gap: '30px', 
        listStyle: 'none', 
        margin: 0, 
        padding: 0 
      }}>
        {navLinks.map((link) => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase()}`} 
              style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.95rem', 
                textDecoration: 'none', 
                transition: 'color 0.2s',
                fontWeight: '500'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--neon-teal)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;