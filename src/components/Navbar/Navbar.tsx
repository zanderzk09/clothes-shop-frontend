import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 bg-gradient-to-b from-black via-black to-black/70 border-2 border-gray-900 z-50">
      <div className="flex flex-1 justify-start">
        <DesktopMenu />
      </div>

      <div className="flex flex-1 justify-center">
        <img src="/assets/app/haloLogo.svg" className="w-12" alt="Logo" />
      </div>

      <div className="flex flex-1 justify-end">
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menuOpen && <MobileMenu />}
    </nav>
  );
};











