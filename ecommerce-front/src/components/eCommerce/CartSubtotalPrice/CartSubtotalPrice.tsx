import { Container, Typography } from "@mui/material";
// Styles
import styles from './styles.module.css';
import useCurrentMode from "@hooks/use-current-mode";
import { TProduct } from "@customTypes/product";

const { subtotalContainer } = styles;

function CartSubtotalPrice({ products }: { products: TProduct[] })
{
   const { priceColor } = useCurrentMode();
   const subTotal = products.reduce((accumulator, el) =>
   {
      const price = el.price;
      const quantity = el.quantity;

      if (quantity && typeof quantity === "number")
      {
         return accumulator + (price * quantity)
      }
      else
      {
         return accumulator;
      }
   }, 0)

   return (
      <Container className={subtotalContainer} maxWidth="lg">
         <Typography fontSize="17px" component="span">Subtotal:</Typography>
         <Typography fontSize="17px" component="span" color={priceColor}>{subTotal} EGP</Typography>
      </Container>
   )
}

export default CartSubtotalPrice
