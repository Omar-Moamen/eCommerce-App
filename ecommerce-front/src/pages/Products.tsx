import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsByCatPrefix from "@store/products/act/actGetProductsByCatPrefix";
import { productsCleanUp } from "@store/products/productsSlice";
import Grid from '@mui/material/Grid';
import { Product } from "@components/eCommerce";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Products = () =>
{
   const { prefix } = useParams();
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(state => state.products);

   const cartItems = useAppSelector(state => state.cart.items);
   // Get the quantity of each item in the cart by its id
   const productInfo = records.map(el => (
      {
         ...el,
         quantity: cartItems[el.id] || 0,
      }))

   useEffect(() =>
   {
      dispatch(actGetProductsByCatPrefix(prefix as string));

      return () =>
      {
         dispatch(productsCleanUp());
      };

   }, [dispatch, prefix]);

   return (
      <>
         <Heading><span>{prefix}</span>-products</Heading>
         <Loading status={loading} error={error}>
            <Grid container
               rowSpacing="25px"
               columnSpacing={{ xs: "15px", sm: "25px" }}
               pb={6}
            >
               <GridList
                  records={productInfo}
                  renderItem={(record) => <Product {...record} />}
               />
            </Grid>
         </Loading>
      </>
   )
};

export default Products;


