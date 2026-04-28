import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero_medical.png';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.85), rgba(10, 37, 64, 0.85)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '10rem 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="animate-slide-up" style={{ color: 'white', fontSize: '4.5rem', marginBottom: '1.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            Seamless Medical <br/><span className="gradient-text">Credentialing</span>
          </h1>
          <p className="animate-slide-up delay-100" style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.9)' }}>
            We handle the complexities of provider credentialing and insurance enrollment, so you can focus on what matters most—patient care.
          </p>
          <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
              Get Started
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', marginTop: '-50px', paddingTop: '50px' }}>
        <div className="container">
          <div className="grid-3 text-center">
            <div className="card animate-slide-up delay-100">
              <ShieldCheck size={56} className="text-secondary mx-auto mb-3" style={{ margin: '0 auto' }} />
              <h3 className="mb-2">100% Compliant</h3>
              <p className="text-light">Ensuring all documentation meets current NCQA standards and state regulations.</p>
            </div>
            <div className="card animate-slide-up delay-200">
              <Clock size={56} className="text-secondary mx-auto mb-3" style={{ margin: '0 auto' }} />
              <h3 className="mb-2">Faster Processing</h3>
              <p className="text-light">Our dedicated team expedites the enrollment process to get you billing sooner.</p>
            </div>
            <div className="card animate-slide-up delay-300">
              <CheckCircle size={56} className="text-secondary mx-auto mb-3" style={{ margin: '0 auto' }} />
              <h3 className="mb-2">Verified Accuracy</h3>
              <p className="text-light">Rigorous quality checks minimize errors and prevent costly delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Core Solutions</h2>
          <div className="grid-2">
            <div className="card animate-slide-up delay-100">
              <h3 className="mb-2">Provider Credentialing</h3>
              <p className="text-light mb-4">Complete primary source verification and credentialing for new and established physicians, nurses, and allied health professionals.</p>
              <Link to="/services" style={{ color: 'var(--secondary-dark)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="card animate-slide-up delay-200">
              <h3 className="mb-2">Insurance Enrollment</h3>
              <p className="text-light mb-4">Navigating the complex maze of Medicare, Medicaid, and commercial payer enrollments with precision and speed.</p>
              <Link to="/services" style={{ color: 'var(--secondary-dark)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container animate-slide-up">
          <h2 className="mb-3" style={{ color: 'white' }}>Ready to Streamline Your Practice?</h2>
          <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
            Partner with Quad Solutions today and experience a hassle-free approach to medical credentialing and billing.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
