import { FileText, Building2, Calculator, ShieldAlert, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Provider Credentialing',
      icon: <UserCheck size={40} className="text-secondary" />,
      description: 'Comprehensive primary source verification and credentialing for new providers joining your practice. We handle the paperwork, tracking, and follow-up.',
    },
    {
      id: 2,
      title: 'Insurance Enrollment',
      icon: <Building2 size={40} className="text-secondary" />,
      description: 'Streamlined enrollment with Medicare, Medicaid, and all major commercial payers. We ensure your providers are in-network as quickly as possible.',
    },
    {
      id: 3,
      title: 'Medical Billing Support',
      icon: <Calculator size={40} className="text-secondary" />,
      description: 'Expert medical billing support to optimize your revenue cycle. Reduce claim denials and improve cash flow with our accurate coding and billing practices.',
    },
    {
      id: 4,
      title: 'Compliance and Documentation',
      icon: <ShieldAlert size={40} className="text-secondary" />,
      description: 'Maintain 100% compliance with ever-changing state and federal regulations. We audit and organize your documentation to keep you audit-ready.',
    },
    {
      id: 5,
      title: 'CAQH Profile Management',
      icon: <FileText size={40} className="text-secondary" />,
      description: 'Proactive management and regular re-attestation of CAQH profiles. We ensure your data is always current to prevent payment delays.',
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Core Services</h1>
          <p>End-to-end credentialing and billing solutions tailored for modern healthcare practices.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map(service => (
              <div key={service.id} className="card">
                <div className="mb-3">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-primary">{service.title}</h3>
                <p className="text-light">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <div style={{ backgroundColor: 'var(--primary-light)', padding: '3rem', borderRadius: 'var(--radius-lg)', marginTop: '2rem' }}>
              <h3 className="mb-2 text-primary">Need a custom solution for your practice?</h3>
              <p className="text-light mb-3">Contact our specialists to discuss how we can tailor our services to meet your specific needs.</p>
              <Link to="/contact" className="btn btn-primary">Speak to a Specialist</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
