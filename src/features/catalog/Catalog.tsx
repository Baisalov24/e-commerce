import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "@/components/ProductCard";

const Catalog = () => {
  const products = useSelector((state: RootState) => state.catalog.products);

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalog;
