import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <Stethoscope size={32} />
              <span>Quad Solutions</span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Professional medical credentialing and billing services designed to optimize your healthcare practice's revenue and compliance.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/process">How It Works</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} />
                <span>+1 (800) 123-4567</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} />
                <span>info@quadsolutions.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} style={{ marginTop: '0.25rem' }} />
                <span>123 Healthcare Blvd, Suite 400<br/>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Quad Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
