import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getProductsByCatPrefix from "@store/products/actions/getProductsByCatPrefix";
import { productsCleanUp } from "@store/products/productsSlice";
import Grid from '@mui/material/Grid';
import { Product } from "@components/eCommerce";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Container } from "@mui/material";

const Products = () =>
{
   const { prefix } = useParams();

   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(state => state.products);
   const { items } = useAppSelector(state => state.cart);
   // Get the quantity of each item in the cart by its id
   const productInfo = records.map(product => (
      {
         ...product,
         quantity: items[product.id] || 0,
      }))


   useEffect(() =>
   {
      dispatch(getProductsByCatPrefix(prefix as string));

      return () =>
      {
         dispatch(productsCleanUp());
      };

   }, [dispatch, prefix]);

   return (
      <Container className="pageMinHeight mainPx" maxWidth="xl">
         <Heading><span>{prefix}</span>-products</Heading>
         <Loading status={loading} error={error}>
            <Grid container
               rowSpacing="25px"
               columnSpacing={{ xs: "15px", sm: "15px" }}
            >
               <GridList
                  records={productInfo}
                  renderItem={(record) => <Product {...record} />}
               />
            </Grid>
         </Loading>
      </Container>
   )
};

export default Products;


