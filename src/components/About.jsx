import React, { useState, useRef, useEffect } from 'react';

const About = () => {
  // --- Terminal Logic State ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: "Barath Kumar OS v1.0.0 — Type 'help' for commands" }
  ]);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when new commands are entered
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      // Add the user's typed command to the screen
      const newHistory = [...history, { type: 'command', text: `barath@portfolio:~$ ${input}` }];
      let output = '';

      // Define what each command does
      switch (cmd) {
        case 'help':
          output = "Available commands: whoami, education, skills, projects, clear";
          break;
        case 'whoami':
          output = "Barath Kumar - Networking Engineer & Java Full Stack Developer.";
          break;
        case 'education':
          output = "B.E. at Hindusthan Institute of Technology (Graduating 2026).";
          break;
        case 'skills':
          output = "Networking, SQL, Java, React.js, Full Stack Development.";
          break;
        case 'projects':
          output = "Network Monitoring, Fraud Detection, Food Adulteration Detection using Image Processing, and more. Scroll down to see full portfolio!";
          break;
        case 'clear':
          setHistory([{ type: 'output', text: "Barath Kumar OS v1.0.0 — Type 'help' for commands" }]);
          setInput('');
          return; // Exit early to avoid pushing more history
        case '':
          break; // Do nothing on empty enter
        default:
          output = `Command not found: ${cmd}. Type 'help' to see available commands.`;
      }

      if (output) {
        newHistory.push({ type: 'output', text: output });
      }

      setHistory(newHistory);
      setInput(''); // Clear the input box
    }
  };

  return (
    <section id="about" style={{ padding: '100px 10%' }}>
      <span className="section-comment" style={{ color: 'var(--neon-teal)' }}>// who_am_i.js</span>
      <h2 className="section-title">About Me</h2>

      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* Left Column: Text & Info Details */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.05rem' }}>
            I am a passionate technology enthusiast specializing in
            Networking, SQL, Java, and Full Stack Development.
            Currently pursuing my Bachelor of Engineering in
            Electronics and Communication Engineering while actively
            building projects and developing practical skills.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '1.05rem' }}>
            My goal is to contribute to innovative technology solutions
            as a <strong className="neon-text-teal" style={{ fontWeight: '600' }}>Networking Engineer</strong>, <strong className="neon-text-green" style={{ fontWeight: '600' }}>NOC Engineer</strong>, or <strong className="neon-text-teal" style={{ fontWeight: '600' }}>Java Full Stack Developer</strong>.
          </p>

          {/* Clean List Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '35px 120px 1fr', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>🏛️</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>College</span>
              <span style={{ color: '#fff', fontWeight: '500' }}>Hindusthan Institute of Technology</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '35px 120px 1fr', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>📅</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Year</span>
              <span style={{ color: '#fff', fontWeight: '500' }}>Graduating 2026</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '35px 120px 1fr', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>📊</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>CGPA</span>
              <span style={{ color: '#fff', fontWeight: '500' }}>8.74 / 10.0</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '35px 120px 1fr', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Location</span>
              <span style={{ color: '#fff', fontWeight: '500' }}>India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Layout */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex' }}>
          <div className="glass-panel" style={{ 
            flex: 1, 
            padding: '0', 
            overflow: 'hidden', 
            background: '#0a0f16', 
            display: 'flex', 
            flexDirection: 'column',
            height: '400px' // Fixed height so the terminal doesn't stretch infinitely
          }}>
            {/* Terminal Header */}
            <div style={{ 
              background: '#0f1623', 
              padding: '12px 20px', 
              display: 'flex', 
              alignItems: 'center', 
              borderBottom: '1px solid var(--border-color)' 
            }}>
              <div style={{ display: 'flex', gap: '8px', width: '80px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', color: 'var(--text-muted)', fontFamily: "'Fira Code', monospace", fontSize: '0.85rem' }}>
                barath@portfolio:~$
              </div>
              <div style={{ width: '80px' }}></div> 
            </div>

            {/* Terminal Body (Scrollable) */}
            <div style={{ 
              padding: '20px', 
              fontFamily: "'Fira Code', monospace", 
              flex: 1, 
              overflowY: 'auto',
              display: 'flex', 
              flexDirection: 'column'
            }}>
              
              {/* Render History */}
              <div style={{ marginBottom: '15px' }}>
                {history.map((line, index) => (
                  <p key={index} style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '0.9rem',
                    color: line.type === 'command' ? '#fff' : 'var(--neon-teal)',
                    lineHeight: '1.5'
                  }}>
                    {line.text}
                  </p>
                ))}
              </div>

              {/* Terminal Input Box */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ color: 'var(--neon-green)', marginRight: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>barath@portfolio:~$</span>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  spellCheck="false"
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: '#fff', 
                    width: '100%', 
                    outline: 'none', 
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.9rem'
                  }} 
                  autoFocus
                />
              </div>
              
              {/* Invisible div to help with auto-scrolling */}
              <div ref={bottomRef} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;