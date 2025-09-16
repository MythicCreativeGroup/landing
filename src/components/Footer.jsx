import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // <-- This is the new import for the router link
import './Footer.css';
import fullTextLogo from '../assets/Full-Text.png';
import discordIcon from '../assets/discordgold.png';
import instagramIcon from '../assets/instagold.png';
import linkedinIcon from '../assets/linkedgold.png';
import xIcon from '../assets/xgold.png';
import youtubeIcon from '../assets/ytgold.png';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(footerRef.current);
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className={`footer-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="footer-content">
        <img src={fullTextLogo} alt="Mythic Creative Group" className="footer-logo" />
        <div className="social-links">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" className="social-icon" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X" className="social-icon" /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><img src={discordIcon} alt="Discord" className="social-icon" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
        </div>
        <p className="copyright-text">
          © 2025 Mythic Creative Group. All Rights Reserved.
          <span className="email-separator"> | </span>
          <a href="mailto:contact@mythiccreativegroup.com" className="footer-link">
            contact@mythiccreativegroup.com
          </a>
          <span className="email-separator"> | </span>
          {/* --- This is the new link that uses the router --- */}
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;