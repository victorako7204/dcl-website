import { Container, Row, Col, Card } from 'react-bootstrap';
import { SEO } from '../utils/seo';
import QuoteForm from '../components/QuoteForm';

function Contact({ showToast }) {
  const handleSuccess = (message) => {
    showToast(message, 'success');
  };

  return (
    <>
      <SEO
        title="Contact & Quote Request"
        description="Request a quote for seismic, wind, or vibration testing services. Our engineering team responds within 24-48 business hours."
        canonical="/contact"
      />

      {/* Page header */}
      <div className="page-header">
        <Container>
          <h1>Contact & Quote Request</h1>
          <p className="mt-3">
            Tell us about your project and our engineering team will provide a detailed quote within
            24-48 business hours.
          </p>
        </Container>
      </div>

      {/* Contact form + info */}
      <section className="section-padding">
        <Container>
          <Row className="g-5">
            {/* Quote form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>
                    Request a Quote
                  </h3>
                  <p className="text-muted mb-4">
                    Complete the form below with your project details. All fields marked with * are
                    required.
                  </p>
                  <QuoteForm onSuccess={handleSuccess} />
                </Card.Body>
              </Card>
            </Col>

            {/* Contact info sidebar */}
            <Col lg={4}>
              <div className="mb-4">
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h5 className="mb-3" style={{ fontSize: '1.1rem' }}>
                      Contact Information
                    </h5>

                    <div className="mb-3">
                      <div className="fw-semibold mb-1" style={{ fontSize: '0.85rem', color: '#0A3D62' }}>
                        EMAIL
                      </div>
                      <a href="mailto:info@dcltesting.com">info@dcltesting.com</a>
                    </div>

                    <div className="mb-3">
                      <div className="fw-semibold mb-1" style={{ fontSize: '0.85rem', color: '#0A3D62' }}>
                        PHONE
                      </div>
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </div>

                    <div className="mb-3">
                      <div className="fw-semibold mb-1" style={{ fontSize: '0.85rem', color: '#0A3D62' }}>
                        BUSINESS HOURS
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                        Monday - Friday: 8:00 AM - 5:00 PM PST
                        <br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>

                    <div>
                      <div className="fw-semibold mb-1" style={{ fontSize: '0.85rem', color: '#0A3D62' }}>
                        OFFICE ADDRESS
                      </div>
                      <address className="text-muted mb-0" style={{ fontSize: '0.9rem', fontStyle: 'normal' }}>
                        Dynamic Certification Laboratories LLC
                        <br />
                        A VMC Group Company
                        <br />
                        {/* Address placeholder */}
                        [Street Address]
                        <br />
                        [City, State ZIP]
                      </address>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Quick response card */}
              <Card className="border-0 shadow-sm" style={{ background: '#0A3D62', color: '#fff' }}>
                <Card.Body className="p-4">
                  <h5 className="mb-3" style={{ color: '#fff', fontSize: '1.1rem' }}>
                    Fast Response Guarantee
                  </h5>
                  <p className="mb-3" style={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    We understand project timelines are critical. Our engineering team reviews all
                    inquiries within one business day.
                  </p>
                  <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                    <li className="mb-2">
                      <span style={{ color: '#1E90FF' }}>&#10003;</span> Response within 24-48 hours
                    </li>
                    <li className="mb-2">
                      <span style={{ color: '#1E90FF' }}>&#10003;</span> Free initial consultation
                    </li>
                    <li className="mb-2">
                      <span style={{ color: '#1E90FF' }}>&#10003;</span> Detailed project scoping
                    </li>
                    <li>
                      <span style={{ color: '#1E90FF' }}>&#10003;</span> Competitive pricing
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
