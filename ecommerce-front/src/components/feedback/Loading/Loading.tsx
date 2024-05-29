import { TError, TLoading } from "@customTypes/shared"
import { Typography } from "@mui/material"

interface LoadingProps
{
   status: TLoading,
   error: TError,
   children: React.ReactNode,
}

export default function Loading({ status, error, children }: LoadingProps)
{
   if (status === "pending")
   {
      return (
         <Typography fontSize="20px" pt="50px" mx="auto"
         >
            loading...
         </Typography>
      )
   }
   if (status === "error")
   {
      return (
         <Typography fontSize="20px" pt="50px" mx="auto" color="error.main"
         >
            {error}
         </Typography>
      )
   }

   return (
      <>
         {children}
      </>
   )
}
