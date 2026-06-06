import React from 'react';

const achievementsData = [
  {
    icon: '🚀',
    number: '6+',
    label: 'Projects Completed'
  },
  {
    icon: '⚡',
    number: '14+',
    label: 'Technologies Learned'
  },
  {
    icon: '🏆',
    number: '3+',
    label: 'Certifications Earned'
  },
  {
    icon: '📚',
    number: '100+',
    label: 'Learning Hours'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" style={{ padding: '100px 10%' }}>
      <span className="section-comment" style={{ color: 'var(--neon-teal)', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>
        // stats.query()
      </span>
      <h2 className="section-title" style={{ color: 'var(--neon-teal)', fontSize: '2.8rem', marginTop: 0, marginBottom: '50px' }}>
        Achievements
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '30px' 
      }}>
        {achievementsData.map((stat, index) => (
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
              background: '#0d131f', 
              borderRadius: '16px'
            }}
          >
            {/* Icon */}
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              {stat.icon}
            </div>

            {/* Neon Number */}
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'var(--neon-green)', 
              marginBottom: '10px' 
            }}>
              {stat.number}
            </div>

            {/* Label */}
            <div style={{ 
              color: '#8b9bb4', 
              fontSize: '0.95rem', 
              fontWeight: '500' 
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;