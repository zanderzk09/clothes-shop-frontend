import React from 'react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  availability: boolean;
}

interface ProductGridProps {
  products: Product[];
  animationClasses: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, animationClasses }) => (

  <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-8 ${animationClasses}`}>
    {products.map((product) => (
      
      <div key={product._id} className="p-4">
        <div className="overflow-hidden rounded mb-4 shadow-lg">
          <img
            src={product.img}
            alt={product.name}
            className="object-cover shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
          />
        </div>
        <h3 className="text-white font-light text-lg">{product.name}</h3>
        <p className="text-white text-xs font-light">{product.description}</p>
        <p className="text-white text-xs font-light">Price: ${product.price}</p>
        <p className={`text-xs font-light ${product.availability ? 'text-green-500' : 'text-red-500'}`}>
          {product.availability ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    ))}
  </div>
);
