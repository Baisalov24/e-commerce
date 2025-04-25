export interface Product {
    id: string;
    title: string;
    description: string;
    brand: string;
    image: string;
    price: number;
    rating: number;
    category: 'phone' | 'laptop' | 'gadget';
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  
  export interface Filters {
    priceRange: [number, number];
    brands: string[];
    rating: number;
    category: 'phone' | 'laptop' | 'gadget' | 'all';
  }
  