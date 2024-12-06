import React from 'react';

interface Category {
  _id: string;
  name: string;
}

interface CategoryGridProps {
  categories: Category[];
  fetchProductsByCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, fetchProductsByCategory }) => (

  <div className="grid border mt-20 py-1 border-gray-900 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">

    {categories.map((category) => (
      <button
        key={category._id}
        onClick={() => fetchProductsByCategory(category._id)}
        className=" font-light rounded shadow text-center text-xs hover:text-neutral-600 text-white"
      >
        {category.name}
      </button>
    ))}
    
  </div>

);
