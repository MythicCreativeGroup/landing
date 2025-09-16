import React from 'react';
import './Header.css';

// Importing our final, approved assets
import crestLogo from '../assets/Crest-Full-Clean.png';
import textLogo from '../assets/Full-Text.png';

function Header({ isScrolled }) {
  return (
    // The main header bar. The 'visible' class triggers all animations.
    <header className={`floating-header ${isScrolled ? 'visible' : ''}`}>
      
      {/* Container for the text logo on the left */}
      <div className="logo-container text-logo-container">
        <img src={textLogo} alt="Mythic Creative" className="header-text-logo" />
      </div>

      {/* Container for the crest logo in the center */}
      <div className="logo-container crest-logo-container">
        <img src={crestLogo} alt="Mythic Creative Group Crest" className="header-crest-logo" />
      </div>

    </header>
  );
}

export default Header;