import { Typography } from "@mui/material";

function Heading({ children }: { children: React.ReactNode })
{
   return (
      <Typography
         fontSize="26px"
         fontWeight="bold"
         textTransform="capitalize"
         component="h2"
         m="0 0 15px 10px"
      >
         {children}
      </Typography>
   )
}

export default Heading;
