import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function ServiceCard({ icon, title, description, linkTo, delay = '0s' }) {
  return (
    <Card
      className="service-card animate-fade-in-up"
      style={{ animationDelay: delay }}
      border="0"
    >
      <Card.Body>
        <div className="service-icon">{icon}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {linkTo && (
          <Link to={linkTo} className="fw-semibold" style={{ fontSize: '0.9rem' }}>
            Learn more &rarr;
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
