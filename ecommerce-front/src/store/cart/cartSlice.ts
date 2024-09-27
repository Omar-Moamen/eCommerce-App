import { TProduct } from '@customTypes/product';
import { TError, TLoading } from '@customTypes/shared';
import { createSlice } from "@reduxjs/toolkit";
import { actGetProductsByItems } from './act/actGetProductsByItems';


interface ICartState
{
   items: { [key: string]: number },
   productsFullInfo: TProduct[],
   loading: TLoading,
   error: TError,
}

const initialState: ICartState = {
   items: {},
   productsFullInfo: [],
   loading: "idle",
   error: null,
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, { payload }) =>
      {
         const id = payload;
         // If the id already exists in the cart, We will increase its quantity 
         // else => the id doesn't exist, We will insert it
         state.items[id] ? state.items[id]++ : state.items[id] = 1
      }
   },
   extraReducers: (builder) =>
   {
      builder
         .addCase(actGetProductsByItems.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(actGetProductsByItems.fulfilled, (state, { payload }) =>
         {
            state.loading = "succeeded";
            state.productsFullInfo = payload;
            state.error = null;
         })
         .addCase(actGetProductsByItems.rejected, (state, { payload }) =>
         {
            state.loading = "error";
            if (payload && typeof payload === "string")
            {
               state.error = null;
            }
         })
   }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer