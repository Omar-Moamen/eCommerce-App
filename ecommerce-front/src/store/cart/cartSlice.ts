import { TProduct } from '@customTypes/product';
import { TError, TLoading } from '@customTypes/shared';
import { createSlice } from "@reduxjs/toolkit";
import { getProductsByItemsId } from './actions/getProductsByItemsId';


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
      },
      cartItemChangeQuantity: (state, {payload}) =>
      {
         state.items[payload.id] = payload.quantity;
      },
      cartItemRemove: (state, { payload }) =>
      {
         delete state.items[payload];
         state.productsFullInfo = state.productsFullInfo.filter(el => el.id !== payload);
      }
   },
   extraReducers: (builder) =>
   {
      builder
         .addCase(getProductsByItemsId.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(getProductsByItemsId.fulfilled, (state, { payload }) =>
         {
            state.loading = "succeeded";
            state.productsFullInfo = payload;
            state.error = null;
         })
         .addCase(getProductsByItemsId.rejected, (state, { payload }) =>
         {
            state.loading = "error";
            if (payload && typeof payload === "string")
            {
               state.error = payload;
            }
         })
   }
})

export const { addToCart, cartItemChangeQuantity, cartItemRemove } = cartSlice.actions;
export default cartSlice.reducer;