import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/catalogSlice";
import { mockProducts } from "@/data/products";
import type { AppDispatch } from "@/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import Header from "@/components/Header";

const CatalogPage = lazy(() => import("@/pages/CatalogPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItemCount = useAppSelector((state) => state.cart.items.length);

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <Router>
      <Header cartItemCount={cartItemCount} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
