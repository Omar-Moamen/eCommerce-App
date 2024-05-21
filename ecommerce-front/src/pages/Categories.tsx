import { Category } from "@components/eCommerce"
import { Grid } from "@mui/material"

export default function Categories()
{
   return (
      <Grid container
         rowSpacing="25px"
         columnSpacing={{ xs: 0, sm: "25px" }}
         pb={6}
      >
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
         <Grid item xs={6} sm={4} md={3}
            display="flex" justifyContent="center"
         >
            <Category />
         </Grid>
      </Grid>
   )
}


