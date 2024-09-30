import { TProduct } from "@customTypes/product";
import { TLoading, TError } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import getProductsByCatPrefix from "./actions/getProductsByCatPrefix";

interface IProductsState
{
   records: TProduct[],
   loading: TLoading,
   error: TError,
}

const initialState: IProductsState = {
   records: [],
   loading: "idle",
   error: null,
}

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      productsCleanUp: (state) =>
      {
         state.records = [];
      }
   },
   extraReducers: (builder) =>
   {
      builder
         .addCase(getProductsByCatPrefix.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(getProductsByCatPrefix.fulfilled, (state, { payload }) =>
         {
            state.loading = "succeeded";
            state.error = null;
            state.records = payload;
         })
         .addCase(getProductsByCatPrefix.rejected, (state, { payload }) =>
         {
            state.loading = "error";
            if (payload && typeof payload === "string")
            {
               state.error = payload;
            }
         })
   }
})


export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;