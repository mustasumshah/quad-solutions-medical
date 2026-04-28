import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', practice: '', message: '' });
    }, 5000);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our credentialing experts today.</p>
        </div>
      </div>

      <section className="section animate-slide-up">
        <div className="container">
          <div className="grid-2">

            {/* Contact Information */}
            <div>
              <h2 className="mb-3 text-primary">Let's Discuss Your Needs</h2>
              <p className="text-light mb-4">
                Whether you are a solo practitioner opening a new clinic or a large hospital system needing comprehensive enrollment support, Quad Solutions is here to help. Fill out the form, and a credentialing specialist will reach out within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark">Call Us</h4>
                    <p className="text-light">+1 (800) 123-4567</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark">Email Us</h4>
                    <p className="text-light">info@quadsolutions.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-dark">Visit Us</h4>
                    <p className="text-light">123 Healthcare Blvd, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Generation Form */}
            <div className="card">
              <h3 className="mb-3 text-primary">Request a Free Consultation</h3>

              {submitted ? (
                <div style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <p><strong>Thank you!</strong> Your message has been sent successfully. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr. Jane Doe"
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="practice">Practice Name</label>
                    <input
                      type="text"
                      id="practice"
                      name="practice"
                      className="form-control"
                      value={formData.practice}
                      onChange={handleChange}
                      placeholder="City Medical Group"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">How can we help you? *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="I am looking for credentialing services for..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
