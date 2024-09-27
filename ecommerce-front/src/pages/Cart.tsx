import Container from '@mui/material/Container'
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByItems } from "@store/cart/act/actGetProductsByItems";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Heading } from "@components/common"
import { Loading } from '@components/feedback';
import { CartItemsList, CartSubtotalPrice } from '@components/eCommerce';


function Cart()
{
   const { prefix } = useParams();
   const dispatch = useAppDispatch();
   const { items, productsFullInfo, loading, error } = useAppSelector(state => state.cart);

   const products = productsFullInfo.map(product => (
      {
         ...product,
         quantity: items[product.id],
      }
   ));

   useEffect(() =>
   {
      dispatch(actGetProductsByItems());
   }, [dispatch])

   return (
      <>
         <Container className='pageMinHeight' maxWidth="xl">
            <Heading><span>{prefix}</span>Cart</Heading>
            <Loading status={loading} error={error}>
               <CartItemsList products={products} />
               <CartSubtotalPrice />
            </Loading>
         </Container>
      </>
   )
}

export default Cart
