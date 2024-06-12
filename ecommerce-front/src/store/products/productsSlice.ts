import { TProduct } from "@customTypes/product";
import { TLoading, TError } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";

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
         .addCase(actGetProductsByCatPrefix.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(actGetProductsByCatPrefix.fulfilled, (state, { payload }) =>
         {
            state.loading = "succeeded";
            state.error = null;
            state.records = payload;
         })
         .addCase(actGetProductsByCatPrefix.rejected, (state, { payload }) =>
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