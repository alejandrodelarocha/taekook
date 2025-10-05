// src/components/Gallery.jsx

import React from 'react';
import './Gallery.css'; // 👈 CSS for animation

// --- Media Data (Using your provided image URLs) ---
const MEDIA_ITEMS = [
    { url:'/public/assets/img/image_4.jpg', type: 'image' },
    { url:'/public/assets/img/image_13.jpg', type: 'image' },
    { url:'/public/assets/img/image_16.jpg', type: 'image' },
    { url:'/public/assets/img/image_21.jpg', type: 'image' },
    { url:'/public/assets/img/image_24.jpg', type: 'image' },
    { url:'/public/assets/img/image_26.jpg', type: 'image' },
    { url:'/public/assets/img/image_37.jpg', type: 'image' },
];

// Duplicate the list so the animation can loop seamlessly without a visible jump
const INFINITE_ITEMS = [...MEDIA_ITEMS, ...MEDIA_ITEMS]; 
// ---------------------------------------------------

interface GalleryProps {
    height?: string; 
}

const Gallery: React.FC<GalleryProps> = ({ 
    height = '60vh', 
}) => {
    
    const animationDuration = MEDIA_ITEMS.length * 5; 

    return (
        <section 
            className="relative w-full overflow-hidden" 
            style={{ height: height }}
        >
            
            {/* --- Media Scroller Container --- */}
            {/* The 'scroller' class is applied */}
            <div 
                // CRITICAL FIX: Ensure no native spacing by adding 'p-0 m-0' and 'flex-nowrap'
                className="scroller flex flex-nowrap w-full h-full p-0 m-0"
                style={{ '--animation-duration': `${animationDuration}s` } as React.CSSProperties}
            >
                {INFINITE_ITEMS.map((media, index) => (
                    <div
                        key={index}
                        // Use the 'media-item' class for specific width calculation in CSS
                        className="flex-shrink-0 h-full media-item"
                    >
                        {media.type === 'image' ? (
                            <img
                                src={media.url}
                                alt={`Gallery Image ${index + 1}`}
                                // Ensure the image itself has no border/margin
                                className="w-full h-full object-cover block p-0 m-0"
                                loading="lazy"
                            />
                        ) : (
                            // Video component...
                            <video
                                src={media.url}
                                autoPlay
                                loop
                                muted
                                playsInline
                                // Ensure the video itself has no border/margin
                                className="w-full h-full object-cover block p-0 m-0"
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>

            {/* --- Overlay and Content --- */}
            <div className="absolute inset-0 bg-black/40 z-10" />

        </section>
    );
};

export default Gallery;