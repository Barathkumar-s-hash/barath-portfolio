import React from 'react';

const certData = [
  {
    icon: '📡',
    title: 'CCNA Training',
    issuer: 'Cisco Networking Academy',
    colorMain: '#00f3ff', // Neon Blue
    colorGlow: 'rgba(0, 243, 255, 0.8)'
  },
  {
    icon: '🗄️',
    title: 'SQL Certification',
    issuer: 'Database Fundamentals',
    colorMain: '#39ff14', // Neon Green
    colorGlow: 'rgba(57, 255, 20, 0.8)'
  },
  {
    icon: '☕',
    title: 'Java Full Stack Development',
    issuer: 'Full Stack Course',
    colorMain: '#ff5722', // Neon Orange/Red
    colorGlow: 'rgba(255, 87, 34, 0.8)'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '100px 10%' }}>
      <span className="section-comment" style={{ color: 'var(--neon-green)', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>
        // verify --credentials
      </span>
      <h2 className="section-title" style={{ color: 'var(--neon-teal)', fontSize: '2.8rem', marginTop: 0, marginBottom: '50px' }}>
        Certifications
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '30px' 
      }}>
        {certData.map((cert, index) => (
          <div 
            key={index} 
            className="glass-panel" 
            style={{ 
              padding: '40px 20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              background: '#0d131f', // Slightly darker inner card background
              borderRadius: '16px'
            }}
          >
            {/* Icon */}
            <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
              {cert.icon}
            </div>

            {/* Glowing Separator Line */}
            <div style={{
              width: '60px',
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${cert.colorMain}, transparent)`,
              boxShadow: `0 0 12px 2px ${cert.colorGlow}`,
              marginBottom: '30px',
              borderRadius: '50%'
            }}></div>

            {/* Text Details */}
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '0 0 10px 0' }}>
              {cert.title}
            </h3>
            <p style={{ color: '#8b9bb4', fontSize: '1rem', margin: '0 0 25px 0' }}>
              {cert.issuer}
            </p>

            {/* Certified Badge */}
            <div style={{
              padding: '6px 20px',
              borderRadius: '20px',
              border: `1px solid ${cert.colorMain}`,
              color: cert.colorMain,
              background: `rgba(${cert.colorMain === '#00f3ff' ? '0,243,255' : cert.colorMain === '#39ff14' ? '57,255,20' : '255,87,34'}, 0.05)`,
              fontSize: '0.85rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              ✓ Certified
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;