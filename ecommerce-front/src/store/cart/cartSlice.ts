import { TProduct } from '@customTypes/product';
import { createSlice } from "@reduxjs/toolkit";


interface ICartState
{
   items: { [key: number]: number },
   productFullInfo: TProduct[],

}

const initialState: ICartState = {
   items: {},
   productFullInfo: [],
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
   }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer