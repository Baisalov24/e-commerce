import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types";


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, width: 200 }}>
    <img  src={product.image} alt={product.title}  loading="lazy" style={{ width: "100%" }} />
    <h3>{product.title}</h3>
    <p>{product.brand}</p>
    <p>${product.price}</p>
    <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
  </div>
  );
};

export default ProductCard;
