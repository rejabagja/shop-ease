import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
})

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data.map(product => {
      product.stock = 20;
      return product;
    })
  }
);

export default productSlice.reducer;