import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function Product()
{
   return (
      <Card sx={{ maxWidth: { xs: "345px", md: "300px" } }}
      >
         <CardMedia
            component="img"
            alt="product"
            height="180"
            sx={{ display: " flex", objectPosition: "0 -8px" }}
            image="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
         />
         <CardContent>
            <Typography variant="h6" component="h3">
               Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Amazing fashion shirt for summer
            </Typography>
         </CardContent>
         <CardActions sx={{ display: "flex", justifyContent: "end", pt: 0 }}>
            <Button size="small">Add to cart</Button>
         </CardActions>
      </Card>
   )
}
