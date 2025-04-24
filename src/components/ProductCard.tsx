import React from "react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, width: 200 }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", borderRadius: 4 }} />
      <h3>{product.title}</h3>
      <p>{product.brand}</p>
      <p>${product.price}</p>
      <small>Rating: {product.rating}</small>
    </div>
  );
};

export default ProductCard;
