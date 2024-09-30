import Container from '@mui/material/Container'
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getProductsByItemsId } from "@store/cart/actions/getProductsByItemsId";
import { useEffect } from "react";
import { Heading } from "@components/common"
import { Loading } from '@components/feedback';
import { CartItemsList, CartSubtotalPrice } from '@components/eCommerce';


function Cart()
{
   const dispatch = useAppDispatch();
   const { items, productsFullInfo, loading, error } = useAppSelector(state => state.cart);

   // Adding quantity to display it in the cart page instead of passing productFullInfo directly without quantity 
   const products = productsFullInfo.map(product => (
      {
         ...product,
         quantity: items[product.id],
      }
   ));

   //Effects
   useEffect(() =>
   {
      dispatch(getProductsByItemsId());
   }, [dispatch]);

   return (
      <>
         <Container className='pageMinHeight' maxWidth="xl">
            <Heading>Cart</Heading>
            <Loading status={loading} error={error}>

               <CartItemsList products={products} />
               <CartSubtotalPrice products={products} />

            </Loading>
         </Container>
      </>
   )
}

export default Cart
