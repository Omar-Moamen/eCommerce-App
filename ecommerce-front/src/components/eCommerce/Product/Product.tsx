import { TProduct } from "@customTypes/product";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export default function Product({ id, title, cat_prefix, img, price }: TProduct)
{
   const theme = useTheme();
   const currentMode = theme.palette.mode;

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
            <Typography variant="subtitle1" fontWeight="bold" component="h3">
               {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" mb="18px">
               Amazing fashion shirt for summer
            </Typography>

            <Typography fontSize="inherit" fontWeight="bold" component="span"
               color={currentMode === "light" ? red[500] : "primary"}
            >
               {`${price} EGP`}
            </Typography>

         </CardContent>
         <CardActions sx={{ display: "flex", justifyContent: "end", pt: 0 }}>
            <Button size="small">Add to cart</Button>
         </CardActions>
      </Card>
   )
}
