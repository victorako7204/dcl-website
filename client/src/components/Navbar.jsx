import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <BSNavbar
      expand="lg"
      className="navbar-custom"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          {/* VMC Group Logo Placeholder */}
          <div
            style={{
              width: 40,
              height: 40,
              background: 'linear-gradient(135deg, #0A3D62, #1E90FF)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: '0.7rem',
              marginRight: 10,
            }}
          >
            DCL
          </div>
          <div>
            <div style={{ lineHeight: 1.1, fontSize: '1.1rem' }}>DCL</div>
            <div style={{ fontSize: '0.65rem', color: '#6C757D', fontWeight: 500 }}>
              A VMC Group Company
            </div>
          </div>
        </NavLink>

        <BSNavbar.Toggle aria-controls="main-nav" />
        <BSNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.to}
                as={NavLink}
                to={link.to}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Button
              as={NavLink}
              to="/contact"
              variant="primary"
              className="ms-lg-3 mt-2 mt-lg-0 btn-primary-custom"
              onClick={() => setExpanded(false)}
            >
              Request a Quote
            </Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
