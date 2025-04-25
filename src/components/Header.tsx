import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  cartItemCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const { t, i18n } = useTranslation();

  console.log("Header render"); 

  return (
    <header style={{ padding: 16, borderBottom: "1px solid #ccc", marginBottom: 24 }}>
      <nav>
        <Link to="/" style={{ marginRight: 16 }}>{t("catalog")}</Link>
        <Link to="/cart">{t("cart")} ({cartItemCount})</Link>
      </nav>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
