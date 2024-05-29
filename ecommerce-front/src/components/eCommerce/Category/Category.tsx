import { TCategory } from "@customTypes/category";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";

export default function Category({ title, prefix, img }: TCategory)
{
   const navigate = useNavigate();

   return (
      <Box >
         <CardActionArea sx={{ borderRadius: "50%" }}
            onClick={() => navigate(`/categories/products/${prefix}`)}
         >
            <Card sx={{
               width: { xs: "150px", md: "180px" },
               height: { xs: "150px", md: "180px" },
               borderRadius: "50%", textAlign: "center"
            }}
            >
               <CardMedia
                  component="img"
                  alt={title}
                  height="100%"
                  image={img}
               />
            </Card>
         </CardActionArea>
         <Typography textAlign="center" variant="h6" component="h3">
            {title}
         </Typography>
      </Box>
   )

}
