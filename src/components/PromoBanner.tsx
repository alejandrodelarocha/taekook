// src/components/PromoBanner.jsx

import React from 'react';

interface PromoBannerProps {
  color: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ color }) => {
  return (
    <section
      className="py-10 px-4 md:px-8 text-center mt-12"
      style={{ backgroundColor: color }}
    >
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">TAEKOOK Boba & Tea</h2>
        <p className="text-xl italic">✨Inspiradas y creadas en tu bias favorito💜🫰🏻</p>
      </div>
    </section>
  );
};

export default PromoBanner;