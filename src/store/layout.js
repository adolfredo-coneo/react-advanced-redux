import { createSlice } from "@reduxjs/toolkit";

const initialLayoutState = { cartVisible: true };

const layoutSlice = createSlice({
  name: "Layout",
  initialState: initialLayoutState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export default layoutSlice