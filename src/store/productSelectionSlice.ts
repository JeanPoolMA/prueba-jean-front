// store/productSelectionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/models/ProductStock";

interface State {
  selectedProducts: Product[];
  totalQuantity: number;
}

const initialState: State = {
  selectedProducts: [],
  totalQuantity: 0,
};

const productSelectionSlice = createSlice({
  name: "productSelection",
  initialState,
  reducers: {
    setSelectedProducts(state, action: PayloadAction<Product[]>) {
      state.selectedProducts = action.payload;
      state.totalQuantity = action.payload.reduce(
        (sum, p) => sum + p.quantity,
        0
      );
    },
  },
});

export const { setSelectedProducts } = productSelectionSlice.actions;
export default productSelectionSlice.reducer;
