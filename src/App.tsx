import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/catalogSlice";
import { mockProducts } from "@/data/products";
import type { AppDispatch } from "@/store";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
const CatalogPage = lazy(() => import("@/pages/CatalogPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
import { useTranslation } from "react-i18next";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const { t, i18n } = useTranslation();

  return (
    <Router>
    <header style={{ padding: 16, borderBottom: "1px solid #ccc", marginBottom: 24 }}>
      <nav>
      <Link to="/" style={{ marginRight: 16 }}>{t("catalog")}</Link>
      <Link to="/cart">{t("cart")}</Link>
      </nav>
      <div style={{ marginTop: 8 }}>
          <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </div>
    </header>
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
