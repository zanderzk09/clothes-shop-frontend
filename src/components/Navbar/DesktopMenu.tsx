import React from 'react';
import { Link } from 'react-router-dom';

export const DesktopMenu: React.FC = () => (
  <div className="hidden md:flex space-x-10">
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

