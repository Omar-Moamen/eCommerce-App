import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];

const getCategories = createAsyncThunk("categories/getCategories",
   async (_, thunkAPI) =>
   {
      const { rejectWithValue } = thunkAPI;
      try
      {
         const response = await axios.get<TResponse>("/categories");
         return response.data;
      } catch (error)
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

export default getCategories;