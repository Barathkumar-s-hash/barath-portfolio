import React from 'react';

const contactInfo = [
  { 
    icon: '📧', 
    label: 'Email', 
    value: 'barathkumar01405@gmail.com', 
    link: 'mailto:barathkumar01405@gmail.com' 
  },
  { 
    icon: '📞', 
    label: 'Phone', 
    value: '+91 6369612391', 
    link: 'tel:6369612391' 
  },
  { 
    icon: '🐙', 
    label: 'GitHub', 
    value: 'Barathkumar-s-hash', 
    link: 'https://github.com/Barathkumar-s-hash' 
  },
  { 
    icon: '💼', 
    label: 'LinkedIn', 
    value: 'barathkumar-s-8381bb374', 
    link: 'https://www.linkedin.com/in/barathkumar-s-8381bb374' 
  }
];

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 10%' }}>
      <span className="section-comment">// connect.init()</span>
      <h2 className="section-title">Contact</h2>

      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        
        {/* Left Side: Contact Cards */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '30px', fontSize: '1.05rem' }}>
            Open to networking opportunities, collaborations, and internship roles. Let's build something great together!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-panel" 
                style={{ 
                  display: 'flex', alignItems: 'center', padding: '15px 20px', 
                  textDecoration: 'none', gap: '20px' 
                }}
              >
                <div style={{ 
                  background: 'rgba(45, 212, 191, 0.1)', width: '45px', height: '45px', 
                  borderRadius: '50%', display: 'flex', justifyContent: 'center', 
                  alignItems: 'center', fontSize: '1.2rem' 
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>
                    {info.label}
                  </div>
                  <div className="neon-text-teal" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="glass-panel" style={{ flex: '1', minWidth: '300px', padding: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', marginTop: '0', color: '#fff' }}>Send a Message</h3>
          
          <form 
            action="https://formspree.io/f/mykawnln" 
            method="POST" 
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            
            {/* Name Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Name</label>
              <input 
                type="text" 
                name="name" /* <-- Added missing name attribute */
                placeholder="Your Name" 
                style={{ 
                  padding: '12px 15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', 
                  borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '0.95rem' 
                }}
                required 
              />
            </div>

            {/* Email Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Email</label>
              <input 
                type="email" 
                name="email" /* <-- Added missing name attribute */
                placeholder="your@email.com" 
                style={{ 
                  padding: '12px 15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', 
                  borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '0.95rem' 
                }}
                required 
              />
            </div>

            {/* Message Textarea */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Message</label>
              <textarea 
                name="message" /* <-- Added missing name attribute */
                placeholder="Your message here..." 
                style={{ 
                  padding: '12px 15px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', 
                  borderRadius: '8px', color: '#fff', outline: 'none', minHeight: '120px', resize: 'vertical', fontSize: '0.95rem' 
                }}
                required 
              />
            </div>

            <button type="submit" className="btn-outline" style={{ width: '100%', marginTop: '10px', padding: '12px', fontSize: '1rem' }}>
              Send Message ✈
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;