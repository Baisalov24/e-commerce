import { Product } from "@/types";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    description: "A smartphone from Apple with a stunning display and performance.",
    brand: "Apple",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-spaceblack-202404?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1712956909430",
    price: 999,
    rating: 4.9,
    category: "phone",
  },
  {
    id: "2",
    title: "Samsung Galaxy S23",
    description: "Flagship from Samsung with a powerful camera and screen.",
    brand: "Samsung",
    image: "https://i5.walmartimages.com/seo/Samsung-Galaxy-S23-256GB-Unlocked-Phantom-Black_9f234d8a-15b9-4db1-9ace-f8d07d68a8c5.fd6e4f7e369de98956b78ea8560c9820.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: 899,
    rating: 4.7,
    category: "phone",
  },
  {
    id: "3",
    title: "MacBook Air M2",
    description: "Lightweight and powerful laptop for everyday work.",
    brand: "Apple",
    image: "https://aafa7ada.delivery.rocketcdn.me/wp-content/uploads/2023/09/apple-macbook-air-2022-m2-cinza-espacial.jpg",
    price: 1199,
    rating: 4.8,
    category: "laptop",
  },
];
