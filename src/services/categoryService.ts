import { api } from './api';

export interface Category {
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  availability: boolean;
  img: string;
}

export interface CategoryService {
  fetchCategories(): Promise<Category[]>;
  fetchProductsByCategory(categoryId: string): Promise<Product[]>;
}

export const categoryService: CategoryService = {
  async fetchCategories(): Promise<Category[]> {
    const response = await api.get('/categories/');
    return response.data.categories;
  },
  async fetchProductsByCategory(categoryId: string): Promise<Product[]> {
    const response = await api.get(`/products?category=${categoryId}`);
    return response.data.products;
  }
};

