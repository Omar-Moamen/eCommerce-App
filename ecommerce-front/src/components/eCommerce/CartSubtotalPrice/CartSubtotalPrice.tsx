import { Container, Typography } from "@mui/material";
// Styles
import styles from './styles.module.css';
import useCurrentMode from "@hooks/use-current-mode";

const { subtotalContainer } = styles;

function CartSubtotalPrice()
{
   const { priceColor } = useCurrentMode();

   return (
      <Container className={subtotalContainer} maxWidth="lg">
         <Typography fontSize="17px" component="span">Subtotal:</Typography>
         <Typography fontSize="17px" component="span" color={priceColor}>500 EGP</Typography>
      </Container>
   )
}

export default CartSubtotalPrice
