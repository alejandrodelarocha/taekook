// src/components/ProductCategories.jsx

import React, { useEffect, useState } from 'react';


// --- Interface Updated: Removed 'image' prop ---
interface CategoryCardProps {
  title: string;
  color: string;
}

// --- Component Updated: Replaced Image with Styled Button ---
// Updated CategoryCard
const CategoryCard: React.FC<CategoryCardProps> = ({ title, color }) => (
  <>
  
  <div
  className={`
    flex items-center justify-center 
    h-32 md:h-40 
    rounded-lg 
    text-white font-bold text-lg md:text-2xl 
    transition-transform duration-300
    hover:scale-105
    shadow-md hover:shadow-xl
    relative
    text-center
    px-4
    cursor-pointer
  `}
  style={{
    background: `linear-gradient(135deg, ${color}55, ${color}aa)`,
  }}
  onClick={() => {
    const category = title.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", offset: { top: 100 } });
    }
  }}
>
  <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-30 transition-opacity"></span>
  <h3 className="relative z-10">{title}</h3>
</div>
</>
);


interface ProductCategoriesProps {
    color: string;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({ color }) => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    fetch('https://taekookboba.com/adm/menu.json')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        const uniqueCategories = [...new Set(data.map((item: any) => item.category))];
        setCategories(uniqueCategories as string[]);
      });
  }, []);


  return (
    <section id="categorias" className="relative w-full">
      {/* Background video (unchanged) */}
      <video
        className="absolute top-0 left-0 w-[100vw] h-[100vh] sm:w-[100%] sm:h-[100%] object-cover opacity-60 -z-10"
        autoPlay  
        loop
        muted
        playsInline
      >
        <source src="public/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (unchanged) */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Content (unchanged) */}
      <h2 className="text-4xl transform translate-y-5 font-bold text-center mb-10 ml-auto mr-auto text-white text-shadow-xl bg-[#c8bed7] w-[200px] h-[50px] rounded-lg" >Categorías</h2>
      <div className="grid grid-cols-2 px-6 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 relative z-10 cursor-pointer" style={{ paddingBottom: '50px' }}>
        {categories.map((category, index) => (
          // FIX: Removed the 'image' prop
          <CategoryCard key={index} title={category} color={color} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;