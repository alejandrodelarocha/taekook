// src/App.jsx

import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Gallery from './components/Gallery';


// IMPORTANT: Assume images are located in the public/assets/img/ folders.
// The paths below use the correct absolute path starting from the public folder root.


const productCategoriesData = [
  { name: "Brown Sugar Boba", price: "$6.99", image: '/assets/img/productos/1.png' },
  { name: "Matcha Latte", price: "$5.50", image: '/assets/img/productos/2.png' }, 
  { name: "Fruit Tea Burst", price: "$4.00", image: '/assets/img/productos/3.png' },
  { name: "Cheesecake Slice", price: "$5.00", image: '/assets/img/productos/4.png' },
];

const heroBackgroundImages = [
  '/public/assets/img/image_4.jpg',
  '/public/assets/img/image_13.jpg',
  '/public/assets/img/image_16.jpg',
  '/public/assets/img/image_21.jpg',
  '/public/assets/img/image_24.jpg',
  '/public/assets/img/image_26.jpg',
  '/public/assets/img/image_37.jpg',
];

function App() {
  const companyColor = '#c8bed7'; // Soft lavender

  return (
    <div className="App">
      <Header color={companyColor} />
      <main>
        <Hero 
          color={companyColor} 
          backgroundImages={heroBackgroundImages} 
        />
        <ProductCategories data={productCategoriesData} color={companyColor} />
        <Menu />
        {/* <FeaturedProducts data={featuredProductsData} color={companyColor} /> */}
        <PromoBanner color={companyColor} />
        <Gallery />
      </main>
      <Footer color={companyColor} />
    </div>
  );
}

export default App;