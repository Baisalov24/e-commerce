import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 24 }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 12 }}>
          <strong>{item.title}</strong> — ${item.price} × 
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            style={{ width: 50, marginLeft: 8, marginRight: 8 }}
          />
          = ${item.price * item.quantity}
          <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 8 }}>Delete</button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <hr />
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Empty Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
