import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../utils/seo';

const capabilities = [
  {
    title: 'Shake Table Testing',
    description:
      'Multi-axis shake table capable of simulating earthquake ground motions per AC156, ASCE 7, and IEEE 344 requirements.',
  },
  {
    title: 'Vibration Equipment',
    description:
      'Electrodynamic and hydraulic shakers for sinusoidal, random, and shock vibration testing across broad frequency ranges.',
  },
  {
    title: 'Data Acquisition',
    description:
      'High-channel-count DAQ systems with real-time monitoring, TRS analysis, and automated report generation.',
  },
  {
    title: 'Engineering Analysis',
    description:
      'In-house PE-level staff for FEA, structural calculations, and technical report preparation.',
  },
];

const team = [
  { name: '[Name]', role: 'President / Principal Engineer', initials: 'PE' },
  { name: '[Name]', role: 'Director of Testing Operations', initials: 'TO' },
  { name: '[Name]', role: 'Senior Structural Engineer, PE', initials: 'SE' },
  { name: '[Name]', role: 'Test Engineering Manager', initials: 'TM' },
];

function About() {
  return (
    <>
      <SEO
        title="About DCL"
        description="Learn about Dynamic Certification Laboratories, our mission, lab capabilities, engineering team, and VMC Group affiliation."
        canonical="/about"
      />

      {/* Page header */}
      <div className="page-header">
        <Container>
          <h1>About Dynamic Certification Laboratories</h1>
          <p className="mt-3">
            A VMC Group Company &mdash; Engineering Confidence Through Rigorous Testing
          </p>
        </Container>
      </div>

      {/* Mission */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h2 className="section-title">Our Mission</h2>
                <hr className="section-divider" />
                <p className="lead text-muted">
                  Dynamic Certification Laboratories LLC (DCL) is dedicated to providing the highest
                  quality seismic, wind, and vibration testing services to the engineering and
                  construction industry. As part of the VMC Group family of companies, we combine
                  decades of testing expertise with cutting-edge laboratory capabilities to deliver
                  reliable, code-compliant results that protect lives and infrastructure.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lab capabilities */}
      <section className="section-padding-sm" style={{ background: '#F8F9FA' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Laboratory Capabilities</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              State-of-the-art testing equipment and facilities designed for precision, repeatability,
              and compliance with international standards.
            </p>
          </div>
          <Row className="g-4">
            {capabilities.map((cap, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div
                      className="mb-3"
                      style={{
                        width: 48,
                        height: 48,
                        background: '#0A3D62',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                      }}
                    >
                      {index + 1}
                    </div>
                    <Card.Title style={{ fontSize: '1.1rem' }}>{cap.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {cap.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Engineering team */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Our Engineering Team</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              Experienced professionals with deep expertise in seismic qualification, structural
              engineering, and code compliance.
            </p>
          </div>
          <Row className="g-4 justify-content-center">
            {team.map((member, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="team-card">
                  <div className="team-avatar">{member.initials}</div>
                  <h5 style={{ fontSize: '1rem', marginBottom: 4 }}>{member.name}</h5>
                  <small className="text-muted">{member.role}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* VMC Group affiliation */}
      <section className="section-padding-sm" style={{ background: '#F8F9FA' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                Part of the VMC Group
              </h2>
              <hr className="section-divider" style={{ margin: '1rem 0 1.5rem' }} />
              <p className="text-muted">
                Dynamic Certification Laboratories is proud to be part of the VMC Group, a
                diversified engineering and testing services organization. The VMC Group brings
                together specialized companies under one umbrella, providing clients with integrated
                solutions across the full project lifecycle.
              </p>
              <p className="text-muted">
                This affiliation gives DCL clients access to broader resources, shared expertise, and
                the financial stability of a larger organization while maintaining the focused,
                responsive service of a specialized testing laboratory.
              </p>
              <div
                className="mt-4 p-4 rounded-3"
                style={{ background: '#fff', border: '1px solid #E9ECEF' }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg, #0A3D62, #1E90FF)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.7rem',
                      marginRight: 12,
                    }}
                  >
                    VMC
                  </div>
                  <div>
                    <strong>VMC Group</strong>
                    <br />
                    <small className="text-muted">
                      Engineering. Testing. Certification.
                    </small>
                  </div>
                </div>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                  {/* VMC Group description placeholder */}
                  [VMC Group company description and website link]
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ADB5BD',
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
                  <div>VMC Group Logo / Photo</div>
                  <small style={{ fontSize: '0.8rem' }}>Replace with actual image</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">Work With Our Team</h2>
              <p className="mb-0" style={{ opacity: 0.9 }}>
                Whether you need seismic qualification, vibration testing, or engineering analysis,
                our team is ready to support your project.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" className="btn-primary-custom btn-lg">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
