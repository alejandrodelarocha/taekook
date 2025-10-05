// src/components/BackgroundSlideshow.jsx

import React, { useState, useEffect } from 'react';

interface BackgroundSlideshowProps {
  images: string[];
  duration?: number;
  fadeDuration?: number; 
  blurAmount?: number;
  opacity?: number; 
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({ 
  images, 
  duration = 10, 
  fadeDuration = 3,
  blurAmount = 0,
  opacity = 0.3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [images, duration]);

  if (images.length === 0) return null;

  return (
    <div className="background-slideshow">
      {images.map((imgSrc, index) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`Background ${index + 1}`}
          className={`background-image ${index === currentIndex ? 'active' : ''}`}
          style={{
            transition: `opacity ${fadeDuration}s ease-in-out`,
            filter: `blur(${blurAmount}px)`,
            opacity: index === currentIndex ? opacity : 0, 
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;