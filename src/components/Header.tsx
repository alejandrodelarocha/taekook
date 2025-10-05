import React from 'react';

interface HeaderProps {
  color: string;
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  // Smooth scroll helper with offset
  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.clientHeight : 0;

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 10; // adjust extra spacing

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className="bg-white p-4 md:py-5 lg:px-20 border-b sticky top-0 z-50 backdrop-blur-md bg-white/90"
      style={{ borderBottomColor: color }}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-black mb-0 mx-auto"
          style={{ color: color }}
        >
          TAEKOOK Boba & Tea
        </div>

        {/* Navigation */}
        <nav className="flex-grow flex justify-center order-2 w-full md:w-auto md:order-none mt-2 md:mt-0">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#c8bed7] cursor-pointer font-bold hover:text-purple-500 transition duration-200 text-sm md:text-base"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#categorias"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('categorias');
                }}
                className="text-[#c8bed7] cursor-pointer font-bold hover:text-purple-500 transition duration-200 text-sm md:text-base"
              >
                MENU
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact');
                }}
                className="text-[#c8bed7] cursor-pointer font-bold hover:text-purple-500 transition duration-200 text-sm md:text-base"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
