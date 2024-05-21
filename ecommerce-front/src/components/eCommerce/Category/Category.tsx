import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Category()
{
   // const navigate = useNavigate();

   return (
      <Box >
         <CardActionArea sx={{ borderRadius: "50%" }} >
            <Card sx={{
               width: { xs: "150px", md: "180px" },
               height: { xs: "150px", md: "180px" },
               borderRadius: "50%", textAlign: "center"
            }}
            >
               <CardMedia
                  component="img"
                  alt="women-category"
                  height="100%"
                  image="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
               />
            </Card>
         </CardActionArea>
         <Typography textAlign="center" variant="h6" component="h3">
            Title
         </Typography>
      </Box>
   )

}
