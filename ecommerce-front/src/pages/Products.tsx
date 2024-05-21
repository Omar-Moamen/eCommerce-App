import { Product } from "@components/eCommerce";
import Grid from '@mui/material/Grid'

export default function Products()
{
   return (
      <Grid container
         rowSpacing="25px"
         columnSpacing={{ xs: "15px", sm: "25px" }}
         pb={6}
      >
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Product />
         </Grid>
      </Grid>
   )
}


