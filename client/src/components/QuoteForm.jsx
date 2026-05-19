import { useState } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { submitQuoteRequest } from '../api/quotesApi';

function QuoteForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentType: '',
    standard: '',
    timeline: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmitError('');

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(true);
    setSubmitting(true);

    try {
      const response = await submitQuoteRequest(formData);
      if (response.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          equipmentType: '',
          standard: '',
          timeline: '',
          message: '',
        });
        setValidated(false);
        if (onSuccess) onSuccess(response.message);
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setSubmitError(error.response.data.errors.join('. '));
      } else {
        setSubmitError('Failed to submit quote request. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {submitError && (
        <div className="alert alert-danger" role="alert">
          {submitError}
        </div>
      )}

      <Row className="g-3">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              minLength={2}
              maxLength={100}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your full name (2-100 characters).
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Company Name *</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Engineering Inc."
              required
              minLength={2}
              maxLength={200}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your company name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
              pattern="^[\d\s\-\+\(\)]{7,20}$"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Equipment Type *</Form.Label>
            <Form.Control
              type="text"
              name="equipmentType"
              value={formData.equipmentType}
              onChange={handleChange}
              placeholder="e.g., HVAC Unit, Electrical Panel, Piping System"
              required
              maxLength={500}
            />
            <Form.Control.Feedback type="invalid">
              Please describe the equipment to be tested.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Testing Standard / Code *</Form.Label>
            <Form.Select
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            >
              <option value="">Select applicable standard...</option>
              <option value="AC156">AC156 - Seismic Certification by Shake Table Testing</option>
              <option value="ASCE 7">ASCE 7 - Minimum Design Loads</option>
              <option value="IBC">IBC - International Building Code</option>
              <option value="IEEE 344">IEEE 344 - Seismic Qualification of Equipment</option>
              <option value="OSHPD/HCAI">OSHPD/HCAI - California Hospital Seismic</option>
              <option value="ICC-ES">ICC-ES - Acceptance Criteria</option>
              <option value="ASME">ASME - Nuclear Components</option>
              <option value="Other">Other (describe in message)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select the applicable testing standard.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Project Timeline *</Form.Label>
            <Form.Select name="timeline" value={formData.timeline} onChange={handleChange} required>
              <option value="">Select timeline...</option>
              <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
              <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
              <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
              <option value="Long-term (6+ months)">Long-term (6+ months)</option>
              <option value="Planning / Exploratory">Planning / Exploratory</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a project timeline.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Upload Specifications (Optional)</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf,.doc,.docx,.dwg,.zip"
              disabled
              title="File upload available upon request. Please contact us directly."
            />
            <Form.Text className="text-muted">
              PDF, DOC, DWG, or ZIP (max 25MB). Contact us for upload access.
            </Form.Text>
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Additional Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project requirements, equipment specifications, or any questions..."
              maxLength={2000}
            />
            <Form.Text className="text-muted d-block text-end">
              {formData.message.length}/2000
            </Form.Text>
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Button
            type="submit"
            className="btn-primary-custom w-100"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Spinner as="span" animation="border" size="sm" className="me-2" role="status" />
                Submitting...
              </>
            ) : (
              'Submit Quote Request'
            )}
          </Button>
          <p className="text-muted text-center mt-2 mb-0" style={{ fontSize: '0.85rem' }}>
            Our engineering team will respond within 24-48 business hours.
          </p>
        </Col>
      </Row>
    </Form>
  );
}

export default QuoteForm;
