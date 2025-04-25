import React, { useState, lazy, Suspense } from "react";
import Cart from "@/features/cart/Cart";

const PaymentModal = lazy(() => import("@/features/payment/PaymentModal"));

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h1>Cart</h1>
      <Cart />
      <button onClick={() => setShowModal(true)} style={{ marginTop: 24 }}>
      Proceed to payment
      </button>

      {showModal && (
        <Suspense fallback={<div>Loading payment window...</div>}>
          <PaymentModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default CartPage;
