import React from 'react';

interface CategoryTitleProps {
  animationClasses: string;
}

export const CategoryTitle: React.FC<CategoryTitleProps> = ({ animationClasses }) => (
  <div className="mt-32 animate__animated animate__flash">

    <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold ${animationClasses}`}>
      FIND WHAT YOU'RE LOOKING FOR
    </h3>
    <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-red-600 font-bold mt-2 ${animationClasses}`}>
      CHOOSE WHAT YOU LIKE
    </h3>
    
  </div>
);
