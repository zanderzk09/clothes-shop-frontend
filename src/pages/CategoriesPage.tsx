import React, { useState } from 'react';
import { CategoryGrid } from '../components/Categories/CategoryGrid';
import { CategoryTitle } from '../components/Categories/CategoryTitle';
import { Navbar } from '../components/Navbar/Navbar';
import { ProductGrid } from '../components/Categories/ProductGrid';
import { useCategoryAnimation } from '../hooks/useCategoryAnimation';

export const CategoriesPage: React.FC = () => {
  
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const { categories, products, animationClasses } = useCategoryAnimation(selectedCategoryId);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="categoriesBackground">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center">
        <CategoryTitle animationClasses={animationClasses.title} />
      </div>

      <CategoryGrid
        categories={categories}
        fetchProductsByCategory={handleCategoryClick}
      />

      {products.length > 0 && (
        <ProductGrid
          products={products}
          animationClasses={animationClasses.productGrid}
        />
      )}
    </div>
  );
};














