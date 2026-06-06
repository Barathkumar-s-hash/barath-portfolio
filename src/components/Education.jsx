import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{ padding: '100px 10%' }}>
      <h2 className="neon-text-green" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>EDUCATION ROUTING</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        {/* College Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ width: '100%', maxWidth: '700px', padding: '30px', borderLeft: '4px solid var(--neon-blue)' }}
        >
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>B.E. Electronics and Communication Engineering</h3>
          <h4 style={{ margin: '0 0 15px 0', color: 'var(--neon-green)' }}>Hindusthan Institute of Technology, Coimbatore</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', marginBottom: '15px' }}>
            <span>Nov 2022 - Jul 2026</span>
            <span>CGPA: 8.74/10</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>Relevant Coursework: Computer Networks, DBMS, Operating Systems, Java Programming.</p>
        </motion.div>

        {/* School Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ width: '100%', maxWidth: '700px', padding: '30px', borderLeft: '4px solid var(--neon-blue)' }}
        >
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Higher Secondary Education (HSE)</h3>
          <h4 style={{ margin: '0 0 15px 0', color: 'var(--neon-green)' }}>Government Higher Secondary School, Namakkal</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa' }}>
            <span>Jul 2021 - Mar 2022</span>
            <span>Score: 80.5%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;