import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Philosophy from './Philosophy';
import Founders from './Founders';
import Horizon from './Horizon';
import Artifact from './Artifact';
import PrivacyPolicy from './PrivacyPolicy';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    const handleMouseMove = (event) => { setMousePosition({ x: event.clientX, y: event.clientY }); };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      {/* The redundant 'scrolled' class logic has been removed here */}
      <div className="artifact-container">
        {/* --- THIS IS THE FIX --- */}
        {/* We are now passing the isScrolled state down to the Artifact component */}
        <Artifact isScrolled={isScrolled} mousePosition={mousePosition} />
      </div>
      
      {/* This wrapper uses the z-index rule from App.css to lift everything up */}
      <div className="content-wrapper">
        <main className="scrollable-content">
          <section className="first-section" />
          <Philosophy />
          <Founders />
          <Horizon />
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;