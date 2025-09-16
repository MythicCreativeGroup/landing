import React, { useState, useEffect, useRef } from 'react'; // <-- THIS IS THE CORRECT, VALID IMPORT
import './Philosophy.css';

const Philosophy = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`philosophy-section ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="section-title">Where Myth Becomes Reality.</h2>
      <div className="philosophy-text">
        <p>
          True innovation isn't written in lines of code; it's felt in the human heart. It's ignited by an overwhelming curiosity.
        </p>
        <p>
          We are architects of imagination and engineers of emotion. We forge AI companions that don't just execute commands, but understand intent. Partners that don't just empower potential, but Champion the soul.
        </p>
        <p>
          Because in a world overpopulated with hollow digital noise,
          we don't just build companies.
        </p>
        <p className="tagline">
          <strong>We forge legends.</strong>
        </p>
      </div>
    </section>
  );
};

export default Philosophy;