import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/catalogSlice";
import { mockProducts } from "@/data/products";
import FiltersPanel from "@/features/catalog/Filters";
import Catalog from "@/features/catalog/Catalog";
import { AppDispatch } from "@/store";

const CatalogPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Каталог</h1>
      <FiltersPanel />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
