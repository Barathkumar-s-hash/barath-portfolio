import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// Import your profile photo exactly as named
import profilePic from '../assets/barath_image.jpeg'; 

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 10% 0', position: 'relative' }}>
      
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '50px', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left Column: Text & Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}
        >
          {/* Availability Badge */}
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px', 
            background: 'rgba(45, 212, 191, 0.1)', border: '1px solid var(--border-color)',
            padding: '6px 16px', borderRadius: '20px', marginBottom: '25px',
            fontSize: '0.85rem', color: 'var(--neon-teal)', fontWeight: '500'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-teal)', boxShadow: '0 0 8px var(--neon-teal)' }}></span>
            Available for Opportunities
          </div>

          {/* Name */}
          <h1 style={{ fontSize: '4.5rem', margin: '0 0 10px 0', lineHeight: '1.1', fontWeight: '700' }}>
            Barath <br />
            <span className="neon-text-green">Kumar</span>
          </h1>
          
          {/* Typing Animation */}
          <div style={{ fontSize: '1.5rem', marginBottom: '20px', height: '40px', fontWeight: '500' }}>
            <TypeAnimation
              sequence={[
                'Networking Engineer', 2000,
                'SQL Developer', 2000,
                'Java Full Stack Developer', 2000,
                'NOC Engineer', 2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: 'var(--text-muted)' }}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '1rem', maxWidth: '500px' }}>
            Passionate about building reliable networks, efficient databases, and scalable software solutions. Continuously learning and developing expertise in Networking, SQL, Java, and Full Stack Development.
          </p>

          {/* Buttons Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-outline" style={{ textDecoration: 'none', padding: '12px 24px', borderRadius: '8px' }}>
                View Projects ↗
              </a>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', background: 'rgba(45, 212, 191, 0.1)', color: 'var(--neon-green)', border: '1px solid var(--neon-green)' }}>
                Contact Me
              </a>
            </div>
            <div>
              <a 
                href="/Barathkumar_S_Resume.pdf" 
                download="Barathkumar_S_Resume.pdf" 
                className="btn-outline"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--neon-teal)' }}
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Photo with Animated Tech Ring */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '300px', position: 'relative' }}
        >
          {/* Animated Dashed Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '2px dashed var(--border-color)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Glowing Orbit Dots */}
            <div style={{ position: 'absolute', top: '-4px', width: '10px', height: '10px', background: 'var(--neon-teal)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-teal)' }}></div>
            <div style={{ position: 'absolute', bottom: '-4px', width: '10px', height: '10px', background: 'var(--neon-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-green)' }}></div>
          </motion.div>

          {/* Inner Image Container */}
          <div style={{ 
            width: '320px', 
            height: '320px', 
            borderRadius: '50%', 
            padding: '10px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            zIndex: 2,
            position: 'relative'
          }}>
            <img 
              src={profilePic} 
              alt="Barath Kumar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
            />
            
            {/* Floating Network/Globe Badge */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: 'var(--card-bg)',
              border: '1px solid var(--neon-teal)',
              padding: '12px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 15px rgba(45, 212, 191, 0.3)',
              fontSize: '1.2rem'
            }}>
              🌐
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;