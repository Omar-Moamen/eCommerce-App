import { Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error()
{
   const error = useRouteError();
   let errorStatus: number;
   let errorStatusText: string;

   // Check if the error was thrown by react-router-dom new Response (loader)
   if (isRouteErrorResponse(error))
   {
      errorStatus = error.status;
      errorStatusText = error.statusText;
   }
   else
   {
      errorStatus = 404;
      errorStatusText = "Page Not Found!";
   }

   return (
      <Container sx={{ textAlign: "center", paddingTop: "40px" }} maxWidth="md">
         <Typography component={"h1"} fontSize={"140px"}
            mb="-15px" pt="15%"
         >
            {errorStatus}
         </Typography>
         <Typography fontSize="25px" color="error">{errorStatusText}</Typography>
         <Typography component={Link} display={"block"}
            mt={"15px"} color={blue[700]}
            to="/" replace={true}
         >
            How about going back to safety!
         </Typography>
      </Container >
   )
}
