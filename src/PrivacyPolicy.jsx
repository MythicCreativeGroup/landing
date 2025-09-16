import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import Footer from './components/Footer';

const PrivacyPolicy = () => {
  // Automatically scroll to the top of the page when it loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="last-updated">Last Updated: September 16, 2025</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Mythic Creative Group. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect a single piece of personal information from you: your email address. This information is collected only when you voluntarily provide it through our "Stay Informed" newsletter signup form on our website.</p>

        <h2>3. How We Use Your Information</h2>
        <p>Your email address is used for the sole purpose of sending you updates, news, and announcements related to Mythic Creative Group, our projects (such as Project Codex), and our product launches. We will not use your email for any other purpose.</p>
        <p><strong>We will never sell, rent, or share your personal information with any third parties for their marketing purposes.</strong></p>

        <h2>4. Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access or disclosure. However, no internet-based site can be 100% secure, so we cannot guarantee absolute security.</p>
        
        <h2>5. Your Rights</h2>
        <p>You may opt-out of our email communications at any time by clicking the "unsubscribe" link provided in every email we send.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        
        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@mythiccreativegroup.com">contact@mythiccreativegroup.com</a></p>

        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;