import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",
   async (prefix: string, thunkAPI) =>
   {
      const { rejectWithValue } = thunkAPI;
      try
      {
         const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`);
         return response.data;
      } catch (error)
      {
         if (axios.isAxiosError(error))
         {
            console.log(error)
            throw rejectWithValue(error.response?.data.message || error.message)
         }
         else
         {
            throw rejectWithValue("An unexpected error");
         }
      }
   })

export default actGetProductsByCatPrefix;