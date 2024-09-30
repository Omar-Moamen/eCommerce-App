import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./actions/getCategories";
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
         .addCase(getCategories.pending, (state) =>
         {
            state.loading = "pending";
            state.error = null;
         })
         .addCase(getCategories.fulfilled, (state, { payload }) => 
         {
            state.loading = "succeeded";
            state.records = payload;
         })
         .addCase(getCategories.rejected, (state, { payload }) =>
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