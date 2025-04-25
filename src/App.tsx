import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/catalogSlice";
import { mockProducts } from "@/data/products";
import Catalog from "@/features/catalog/Catalog";
import type { AppDispatch } from "@/store";
import FiltersPanel from "@/features/catalog/Filters";
import Cart from "@/features/cart/Cart";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <div>
      <h1>Electronics Store</h1>
      <FiltersPanel />
      <Catalog />
      <Cart/>
    </div>
  );
};

export default App;
