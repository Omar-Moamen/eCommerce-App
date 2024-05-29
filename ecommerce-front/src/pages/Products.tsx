import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import Grid from '@mui/material/Grid'
import { Product } from "@components/eCommerce";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

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

   return (
      <Grid container
         rowSpacing="25px"
         columnSpacing={{ xs: "15px", sm: "25px" }}
         pb={6}
      >
         <Loading status={loading} error={error}>
            <GridList
               records={records}
               renderItem={(record) => <Product {...record} />}
            />
         </Loading>
      </Grid>
   )
}


