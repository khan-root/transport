// components/Hero.tsx
import React from 'react';
import AutoCarousel from './AutoCarousel'; // Import the carousel

const Hero = () => {
  return (
    <div className='w-full h-[250px] md:[400px] lg:h-screen relative'>
      <AutoCarousel />
      
    </div>
  );
};

export default Hero;
