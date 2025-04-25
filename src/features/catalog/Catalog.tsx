import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const Catalog = () => {
  const { products, filters, sortBy } = useSelector((state: RootState) => state.catalog);

  const filteredAndSorted = useMemo(() => {
    let result: Product[] = [...products];

    result = result.filter(p => {
      const inPriceRange = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const inBrand = filters.brands.length ? filters.brands.includes(p.brand) : true;
      const inRating = p.rating >= filters.rating;
      const inCategory = filters.category === "all" || p.category === filters.category;

      return inPriceRange && inBrand && inRating && inCategory;
    });

    result.sort((a, b) => {
      if (sortBy === "priceAsc") return a.price - b.price;
      if (sortBy === "priceDesc") return b.price - a.price;
      return b.rating - a.rating; 
    });

    return result;
  }, [products, filters, sortBy]);

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {filteredAndSorted.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalog;
