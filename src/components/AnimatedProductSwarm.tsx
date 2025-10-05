import React, { useState, useEffect } from 'react';

const products = Array.from({ length: 14 }, (_, i) => `/assets/img/products/${i + 1}.png`);
const logo = '/assets/img/logo.jpg'; // central logo

const AnimatedProductSwarm: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePos({
        x: (e.clientX - centerX) / centerX,
        y: (e.clientY - centerY) / centerY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Add 'wheel' event listener to improve performance by detecting scroll instead of continuous rotation
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => setRotation(prev => prev + 0.3), 16);
    return () => clearInterval(interval);
  }, []);

  // --- FIX: Define dynamic logo size and calculate radius for ALL cases ---

  // 1. Determine the diameter of the central logo based on window size
  const logoDiameter = window.innerWidth < 600 ? 200 : 400;
  const logoRadius = logoDiameter / 2;

  // 2. Define the orbit radius: logo edge + desired gap (50px)
  // This value is guaranteed to be calculated for every render.
  const orbitGap = 50; 
  const radius = logoRadius + orbitGap; 

  // --- END FIX ---
  
  // Note: centerX and centerY are not strictly needed here as we use transform later
  // const centerX = window.innerWidth / 2;
  // const centerY = window.innerHeight / 2;

  return (
    <div className="relative w-full h-full flex justify-center items-center perspective-1000 overflow-visible">

      {/* Central Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute rounded-full shadow-2xl"
        style={{
          width: `${logoDiameter}px`,
          height: `${logoDiameter}px`,
          zIndex: 20,
        }}
      />

      {/* Products Orbiting */}
      {products.map((src, index) => {
        // Calculate base angle + continuous rotation
        const angle = (index / products.length) * 2 * Math.PI + (rotation * Math.PI / 180);

        // Circular orbit + mouse parallax
        // The result x and y are the offset from the center (0, 0) of the parent div
        const x = Math.cos(angle) * radius + mousePos.x * 40;
        const y = Math.sin(angle) * radius + mousePos.y * 30;

        // Scale: bigger when near the front (closer to bottom of orbit)
        const scale = 0.6 + 0.4 * (Math.sin(angle) + 1) / 2; 

        const size = 80 * scale;

        return (
          <img
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            className="absolute rounded-full shadow-xl transition-transform duration-100 ease-out"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              // Use translate3d to leverage GPU acceleration
              transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
              zIndex: Math.round(scale * 10),
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedProductSwarm;