import { Toast, ToastContainer } from 'react-bootstrap';

function ToastNotification({ show, message, variant, onClose }) {
  const bgMap = {
    success: '#198754',
    danger: '#DC3545',
    warning: '#FFC107',
    info: '#0D6EFD',
  };

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
      <Toast
        show={show}
        onClose={onClose}
        delay={5000}
        autohide
        bg={variant || 'success'}
        style={{ backgroundColor: bgMap[variant] || bgMap.success }}
      >
        <Toast.Header
          className="text-white"
          style={{ backgroundColor: bgMap[variant] || bgMap.success }}
        >
          <strong className="me-auto">
            {variant === 'success'
              ? 'Success'
              : variant === 'danger'
                ? 'Error'
                : variant === 'warning'
                  ? 'Warning'
                  : 'Info'}
          </strong>
          <small className="text-white">Just now</small>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastNotification;
