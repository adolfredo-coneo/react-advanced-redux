import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import layoutSlice from "./layout";

const store = configureStore({
  reducer: { layout: layoutSlice.reducer, cart: cartSlice.reducer },
});

export const layoutActions = layoutSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
