const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation & Assessment',
      description: 'We begin with a thorough review of your current credentialing status, identify any gaps, and build a customized action plan tailored to your practice.'
    },
    {
      number: '02',
      title: 'Data Gathering & Verification',
      description: 'Our team collects all necessary documentation (licenses, DEA, education, etc.) and performs rigorous primary source verification to ensure accuracy.'
    },
    {
      number: '03',
      title: 'Application Submission',
      description: 'We accurately complete and submit applications to CAQH, PECOS, and commercial payers, minimizing the risk of rejections.'
    },
    {
      number: '04',
      title: 'Tracking & Follow-up',
      description: 'We do not just submit and wait. Our team proactively tracks applications and maintains constant communication with insurance boards until approval.'
    },
    {
      number: '05',
      title: 'Approval & Maintenance',
      description: 'Once approved, we hand over the network effective dates and continue to monitor your profiles for future re-credentialing deadlines.'
    }
  ];

  return (
    <div className="process-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Workflow</h1>
          <p>A proven, step-by-step methodology to get you credentialed quickly and correctly.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginBottom: index === steps.length - 1 ? '0' : '3rem',
                position: 'relative'
              }}>
                <div style={{ 
                  flexShrink: 0, 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  zIndex: 1
                }}>
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '60px',
                    left: '29px',
                    width: '2px',
                    height: 'calc(100% + 1rem)',
                    backgroundColor: 'var(--primary-light)',
                    zIndex: 0
                  }}></div>
                )}
                <div style={{ paddingTop: '0.5rem' }}>
                  <h3 className="mb-1 text-primary">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
