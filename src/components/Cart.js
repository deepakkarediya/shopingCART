import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../features/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  // const handleAddToCart = (productId) => {
  //   dispatch(addToCart({ productId, quantity: 1 }));
  // };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateCartItemQuantity({ productId, quantity }));
  };

  return (
    <div className="container ">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            {item.quantity} x Product {item.productId}{" "}
            <button
              className="btn btn-primary"
              onClick={() =>
                handleUpdateQuantity(item.productId, item.quantity + 1)
              }
            >
              +
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={() =>
                handleUpdateQuantity(item.productId, item.quantity - 1)
              }
            >
              -
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={() => handleRemoveFromCart(item.productId)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
