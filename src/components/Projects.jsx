import React, { useState } from 'react';

const projectList = [
  {
    title: 'Network Incident Intelligence & Root Cause Analysis System',
    description: 'Advanced analytics platform for parsing network logs, identifying anomalies, and automating root cause analysis for rapid incident resolution.',
    tech: ['SQL', 'Networking'],
    icon: '🔍'
  },
  {
    title: 'Fraud Detection & Banking Transaction Analytics System',
    description: 'Secure, scalable backend system designed to process high-volume banking transactions and detect fraudulent patterns in real-time.',
    tech: ['Java', 'Spring Boot', 'SQL'],
    icon: '🛡️'
  },
  {
    title: 'Institute Management System',
    description: 'Comprehensive SQL-based system to manage students, faculty, courses, and academic records with relational database design.',
    tech: ['SQL', 'MySQL', 'JDBC'],
    icon: '🏛️'
  },
  {
    title: 'Student Placement Tracker',
    description: 'Web application that tracks student placement progress, company visits, and offer letters with analytics dashboard.',
    tech: ['Java', 'SQL', 'HTML', 'CSS'],
    icon: '📊'
  },
  {
    title: 'Network Monitoring Dashboard',
    description: 'Real-time dashboard to visualize network topology, monitor device health, and alert on anomalies.',
    tech: ['React.js', 'Javascript', 'CSS'],
    icon: '🌐'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Futuristic, responsive personal portfolio with animated networking background and interactive terminal.',
    tech: ['React.js', 'HTML', 'CSS', 'JS'],
    icon: '💻'
  },
    {
    title: 'Enterprise Network Configuration Lab',
    description: 'Configured VLANs, implemented Port Security, and practiced advanced routing and switching protocols.',
    tech: ['Cisco Packet Tracer', 'CCNA', 'OSPF/EIGRP'],
  },
  {
    title: 'Java Employee Management System',
    description: 'Full-stack CRUD application for managing employee records, payroll, and department assignments.',
    tech: ['Java', 'Servlets', 'JDBC', 'MySQL'],
  }
];

const Projects = () => {
  // Added the new technologies to the filter list
  const filters = ['All', 'Java', 'SQL', 'Python', 'Machine Learning', 'React.js', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'Javascript'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter logic to display correct projects based on selection
  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(project => project.tech.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: '100px 10%' }}>
      <span className="section-comment">// git log --all</span>
      <h2 className="section-title">Projects</h2>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
        {filters.map(f => (
          <button 
            key={f} 
            onClick={() => setActiveFilter(f)}
            style={{
              background: activeFilter === f ? 'var(--neon-green)' : 'transparent',
              color: activeFilter === f ? 'var(--bg-dark)' : 'var(--text-muted)',
              border: `1px solid ${activeFilter === f ? 'var(--neon-green)' : 'var(--border-color)'}`,
              padding: '6px 16px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s',
              fontSize: '0.85rem'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px' }}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="glass-panel" style={{ padding: '25px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{project.icon}</div>
            <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0', color: '#fff' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {project.tech.map(t => <span key={t} className="pill">{t}</span>)}
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href="https://github.com/Barathkumar-s-hash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-panel" 
                style={{ padding: '8px 15px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                GitHub ↗
              </a>
              <button style={{ background: 'transparent', color: 'var(--neon-green)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                Live Demo ▶
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;