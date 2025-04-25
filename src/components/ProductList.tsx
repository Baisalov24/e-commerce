import React, { useMemo } from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { useAppSelector } from "@/store/hooks";

const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const { priceRange, brand, rating } = useAppSelector((state) => state.filters);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrand = brand ? product.brand === brand : true;
      const matchesRating = rating ? product.rating >= rating : true;

      return inPriceRange && matchesBrand && matchesRating;
    });
  }, [products, priceRange, brand, rating]); 

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
