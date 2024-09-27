import
{
   Box, FormControl, InputLabel,
   MenuItem, Select, Typography,
   SelectChangeEvent, Button,
   Divider
} from "@mui/material"
// Styles
import styles from './styles.module.css';
import { TProduct } from "@customTypes/product";
import useCurrentMode from "@hooks/use-current-mode";

const {
   cartItem, product, productImg,
   productInfo, cartItemSelection, productDesc
} = styles;

type TCartItemProps = TProduct;

function CartItem({ title, img, price, max, quantity }: TCartItemProps)
{
   const { priceColor } = useCurrentMode();

   const renderOptions = Array(max).fill(0).map((_, idx) =>
   {
      const quantity = ++idx;
      return <MenuItem key={quantity} value={quantity}>{quantity}</MenuItem>
   })

   const handleChange = (event: SelectChangeEvent) =>
   {
      setQuantity(event.target.value);
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
               <Button variant="text" color="error" size="small">
                  Remove
               </Button>
            </Box>
         </Box>
         <Divider sx={{ my: "15px" }} />
      </>
   )
}

export default CartItem;
