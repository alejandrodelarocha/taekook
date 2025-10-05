// src/components/Hero.jsx (Updated)

import React from 'react';
import BackgroundSlideshow from './BackgroundSlideshow';
import AnimatedProductSwarm from './AnimatedProductSwarm';

interface HeroProps {
  color: string;
  backgroundImages: string[];
}

const Hero: React.FC<HeroProps> = ({ color, backgroundImages }) => {
  return (
    // Increased vertical padding and height for desktop feel
    <section
    id="home"
      className="relative h-[95vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 lg:px-12"
      style={{ backgroundColor: color }}
    >
      <BackgroundSlideshow
        images={backgroundImages}
      />

      {/* Main Content: Desktop is 3-column, Mobile stacks (default flex-col) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between items-stretch">


        {/* Product Swarm: Takes up 50% of the space on large screens 
           Crucially, we use h-full to force it to stretch vertically.
        */}
        <div className="w-full w-100 relative flex justify-center items-center h-[80vh]">
          <AnimatedProductSwarm />
        </div>

      </div>

      {/* Ticker Banner (No change here) */}
      <div
        className="hero-banner-ticker absolute bottom-0 w-full text-center py-2 overflow-hidden z-20 text-sm md:text-lg font-bold"
        style={{ backgroundColor: '#fff', color: color }}
      >
        <p className="uppercase">• Bebidas de tapioca • Inspiradas y creadas en tu bias favorito • Horario: Lunes a sabado de 2:00 a 7:00pm</p>
      </div>
    </section>
  );
};

export default Hero;