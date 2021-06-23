import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { products: [], productsCount: 0 };

//Reducers
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.productsCount++;
      const newItem = action.payload;
      const existingItem = state.products.find(
        (product) => product.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    minusQuantity(state, action) {
      state.productsCount--;
      const existingItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.products = state.products.filter(
            (product) => product.id !== existingItem.id
          );
        } else {
          existingItem.quantity--;
          existingItem.total = existingItem.price * existingItem.quantity;
        }
      }
    },
    addProductsToCart(state, action) {
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
    },
  },
});

export default cartSlice;
