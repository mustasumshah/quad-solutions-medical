import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Quad Solutions</h1>
          <p>Your trusted partner in medical credentialing and healthcare compliance.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="mb-3 text-primary">Our Mission</h2>
              <p className="text-light mb-3">
                At Quad Solutions, we understand that healthcare providers face an ever-increasing administrative burden. Our mission is to alleviate that pressure by providing precise, efficient, and fully compliant credentialing and enrollment services.
              </p>
              <p className="text-light mb-4">
                We bridge the gap between providers and payers, ensuring that your practice remains financially healthy while you maintain focus on delivering exceptional patient care.
              </p>
              
              <h3 className="mb-2 text-primary">Why We Stand Out</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 className="text-secondary" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                  <span className="text-dark"><strong>Industry Expertise:</strong> Decades of combined experience navigating complex healthcare regulations.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 className="text-secondary" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                  <span className="text-dark"><strong>Dedicated Support:</strong> A personalized approach where every client is assigned a dedicated credentialing specialist.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 className="text-secondary" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                  <span className="text-dark"><strong>Technology Driven:</strong> Utilizing advanced tracking systems to ensure no deadline is ever missed.</span>
                </li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--primary-light)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 className="text-primary mb-3">Our Core Values</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4 className="mb-1 text-secondary">Integrity</h4>
                  <p className="text-light" style={{ fontSize: '0.9rem' }}>We operate with complete transparency and adherence to the highest ethical standards in healthcare.</p>
                </div>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4 className="mb-1 text-secondary">Precision</h4>
                  <p className="text-light" style={{ fontSize: '0.9rem' }}>Accuracy is paramount. We get it right the first time to prevent denials and delays.</p>
                </div>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <h4 className="mb-1 text-secondary">Partnership</h4>
                  <p className="text-light" style={{ fontSize: '0.9rem' }}>We view ourselves as an extension of your practice, committed to your long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
