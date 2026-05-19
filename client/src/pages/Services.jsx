import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../utils/seo';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Seismic Testing & Qualification',
    description:
      'Comprehensive shake table testing and seismic qualification services for mechanical, electrical, and plumbing (MEP) equipment, architectural components, and structural systems.',
    details: [
      'AC156 Shake Table Testing',
      'ASCE 7-16/22 Seismic Design Requirements',
      'ICC-ES Acceptance Criteria (AC156, AC193)',
      'Three-Component (X, Y, Z) Seismic Input',
      'Required Response Spectrum (RRS) & Test Response Spectrum (TRS)',
      'Post-Test Inspection & Functional Verification',
    ],
    standards: ['AC156', 'ASCE 7', 'ICC-ES', 'IBC 2021/2024'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
    title: 'Wind & Vibration Simulation',
    description:
      'Dynamic vibration testing and wind load simulation to evaluate equipment and structural performance under environmental loading conditions.',
    details: [
      'Sinusoidal & Random Vibration Testing',
      'Wind Tunnel Simulation & Load Analysis',
      'Fatigue & Endurance Testing',
      'Resonance Frequency Identification',
      'Multi-Axis Vibration Profiles',
      'Environmental Stress Screening (ESS)',
    ],
    standards: ['ASCE 7', 'MIL-STD-810', 'IEC 60068', 'ASTM D999'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Engineering Analysis & FEA',
    description:
      'Advanced finite element analysis and structural engineering calculations to support equipment qualification and code compliance documentation.',
    details: [
      'Finite Element Analysis (FEA)',
      'Structural Load Calculations',
      'Anchor Bolt & Attachment Design',
      'Seismic Restraint Engineering',
      'Rational Analysis Reports',
      'Peer Review & Third-Party Verification',
    ],
    standards: ['ASCE 7', 'AISC 360', 'ACI 318', 'NDS'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'IBC / HCAI Pre-Approvals',
    description:
      'Pre-approval testing and documentation services for International Building Code compliance and California HCAI (formerly OSHPD) seismic certification.',
    details: [
      'HCAI (OSHPD) Pre-Approval Applications',
      'ICC-ES Evaluation Reports',
      'City of LA Research Lab (RR) Submissions',
      'Plan Checker Coordination',
      'Technical Report Preparation',
      'AHJ Liaison Services',
    ],
    standards: ['IBC', 'CBC', 'HCAI', 'ICC-ES'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Nuclear Qualification',
    description:
      'Seismic qualification and testing for nuclear safety-related equipment per IEEE and ASME nuclear industry standards.',
    details: [
      'IEEE 344 Seismic Qualification',
      'NQA-1 Quality Assurance Program',
      'IEEE 323 Equipment Qualification',
      'Regulatory Guide 1.100/1.101 Compliance',
      'SSE/OBE Testing Protocols',
      'Nuclear Grade Documentation & Traceability',
    ],
    standards: ['IEEE 344', 'IEEE 323', 'NQA-1', '10 CFR 50'],
  },
];

function Services() {
  return (
    <>
      <SEO
        title="Testing Services"
        description="Seismic testing, wind & vibration simulation, engineering analysis, IBC/HCAI pre-approvals, and nuclear qualification services."
        canonical="/services"
      />

      {/* Page header */}
      <div className="page-header">
        <Container>
          <h1>Our Testing Services</h1>
          <p className="mt-3">
            Comprehensive seismic, wind, and vibration testing with IAS accreditation and
            engineering analysis to support code compliance worldwide.
          </p>
        </Container>
      </div>

      {/* Services grid */}
      <section className="section-padding">
        <Container>
          {services.map((service, index) => (
            <Row
              key={index}
              className={`align-items-center mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <Col lg={5} className="mb-4 mb-lg-0">
                <div
                  className="rounded-3 p-5 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
                    border: '2px dashed #DEE2E6',
                    minHeight: 250,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="text-center">
                    <div style={{ color: '#0A3D62', marginBottom: 16 }}>{service.icon}</div>
                    <div style={{ color: '#ADB5BD', fontSize: '0.9rem' }}>
                      Service Image Placeholder
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <h2 className="mb-3" style={{ fontSize: '1.75rem' }}>
                  {service.title}
                </h2>
                <p className="text-muted mb-4">{service.description}</p>

                <h5 className="mb-3" style={{ fontSize: '1rem' }}>
                  Capabilities Include:
                </h5>
                <Row className="g-2 mb-4">
                  {service.details.map((detail, i) => (
                    <Col md={6} key={i}>
                      <div className="d-flex align-items-start">
                        <span style={{ color: '#1E90FF', marginRight: 8, fontWeight: 700 }}>
                          &#10003;
                        </span>
                        <span style={{ fontSize: '0.9rem' }}>{detail}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="mb-4">
                  <small className="text-muted fw-semibold d-block mb-2">
                    APPLICABLE STANDARDS:
                  </small>
                  <div className="d-flex flex-wrap gap-2">
                    {service.standards.map((std, i) => (
                      <span
                        key={i}
                        className="badge"
                        style={{
                          background: '#0A3D62',
                          color: '#fff',
                          fontWeight: 500,
                          padding: '6px 12px',
                        }}
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">Need a Custom Testing Solution?</h2>
              <p className="mb-0" style={{ opacity: 0.9 }}>
                Our engineers can develop tailored testing protocols for unique equipment and
                project requirements. Contact us for a consultation.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" className="btn-primary-custom btn-lg">
                Get a Custom Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
