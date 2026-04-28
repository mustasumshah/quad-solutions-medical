import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does the provider credentialing process take?',
      answer: 'The timeframe varies depending on the payer and the completeness of the initial application. On average, commercial payers take 60-90 days, while Medicare/Medicaid can take 90-120 days. We work diligently to expedite this process.'
    },
    {
      question: 'What information do I need to provide to start the credentialing process?',
      answer: 'Typically, we need your current CV, medical license, DEA certificate, board certification, malpractice insurance face sheet, and a completed CAQH profile. Our team will provide a comprehensive checklist during onboarding.'
    },
    {
      question: 'Do you handle re-credentialing?',
      answer: 'Yes, we provide continuous profile management and handle all re-credentialing applications to ensure there is no lapse in your network participation.'
    },
    {
      question: 'How do you keep my data secure?',
      answer: 'We utilize HIPAA-compliant, encrypted systems for all data storage and transmission. Your sensitive information is strictly protected and only shared with authorized entities (e.g., insurance boards) as required for credentialing.'
    },
    {
      question: 'Can you help with out-of-state licensing?',
      answer: 'Yes, we offer medical licensing services and can assist providers in obtaining and maintaining licenses across multiple states.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our credentialing and enrollment services.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  marginBottom: '1rem', 
                  padding: '1.5rem', 
                  cursor: 'pointer' 
                }}
                onClick={() => toggleFAQ(index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="text-primary" style={{ fontSize: '1.1rem', margin: 0 }}>{faq.question}</h3>
                  {openIndex === index ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
                </div>
                {openIndex === index && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--primary-light)' }}>
                    <p className="text-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-light mb-2">Still have questions?</p>
            <a href="/contact" className="btn btn-outline">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
