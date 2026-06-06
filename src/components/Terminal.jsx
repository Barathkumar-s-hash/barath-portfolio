import React, { useState } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([
    "Welcome to BarathOS v1.0.0",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState('');

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'Available commands: show skills, show projects, show education, show experience, contact';
          break;
        case 'show skills':
          response = 'NETWORKING: CCNA, OSPF, EIGRP, VLAN, STP, TCP/IP, Port Security\nTOOLS: Kali Linux, Cisco Packet Tracer, Tinkercad\nPROGRAMMING: Java, HTML, CSS, JavaScript';
          break;
        case 'show projects':
          response = '1. Smart Traffic Light Control System (Tinkercad)\n2. Networking Lab Configuration (VLANs, Port Security via Packet Tracer)';
          break;
        case 'show education':
          response = 'B.E. ECE - Hindusthan Institute of Technology (Nov 2022 - Jul 2026)\nCGPA: 8.74/10';
          break;
        case 'show experience':
          response = 'Embedded Systems Intern (Jan 2025)\nFocus: Hardware interfacing, troubleshooting, and system integration.';
          break;
        case 'contact':
          response = 'Location: Musiri, Namakkal, Tamil Nadu\nPhone: +91 6369612391\nEmail: barathkumar01405@gmail.com';
          break;
        default:
          response = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
      }

      setHistory([...history, `barath@portfolio:~$ ${cmd}`, response]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '5%', display: 'flex', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', padding: '20px', fontFamily: 'monospace' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ff5f56'}}></div>
          <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e'}}></div>
          <div style={{width: 12, height: 12, borderRadius: '50%', background: '#27c93f'}}></div>
        </div>
        <div style={{ height: '300px', overflowY: 'auto', color: '#0f0' }}>
          {history.map((line, i) => (
            <div key={i} style={{ whiteSpace: 'pre-wrap', marginBottom: '5px' }}>{line}</div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>barath@portfolio:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              style={{ background: 'transparent', border: 'none', color: '#0f0', outline: 'none', width: '100%', fontFamily: 'monospace', fontSize: '1rem' }}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;