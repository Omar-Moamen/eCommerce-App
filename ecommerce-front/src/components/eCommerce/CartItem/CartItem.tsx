import
{
   Box, FormControl, InputLabel,
   MenuItem, Select, Typography,
   SelectChangeEvent, Button,
   Divider
} from "@mui/material";
import { TProduct } from "@customTypes/product";
import useCurrentMode from "@hooks/use-current-mode";
import { cartItemChangeQuantity, cartItemRemove } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo } from "react";
// Styles
import styles from './styles.module.css';


const {
   cartItem, product, productImg,
   productInfo, cartItemSelection, productDesc
} = styles;

type TCartItemProps = TProduct;

const CartItem = memo(({ id, title, img, price, max, quantity }: TCartItemProps) =>
{
   const dispatch = useAppDispatch();

   const { priceColor } = useCurrentMode();

   // Array(max) without .fill(any) won't work because it'll be [empty x number] array
   const renderOptions = Array(max).fill(0).map((_, idx) =>
   {
      const quantities = ++idx;
      return <MenuItem key={`${quantities} ${idx}`} value={quantities}>{quantities}</MenuItem>
   })

   // Handlers
   const changeQuantityHandler = (id: number, quantity: number) =>
   {
      dispatch(cartItemChangeQuantity({ id, quantity }))
   }

   const handleChange = (event: SelectChangeEvent) =>
   {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
   };

   return (
      <>
         <Box className={cartItem} height="180px">
            <div className={product}>
               <div className={productImg}>
                  <img src={img} alt={title} width="100%" height="100%" />
               </div>
            </div>
            <div className={productInfo}>
               <Typography variant="h6" component="h3">{title}</Typography>
               <Typography fontWeight="bold"
                  color={priceColor}
                  fontSize={{ xs: "13px", sm: "16px" }}
               >
                  {price.toFixed(2)} EGP
               </Typography>
               <Typography className={productDesc} color="gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis adipisci </Typography>
            </div>
            <Box className={cartItemSelection}>
               <FormControl size="small" sx={{ minWidth: { xs: "75px", md: "110px" } }}>
                  <InputLabel
                     sx={{ fontSize: "14px" }}
                     id="quantitySelectionLabel">Quantity
                  </InputLabel>
                  <Select
                     labelId="quantitySelectionLabel"
                     id="quantitySelection"
                     value={`${quantity}`}
                     label="Quantity"
                     onChange={handleChange}
                  >

                     {renderOptions}

                  </Select>
               </FormControl>
               <Button variant="text" color="error" size="small" onClick={() => dispatch(cartItemRemove(id))}>
                  Remove
               </Button>
            </Box>
         </Box>
         <Divider sx={{ my: "15px" }} />
      </>
   )
}
)
export default CartItem;
