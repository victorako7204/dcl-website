import { Container, Row, Col } from 'react-bootstrap';

function TrustBadges() {
  const badges = [
    { label: 'IAS Accredited', abbr: 'IAS', sub: 'AC89' },
    { label: 'ISO/IEC 17025', abbr: 'ISO', sub: '17025' },
    { label: 'NVLAP Certified', abbr: 'NVLAP', sub: 'Lab' },
    { label: 'ICC-ES Listed', abbr: 'ICC', sub: 'ES' },
    { label: 'HCAI Approved', abbr: 'HCAI', sub: 'OSHPD' },
    { label: 'ASME Certified', abbr: 'ASME', sub: 'NQA-1' },
  ];

  return (
    <section className="trust-section section-padding-sm">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title" style={{ fontSize: '1.5rem' }}>
            Trusted Accreditations & Certifications
          </h2>
          <p className="text-muted mb-0">
            Recognized by leading regulatory bodies and industry organizations
          </p>
        </div>
        <Row className="justify-content-center g-4">
          {badges.map((badge, index) => (
            <Col key={index} xs={6} sm={4} md={2}>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800 }}>{badge.abbr}</div>
                    <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>{badge.sub}</div>
                  </div>
                </div>
                <div className="trust-badge-label">{badge.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TrustBadges;
