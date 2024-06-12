import { TError, TLoading } from "@customTypes/shared"
import { CircularProgress, Typography } from "@mui/material"

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
         <CircularProgress color="info"
            sx={{
               position: "absolute",
               top: "calc(50% - 20px)",
               left: "calc(50% - 20px)",
            }}
         />
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
