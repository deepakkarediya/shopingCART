import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const productInCart = state.cart.find(
        (item) => item.productId === productId
      );

      if (productInCart) {
        productInCart.quantity += quantity;
      } else {
        state.cart.push({ productId, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.productId !== productId);
    },
    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productInCart = state.cart.find(
        (item) => item.productId === productId
      );

      if (productInCart) {
        productInCart.quantity = quantity;
      }
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} = productSlice.actions;

export default productSlice.reducer;
