import { useState, useEffect } from 'react';
import { categoryService, Category, Product } from '../services/categoryService';

export const useCategoryAnimation = (categoryId: string | null) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [animationClasses, setAnimationClasses] = useState<{
    title: string;
    categoryGrid: string;
    productGrid: string;
  }>({
    title: '',
    categoryGrid: '',
    productGrid: '',
  });

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await categoryService.fetchCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (categoryId) {
      const fetchProducts = async () => {
        try {
          setAnimationClasses({
            title: 'animate__animated animate__flash',
            categoryGrid: 'animate__animated animate__pulse',
            productGrid: 'animate__animated animate__backInUp',
          });

          const products = await categoryService.fetchProductsByCategory(categoryId);
          setProducts(products);

          setTimeout(() => {
            setAnimationClasses({
              categoryGrid: '',
              title: '',
              productGrid: '',
            });
          }, 900);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }
  }, [categoryId]);

  return {
    categories,
    products,
    animationClasses,
  };
};



