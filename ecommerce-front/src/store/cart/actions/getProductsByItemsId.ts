import { TProduct } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import axios from 'axios';

type TResponse = TProduct[];

export const getProductsByItemsId = createAsyncThunk("cart/getProductsByItemsId",
   async (_, thunkAPI) =>
   {
      const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
      const { cart } = getState() as RootState;
      const itemsIds = Object.keys(cart.items);
      const concatenatedItemsIds = itemsIds.map(id => (`id=${id}`)).join('&');

      // If there are no items in the cart, the request won't fire to get products by items ids
      if (!itemsIds.length)
      {
         return fulfillWithValue([]);
      }

      try
      {
         const response = await axios.get<TResponse>(`/products?${concatenatedItemsIds}`);
         return response.data;
      }
      catch (error)
      {
         if (axios.isAxiosError(error))
         {
            throw rejectWithValue(error.response?.data.message || error.message)
         }
         else
         {
            throw rejectWithValue("An unexpected error");
         }
      }
   })