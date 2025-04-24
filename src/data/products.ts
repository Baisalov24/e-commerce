import { Product } from "@/types";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    description: "A smartphone from Apple with a stunning display and performance.",
    brand: "Apple",
    image: "https://via.placeholder.com/200x200.png?text=iPhone+14+Pro",
    price: 999,
    rating: 4.9,
    category: "phone",
  },
  {
    id: "2",
    title: "Samsung Galaxy S23",
    description: "Flagship from Samsung with a powerful camera and screen.",
    brand: "Samsung",
    image: "https://via.placeholder.com/200x200.png?text=Galaxy+S23",
    price: 899,
    rating: 4.7,
    category: "phone",
  },
  {
    id: "3",
    title: "MacBook Air M2",
    description: "Lightweight and powerful laptop for everyday work.",
    brand: "Apple",
    image: "https://via.placeholder.com/200x200.png?text=MacBook+Air+M2",
    price: 1199,
    rating: 4.8,
    category: "laptop",
  },
];
