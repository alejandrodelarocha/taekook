// src/components/FeaturedProducts.jsx

import React from 'react';

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, color }) => (
  <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold mb-1 text-gray-800">{name}</h3>
      <p className="text-xl font-bold mb-3" style={{ color: color }}>{price}</p>

    </div>
  </div>
);

interface FeaturedProductsProps {
    data: { name: string; price: string; image: string; }[];
    color: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ data, color }) => {
  return (
    <section 
      className="py-16 px-4 md:px-8 text-center max-w-7xl mx-auto" 
      style={{ borderTop: `1px dashed ${color}` }}
    >
      <h2 className="text-3xl font-extrabold mb-10 text-gray-800">FAVORITOS DE LA CASA</h2>
      
      {/* Products Carousel/Grid: Horizontal scroll on mobile, flex layout on desktop */}
      <div className="flex overflow-x-auto lg:overflow-x-visible space-x-6 pb-4 lg:justify-center">
        {data.map((product, index) => (
          <ProductCard key={index} {...product} color={color} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;