import React, { useState } from 'react';

const skillsData = {
  Frontend: [
    { name: 'HTML5', percent: 88, icon: '🌐' },
    { name: 'CSS3', percent: 85, icon: '🎨' },
    { name: 'JavaScript', percent: 80, icon: '⚡' },
    { name: 'React.js', percent: 75, icon: '⚛️' }
  ],
  Backend: [
    { name: 'Java', percent: 82, icon: '☕' },
    { name: 'JDBC', percent: 75, icon: '🔌' },
    { name: 'Servlets', percent: 70, icon: '⚙️' }
  ],
  Database: [
    { name: 'SQL', percent: 85, icon: '🗄️' },
    { name: 'MySQL', percent: 83, icon: '🐬' }
  ],
  Networking: [
    { name: 'TCP/IP', percent: 80, icon: '📡' },
    { name: 'CCNA Fundamentals', percent: 78, icon: '🛡️' },
    { name: 'Routing & Switching', percent: 75, icon: '🔄' },
    { name: 'VLANs & Subnetting', percent: 72, icon: '🕸️' }
  ],
  Tools: [
    { name: 'Git/GitHub', percent: 80, icon: '🐙' },
    { name: 'VS Code', percent: 90, icon: '💻' },
    { name: 'Eclipse', percent: 78, icon: '🌘' }
  ]
};

const Skills = () => {
  const categories = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="skills" style={{ padding: '100px 10%' }}>
      <span className="section-comment">// skills.map()</span>
      <h2 className="section-title">Skills</h2>

      {/* Tabs / Filter Bar */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setActiveTab(category)}
            style={{
              background: activeTab === category ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
              color: activeTab === category ? 'var(--neon-teal)' : 'var(--text-muted)',
              border: `1px solid ${activeTab === category ? 'var(--neon-teal)' : 'var(--border-color)'}`,
              padding: '8px 24px', 
              borderRadius: '24px', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: activeTab === category ? '600' : '400'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Left Side: Progress Bars */}
        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', padding: '30px' }}>
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#fff', fontSize: '0.95rem' }}>{skill.name}</span>
                <span className="neon-text-green" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {skill.percent}%
                </span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.percent}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Skill Cards Grid */}
        <div style={{ flex: '1', minWidth: '300px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', alignContent: 'start' }}>
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="glass-panel" style={{ padding: '25px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                {skill.icon}
              </div>
              <span style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '10px', textAlign: 'center' }}>
                {skill.name}
              </span>
              <span className="neon-text-green" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {skill.percent}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;