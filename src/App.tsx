import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/catalogSlice";
import { mockProducts } from "@/data/products";
import Catalog from "@/features/catalog/Catalog";
import type { AppDispatch } from "@/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <div>
      <h1>Electronics Store</h1>
      <Catalog />
    </div>
  );
};

export default App;
