import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TError, TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";

interface ICategoriesState
{
   records: TCategory[],
   loading: TLoading,
   error: TError,
}

const initialState: ICategoriesState = {
   records: [],
   loading: "idle",
   error: null,
};

const categoriesSlice = createSlice({
   name: "categories",
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      builder
         .addCase(actGetCategories.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(actGetCategories.fulfilled, (state, { payload }) => 
         {
            state.loading = "succeeded";
            state.records = payload;
         })
         .addCase(actGetCategories.rejected, (state, { payload }) =>
         {
            state.loading = "error";
            if (payload && typeof payload === "string")
            {
               state.error = payload;
            }
         })
   }
})

export default categoriesSlice.reducer;