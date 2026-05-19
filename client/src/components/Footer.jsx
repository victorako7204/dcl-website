import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Row>
          {/* Company info */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: 'linear-gradient(135deg, #1E90FF, #0A3D62)',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.65rem',
                  marginRight: 10,
                }}
              >
                DCL
              </div>
              <div>
                <h5 className="mb-0" style={{ fontSize: '1rem' }}>
                  Dynamic Certification Laboratories
                </h5>
                <small style={{ opacity: 0.6 }}>A VMC Group Company</small>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
              Industry-leading seismic, wind, and vibration testing services. IAS-accredited
              laboratory providing code-compliant testing and engineering analysis for critical
              infrastructure worldwide.
            </p>
          </Col>

          {/* Quick links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/resources">Resources</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services">Seismic Testing</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Wind & Vibration</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Engineering Analysis</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">IBC/HCAI Pre-Approvals</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Nuclear Qualification</Link>
              </li>
            </ul>
          </Col>

          {/* Contact & certifications */}
          <Col lg={3} md={6}>
            <h5>Contact Us</h5>
            <address style={{ fontSize: '0.9rem', fontStyle: 'normal' }}>
              <div className="mb-2">
                <strong>Dynamic Certification Laboratories LLC</strong>
                <br />
                A VMC Group Company
                <br />
                {/* Address placeholder */}
                <span style={{ opacity: 0.7 }}>[Office Address]</span>
              </div>
              <div className="mb-2">
                <a href="mailto:info@dcltesting.com" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  info@dcltesting.com
                </a>
              </div>
              <div>
                <a href="tel:+15551234567" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  +1 (555) 123-4567
                </a>
              </div>
            </address>

            {/* Certification badges placeholder */}
            <div className="mt-3">
              <small style={{ opacity: 0.6, display: 'block', marginBottom: 8 }}>
                ACCREDITATIONS
              </small>
              <div className="d-flex gap-2">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.55rem',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  IAS
                  <br />
                  Accredited
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.55rem',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  ISO
                  <br />
                  17025
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.55rem',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  NVLAP
                  <br />
                  Certified
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <small style={{ opacity: 0.6 }}>
            &copy; {currentYear} Dynamic Certification Laboratories LLC. All rights reserved.
          </small>
          <div className="d-flex gap-3">
            <Link to="#" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              Privacy Policy
            </Link>
            <Link to="#" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
