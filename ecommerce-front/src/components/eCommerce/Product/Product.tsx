import { TProduct } from "@customTypes/product";
import
{
   Button, Card, CardActions, CardContent,
   CardMedia, CircularProgress, Typography
}
   from "@mui/material";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
// Styles
import styles from './styles.module.css';
import useCurrentMode from "@hooks/use-current-mode";

const { productTitle, disabledSpinner } = styles

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) =>
{
   const { priceColor } = useCurrentMode();

   const dispatch = useAppDispatch();
   const [isBtnDisabled, setIsBtnDisabled] = useState(false);

   const remainingQuantity = max - (quantity ?? 0);
   const quantityReachedToMax = remainingQuantity <= 0 ? true : false;

   const quantityReachedToMaxMsg = quantityReachedToMax ? "Reached your limit" : `Remaining today: ${remainingQuantity}`;

   const feedbackColor = quantityReachedToMax ? "error" : "inherit";

   // Effects
   useEffect(() =>
   {
      // If the button wasn't clicked stop useEffect
      if (!isBtnDisabled)
      {
         return;
      }

      const debounce = setTimeout(() =>
      {
         setIsBtnDisabled(false);
      }, 300)

      return () => clearTimeout(debounce);
   }, [isBtnDisabled])

   const addToCartHandler = () =>
   {
      dispatch(addToCart(id))
      setIsBtnDisabled(true);
   }

   return (
      <Card sx={{ maxWidth: { xs: "345px", md: "300px" } }}
      >
         <CardMedia
            component="img"
            alt={title}
            height="180"
            sx={{ display: " flex", objectPosition: "0 -8px" }}
            image={img}
         />
         <CardContent sx={{ pb: 0 }}>
            <Typography title={title} className={productTitle}
               variant="subtitle1" fontWeight="bold" component="h3"
            >
               {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" mb="18px">
               Amazing fashion shirt for summer
            </Typography>

            <Typography
               className="quantity-reached-max"
               fontSize="13px"
               display="block"
               component="span"
               color={feedbackColor}
               mb="5px"
            >
               {quantityReachedToMaxMsg}
            </Typography>

            <Typography
               fontSize={{ xs: "13px", sm: "16px" }}
               fontWeight="bold" component="span"
               color={priceColor}
            >
               {`${price.toFixed(2)} EGP`}
            </Typography>

         </CardContent>
         <CardActions
            sx={{
               display: "flex", justifyContent: "end",
               marginTop: "auto", pt: 0
            }}
         >
            <Button
               size="small"
               disabled={isBtnDisabled || quantityReachedToMax}
               onClick={addToCartHandler}
            >
               Add to cart
               {isBtnDisabled && <CircularProgress className={disabledSpinner} size={20} />}
            </Button>
         </CardActions>
      </Card >
   )
});

export default Product;