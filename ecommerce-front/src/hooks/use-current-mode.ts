import { useTheme } from "@mui/material";
import { red } from "@mui/material/colors";

function useCurrentMode()
{
   const theme = useTheme();
   const currentMode = theme.palette.mode;
   const priceColor = currentMode === "light" ? red[500] : "primary";

   return { currentMode, priceColor };
}

export default useCurrentMode;
