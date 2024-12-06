import React from 'react';

import { ContentSection } from '../ContentSection/ContentSection';
import { Navbar } from '../Navbar/Navbar';

export const HomePage: React.FC = () => {

  return (
    <div className="background absolute ">

      <Navbar />

      <ContentSection />

    </div>
  );
}


