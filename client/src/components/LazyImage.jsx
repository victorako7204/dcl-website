import { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, className, placeholder, ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} style={{ position: 'relative' }}>
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#F8F9FA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ADB5BD',
          }}
        >
          {placeholder || 'Loading...'}
        </div>
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          {...props}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            ...props.style,
          }}
        />
      )}
    </div>
  );
}

export default LazyImage;
