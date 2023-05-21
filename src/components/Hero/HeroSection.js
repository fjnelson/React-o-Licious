import React from 'react';
import '../../App.css';
import './HeroSection.css';
import Button from 'react-bootstrap/Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EXPLORE THE POSSIBILITIES</h1>
      <p>Uncover new adventures and create lasting memories.</p>
      <div className='hero-btns'>
        <Button>Your Adventure Awaits</Button>
      </div>
    </div>
  );
}

export default HeroSection;