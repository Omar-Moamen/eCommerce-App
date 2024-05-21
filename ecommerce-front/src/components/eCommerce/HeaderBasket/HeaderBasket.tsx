import { Box, Typography, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { deepOrange } from '@mui/material/colors';


import styles from './styles.module.css';

const { basket, basketQuantity } = styles;

export default function HeaderBasket()
{
   return (
      <Box className={basket} alignSelf={"flex-end"}>
         <IconButton sx={{ position: "relative" }}
            size="small"
            aria-label="shopping-cart-button"
         >
            <ShoppingCartOutlinedIcon fontSize='large' sx={{ display: "block" }} />
         </IconButton>
         <Typography className={basketQuantity}
            component="span"
            fontSize={"12px"}
            lineHeight={"18px"}
            color={"common.white"}
            bgcolor={deepOrange[600]}
         >
            0
         </Typography>
      </Box>
   )
}

