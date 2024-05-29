import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import Grid from '@mui/material/Grid'
import { Product } from "@components/eCommerce";
import { useParams } from "react-router-dom";

export default function Products()
{
   const { prefix } = useParams();
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(state => state.products);

   useEffect(() =>
   {
      dispatch(actGetProductsByCatPrefix(prefix as string));

      return () =>
      {
         dispatch(productsCleanUp());
      };

   }, [dispatch, prefix]);

   const productsList = records.length > 0 ?
      records.map(record => (
         <Grid item xs={6} sm={4} md={3} key={record.id}
            display="flex" justifyContent="center"
         >
            <Product {...record} />
         </Grid>
      )) : "There are no products";

   return (
      <Grid container
         rowSpacing="25px"
         columnSpacing={{ xs: "15px", sm: "25px" }}
         pb={6}
      >
         {productsList}
      </Grid>
   )
}


