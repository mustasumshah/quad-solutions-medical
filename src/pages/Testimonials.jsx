import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Jenkins',
      role: 'Family Medicine Practitioner',
      content: 'Quad Solutions took the headache out of my credentialing process when I opened my new practice. They were fast, efficient, and communicated every step of the way.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mark T.',
      role: 'Clinic Administrator',
      content: 'We transitioned our entire billing and enrollment process to Quad Solutions six months ago. Our denial rates have dropped significantly, and our revenue cycle has never been healthier.',
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Robert Chen',
      role: 'Orthopedic Surgeon',
      content: 'Highly professional team. They managed my complex Medicare and commercial payer enrollments without a single hitch. I highly recommend their services to any provider.',
      rating: 5
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>Don't just take our word for it. See what healthcare professionals are saying about us.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#F59E0B' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-light mb-3" style={{ flexGrow: 1, fontStyle: 'italic' }}>"{testimonial.content}"</p>
                <div>
                  <h4 className="text-primary">{testimonial.name}</h4>
                  <p className="text-light" style={{ fontSize: '0.875rem' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
