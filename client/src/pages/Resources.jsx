import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../utils/seo';

const codeReferences = [
  {
    title: 'IBC 2021/2024 - International Building Code',
    description:
      'Chapter 16 and 17 requirements for structural design, seismic loads, and special inspection for seismic resistance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'ASCE 7-16/22 - Minimum Design Loads',
    description:
      'Chapter 13 seismic design requirements for nonstructural components, including anchorage and bracing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'AC156 - Shake Table Testing',
    description:
      'ICC-ES acceptance criteria for seismic certification by shake table testing of nonstructural components.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'IEEE 344 - Nuclear Seismic Qualification',
    description:
      'Recommended practice for seismic qualification of Class 1E equipment for nuclear power generating stations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
];

const resources = [
  {
    title: 'Seismic Testing Overview Guide',
    type: 'PDF',
    description:
      'Comprehensive overview of DCL seismic testing capabilities, procedures, and compliance standards.',
  },
  {
    title: 'AC156 Testing Process',
    type: 'PDF',
    description:
      'Step-by-step guide to the AC156 shake table testing process from pre-test planning to final report.',
  },
  {
    title: 'Equipment Preparation Checklist',
    type: 'PDF',
    description:
      'Pre-test checklist for clients preparing equipment for seismic qualification testing.',
  },
  {
    title: 'Sample Test Report',
    type: 'PDF',
    description:
      'Example of a DCL seismic qualification test report format and content.',
  },
  {
    title: 'HCAI Pre-Approval Guide',
    type: 'PDF',
    description:
      'Guide to the HCAI (OSHPD) pre-approval process and DCL role in supporting submissions.',
  },
  {
    title: 'Vibration Testing Capabilities',
    type: 'PDF',
    description:
      'Overview of DCL vibration testing equipment, frequency ranges, and test profiles.',
  },
];

const caseStudies = [
  {
    title: 'HVAC Unit Seismic Qualification',
    industry: 'Mechanical Equipment',
    description:
      'Full AC156 shake table testing for a rooftop HVAC unit manufacturer seeking IBC compliance and HCAI pre-approval.',
    result: 'Successful qualification with HCAI pre-approval number issued.',
  },
  {
    title: 'Electrical Panel Seismic Certification',
    industry: 'Electrical Systems',
    description:
      'Three-component seismic testing of switchgear and panelboard assemblies per ASCE 7 and AC156.',
    result: 'ICC-ES evaluation report issued for product line.',
  },
  {
    title: 'Piping System Vibration Analysis',
    industry: 'Industrial',
    description:
      'Vibration testing and FEA analysis for industrial piping system in high-seismic zone.',
    result: 'Design modifications validated; system approved for installation.',
  },
];

function Resources() {
  return (
    <>
      <SEO
        title="Resources & Technical Library"
        description="Downloadable guides, code references, case studies, and technical resources for seismic and vibration testing."
        canonical="/resources"
      />

      {/* Page header */}
      <div className="page-header">
        <Container>
          <h1>Resources & Technical Library</h1>
          <p className="mt-3">
            Access code references, testing guides, case studies, and technical documentation to
            support your seismic qualification projects.
          </p>
        </Container>
      </div>

      {/* Code references */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Code References & Standards</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              Key building codes and standards that govern seismic testing and equipment qualification.
            </p>
          </div>
          <Row className="g-4">
            {codeReferences.map((ref, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm resource-card">
                  <Card.Body>
                    <div className="resource-icon">{ref.icon}</div>
                    <Card.Title style={{ fontSize: '1rem' }}>{ref.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {ref.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Downloadable resources */}
      <section className="section-padding-sm" style={{ background: '#F8F9FA' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Downloadable Resources</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              Technical guides, checklists, and sample reports to help you prepare for testing.
            </p>
          </div>
          <Row className="g-4">
            {resources.map((resource, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm resource-card">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="badge me-2"
                        style={{ background: '#0A3D62', fontWeight: 600 }}
                      >
                        {resource.type}
                      </span>
                      <small className="text-muted">
                        {/* File size placeholder */}
                        [File Size]
                      </small>
                    </div>
                    <Card.Title style={{ fontSize: '1rem' }}>{resource.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {resource.description}
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="btn-outline-primary-custom"
                      style={{ padding: '6px 16px', fontSize: '0.85rem' }}
                      disabled
                      title="PDF upload placeholder"
                    >
                      Download
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case studies */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Case Studies</h2>
            <hr className="section-divider" />
            <p className="section-subtitle">
              Real-world examples of DCL testing projects and their outcomes.
            </p>
          </div>
          <Row className="g-4">
            {caseStudies.map((study, index) => (
              <Col key={index} lg={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <span
                      className="badge mb-3 d-inline-block"
                      style={{
                        background: 'rgba(30, 144, 255, 0.1)',
                        color: '#1E90FF',
                        fontWeight: 600,
                      }}
                    >
                      {study.industry}
                    </span>
                    <Card.Title style={{ fontSize: '1.1rem' }}>{study.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {study.description}
                    </Card.Text>
                    <div
                      className="mt-3 p-3 rounded"
                      style={{ background: '#F8F9FA', borderLeft: '3px solid #1E90FF' }}
                    >
                      <small className="fw-semibold">Result:</small>
                      <br />
                      <small className="text-muted">{study.result}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">Need More Information?</h2>
              <p className="mb-0" style={{ opacity: 0.9 }}>
                Our engineering team can provide additional technical documentation, code references,
                or answer specific questions about your project requirements.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" className="btn-primary-custom btn-lg">
                Contact Our Team
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Resources;
