import { Box, Typography, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { deepOrange } from '@mui/material/colors';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantitySelector } from '@store/cart/selectors';
// Styles
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const { basket, basketQuantity, pumpCartQuantity } = styles;

const HeaderBasket = () =>
{
   const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
   const [isAnimate, setIsAnimate] = useState(false);
   const quantityStyle = `${basketQuantity} ${isAnimate ? pumpCartQuantity : ""}`;

   useEffect(() =>
   {
      // When quantity == 0 will stop the effect
      if (!totalQuantity)
      {
         return;
      }
      // Else that
      setIsAnimate(true)

      const debounce = setTimeout(() =>
      {
         setIsAnimate(false);
      }, 300)

      return () => clearTimeout(debounce);
   }, [totalQuantity])

   return (
      <Box className={basket} alignSelf={"flex-end"}>
         <IconButton sx={{ position: "relative" }}
            size="small"
            aria-label="shopping-cart-button"
         >
            <ShoppingCartOutlinedIcon sx={{
               display: "block",
               fontSize: { xs: "30px", md: "36px" }
            }} />
         </IconButton>
         <Typography
            className={quantityStyle}
            component="span"
            fontSize={"12px"}
            lineHeight={"18px"}
            color={"common.white"}
            bgcolor={deepOrange[600]}
         >
            {totalQuantity}
         </Typography>
      </Box>
   )
}

export default HeaderBasket;
