import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../utils/seo';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TrustBadges from '../components/TrustBadges';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Seismic Testing',
    description:
      'Shake table testing and seismic qualification per AC156, ASCE 7, and IBC requirements. Validate equipment performance under simulated earthquake conditions.',
    linkTo: '/services',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
    title: 'Wind & Vibration Simulation',
    description:
      'Dynamic vibration testing and wind load simulation for structural components, mechanical systems, and non-structural building elements.',
    linkTo: '/services',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Engineering Analysis',
    description:
      'Finite element analysis (FEA), structural calculations, and engineering reports to support code compliance and equipment qualification.',
    linkTo: '/services',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'IBC/HCAI Pre-Approvals',
    description:
      'Pre-approval testing and documentation for IBC compliance and California HCAI (formerly OSHPD) seismic certification requirements.',
    linkTo: '/services',
  },
];

function Home() {
  return (
    <>
      <SEO
        title="Seismic & Vibration Testing Services"
        description="IAS-accredited seismic, wind, and vibration testing laboratory. AC156, ASCE 7, IBC compliance testing for critical equipment and infrastructure."
        canonical="/"
      />

      <HeroSection />

      {/* Services overview */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Comprehensive Testing Services</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              From shake table testing to engineering analysis, DCL provides end-to-end
              qualification services for equipment and structural components.
            </p>
          </div>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} lg={3} md={6}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  linkTo={service.linkTo}
                  delay={`${index * 0.1}s`}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/services" className="btn-outline-primary-custom">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <TrustBadges />

      {/* Why choose DCL */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">Why Choose DCL?</h2>
              <hr className="section-divider" style={{ margin: '1rem 0 1.5rem' }} />
              <p className="text-muted mb-4">
                As a VMC Group company, Dynamic Certification Laboratories brings decades of
                combined expertise in seismic qualification and structural testing. Our IAS-accredited
                laboratory delivers reliable, code-compliant test results that engineers and
                authorities having jurisdiction trust.
              </p>
              <ul className="list-unstyled">
                {[
                  'IAS AC89 Accredited Laboratory',
                  'Experienced PE-Level Engineering Staff',
                  'State-of-the-Art Shake Table & Vibration Equipment',
                  'Fast Turnaround on Test Reports',
                  'Direct AHJ & Plan Checker Support',
                  'Competitive Pricing & Flexible Scheduling',
                ].map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span
                      style={{
                        color: '#1E90FF',
                        marginRight: 10,
                        fontWeight: 700,
                      }}
                    >
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              {/* Lab image placeholder */}
              <div
                className="rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ADB5BD',
                  fontSize: '1.1rem',
                  border: '2px dashed #DEE2E6',
                }}
              >
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="mb-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div>Lab Facility Photo</div>
                  <small style={{ fontSize: '0.8rem' }}>Replace with actual image</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">Ready to Start Your Testing Project?</h2>
              <p className="mb-0" style={{ opacity: 0.9, fontSize: '1.1rem' }}>
                Contact our engineering team for a free consultation and quote. We typically respond
                within 24-48 business hours.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" className="btn-primary-custom btn-lg">
                Request a Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
