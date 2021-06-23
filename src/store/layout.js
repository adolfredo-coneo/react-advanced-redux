import { createSlice } from "@reduxjs/toolkit";

const initialLayoutState = { cartVisible: true, notification: null };

const layoutSlice = createSlice({
  name: "Layout",
  initialState: initialLayoutState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default layoutSlice;
