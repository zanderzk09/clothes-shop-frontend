import React from 'react';
import { Link } from 'react-router-dom';

export const MobileMenu: React.FC = () => (
  <div className="md:hidden absolute top-14 left-0 w-full border-2 border-gray-900 bg-black text-white p-4 flex flex-col space-y-4">
    <Link to="/home" className="text-white font-light text-xs hover:text-neutral-600">
      HOME
    </Link>

    <Link to="/categories" className="text-white font-light text-xs hover:text-neutral-600">
      CATEGORIES
    </Link>

    <Link to="/about" className="text-white font-light text-xs hover:text-neutral-600">
      ABOUT
    </Link>
    
    <Link to="/contact" className="text-white font-light text-xs hover:text-neutral-600">
      CONTACT
    </Link>
  </div>
);
