import { configureStore } from "@reduxjs/toolkit";
import productSelectionReducer from "./productSelectionSlice";

export const store = configureStore({
  reducer: {
    productSelection: productSelectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
