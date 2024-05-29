import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from '@store/categories/categoriesSlice';

import { Category } from "@components/eCommerce"
import { Grid } from "@mui/material"

export default function Categories()
{
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(state => state.categories);

   useEffect(() =>
   {
      if (!records.length)
      {
         dispatch(actGetCategories())
      }
   }, [dispatch, records]);

   const categoriesList = records.length > 0 ? records.map(record => (
      <Grid item xs={6} sm={4} md={3} key={record.id}
         display="flex" justifyContent="center"
      >
         <Category {...record} />
      </Grid>
   )) : "There are no categories"

   return (
      <Grid container
         rowSpacing="25px"
         columnSpacing={{ xs: 0, sm: "25px" }}
         pb={6}
      >
         {categoriesList}
      </Grid>
   )
}


