import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ToastNotification from './components/ToastNotification';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  const showToast = (message, variant = 'success') => {
    setToast({ show: true, message, variant });
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact showToast={showToast} />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastNotification
          show={toast.show}
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast({ ...toast, show: false })}
        />
      </Router>
    </HelmetProvider>
  );
}

export default App;
