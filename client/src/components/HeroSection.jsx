import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="mb-5 mb-lg-0">
            <span className="hero-badge">IAS Accredited Testing Laboratory</span>
            <h1 className="hero-title animate-fade-in-up">
              If it shakes,
              <br />
              we test it.
            </h1>
            <p className="hero-subtitle mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Dynamic Certification Laboratories provides seismic, wind, and vibration testing
              services with IAS accreditation. We validate equipment performance under extreme
              conditions to ensure code compliance and structural safety.
            </p>
            <div
              className="d-flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Button as={Link} to="/contact" className="btn-primary-custom">
                Request a Quote
              </Button>
              <Button as={Link} to="/services" className="btn-outline-custom">
                Explore Services
              </Button>
            </div>
          </Col>

          {/* Hero stats column */}
          <Col lg={5}>
            <Row className="g-3">
              <Col xs={6}>
                <div
                  className="p-4 rounded-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="stat-number" style={{ color: '#fff' }}>
                    25+
                  </div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Years Experience
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="p-4 rounded-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="stat-number" style={{ color: '#fff' }}>
                    10K+
                  </div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Tests Completed
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="p-4 rounded-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="stat-number" style={{ color: '#fff' }}>
                    500+
                  </div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Clients Served
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="p-4 rounded-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="stat-number" style={{ color: '#fff' }}>
                    100%
                  </div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Code Compliance
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
