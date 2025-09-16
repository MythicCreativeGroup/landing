import React, { useState, useEffect, useRef } from 'react'; // <-- THIS IS THE CORRECTED LINE
import './Horizon.css';

const Horizon = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // --- START OF IMPLEMENTATION ---
  // 1. We bring back state to control the input and manage the form's status
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  useEffect(() => {
    // This IntersectionObserver logic remains unchanged
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      }, { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 2. This is our new, asynchronous submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // This is the KEY. It prevents the page from redirecting.
    
    setFormState({ status: 'submitting', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xldwygyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        // SUCCESS!
        setFormState({ status: 'success', message: 'Thank you! We will be in touch.' });
        setEmail(''); // This clears the input box on success.
      } else {
        // ERROR!
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setFormState({ status: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };
  // --- END OF IMPLEMENTATION ---

  return (
    <section 
      ref={sectionRef} 
      className={`horizon-section ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="section-title">The Horizon</h2>
      <div className="horizon-text">
        <p>The future we forge is powered by the Persona Engine: a new generation of AI defined not by what it can do, but by *who it can be.*</p>
        <p>Our first world built on this foundation is Project Codex. A world where your companion is more than an assistant—they are a confidant, a strategist, and a true partner in your story.</p>
        <p>New legends are waiting to be written. Join us, and be the first to live them.</p>
      </div>
      
      {/* 3. The form now uses our custom handleSubmit function */}
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email"
          className="newsletter-input" 
          placeholder="Enter your email address" 
          required
          value={email} // Controlled by our state
          onChange={(e) => setEmail(e.target.value)} // Updates our state
          disabled={formState.status === 'submitting'} // Disables input during submission
        />
        <button 
          type="submit" 
          className="newsletter-button"
          disabled={formState.status === 'submitting'} // Disables button during submission
        >
          {formState.status === 'submitting' ? 'Submitting...' : 'Stay Informed'}
        </button>
      </form>
      
      {/* 4. We display our custom success or error message right here on the page */}
      {formState.status === 'success' && <p className="form-success-message">{formState.message}</p>}
      {formState.status === 'error' && <p className="form-error-message">{formState.message}</p>}

    </section>
  );
};

export default Horizon;