import { TProduct } from "@customTypes/product";
import
{
   Button, Card, CardActions, CardContent,
   CardMedia, CircularProgress, Typography, useTheme
}
   from "@mui/material";
import { red } from "@mui/material/colors";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
// Styles
import styles from './styles.module.css';

const { productTitle, disabledSpinner } = styles

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) =>
{
   // MUI
   const theme = useTheme();
   const currentMode = theme.palette.mode;

   const dispatch = useAppDispatch();
   const [isBtnDisabled, setIsBtnDisabled] = useState(false);

   const currentRemainingQuantity = max - (quantity ?? 0);
   const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

   const quantityReachedToMaxMsg = quantityReachedToMax ?
      "Reached your limit" : `Remaining today: ${currentRemainingQuantity}`;

   const feedbackColor = quantityReachedToMax ? "error" : "initial";

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
               component="span" color={feedbackColor}>
               {quantityReachedToMaxMsg}
            </Typography>

            <Typography fontSize={{ xs: "13px", sm: "16px" }} fontWeight="bold" component="span"
               color={currentMode === "light" ? red[500] : "primary"}
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