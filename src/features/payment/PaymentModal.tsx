import React from "react";

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 8,
          minWidth: 300,
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2>Payment</h2>
        <p>This is a modal window for payment processing.</p>
        <button onClick={onClose} style={{ marginTop: 16 }}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;
