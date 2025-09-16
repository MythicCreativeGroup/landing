import React, { useState, useEffect, useRef } from 'react';
import './Founders.css';
import leeImage from './Lee-Hedshot-2.png'; 
import joeyImage from './Joey-Hedshot-1.png';

const Founders = () => {
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
      className={`founders-section ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="section-title">The Founders</h2>
      <div className="founders-grid">
        <div className="founder-card">
          <img src={leeImage} alt="Lee Klasinski" className="founder-portrait" />
          <h3 className="founder-name">Lee Klasinski</h3>
          <p className="founder-title">CEO - Chief Executive Officer</p>
          <a href="mailto:lee@mythiccreativegroup.com" className="founder-email">
            lee@mythiccreativegroup.com
          </a>
          <p className="founder-bio">
            Lee Klasinski is a visionary systems architect and a rare hybrid of creative director and AI innovator. His expertise lies in engineering not just products, but entire narrative ecosystems, a skill validated by industry leaders who praise his "perfect balance of artist and engineer."
            <br/><br/>
            He holds a Master of Science in Entertainment Business, where he graduated Salutatorian, and a Bachelor's in Game Design. This unique fusion of creative mastery and business acumen has defined his career, allowing him to lead everything from game design teams to strategic business development for creative technology firms.
            <br/><br/>
            As the founding architect of Mythic Creative Group, Lee is consolidating his extensive experience into a single, focused mission: to pioneer a new ecosystem of creative technology—spanning next-generation narrative entertainment, intuitive development tools, and revolutionary AI assistive technologies—by architecting groundbreaking AI systems and interactive experiences that think, feel, and challenge the boundaries of what is possible.
          </p>
        </div>
        <div className="founder-card">
          <img src={joeyImage} alt="Joey Kinney" className="founder-portrait" />
          <h3 className="founder-name">Joey Kinney</h3>
          <p className="founder-title">CXO - Chief Experience Officer</p>
          <a href="mailto:joey@mythiccreativegroup.com" className="founder-email">
            joey@mythiccreativegroup.com
          </a>
          <p className="founder-bio">
            Joey Kinney is an architect of intuitive design and the guardian of the user's experience. His entire career has been driven by a lifelong love for video games and a singular mission: to build fun, engaging, and accessible digital worlds. This passion was forged at technology giants like Microsoft (Xbox), Nintendo, and ArenaNet (Guild Wars 2), where he learned that the highest standard of quality isn't just technical—it's how a product makes you *feel*.
            <br/><br/>
            He champions a rigorous, empathy-driven approach, believing technology should feel less like a cold tool and more like a supportive partner. For Joey, a bug isn't just a code error; it's a break in the user's emotional journey. This philosophy is the foundation of his signature "It Just Feels Right" standard—a measure of quality that prioritizes a seamless and empowering experience.
            <br/><br/>
            As a co-founder of Mythic Creative Group, Joey is embedding this principle into the company's DNA, building a new legacy of user-centric design where empathy is the most critical line of code. This is the promise embedded in our DNA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founders;