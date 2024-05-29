import { LightModeSharp, DarkModeOutlined } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import { TSetFunc } from '@customTypes/shared';

type TSetMode = { setMyMode: TSetFunc }

function DarkModeBtn({ setMyMode }: TSetMode)
{
   const theme = useTheme();
   const currentMode = theme.palette.mode;

   return (
      <IconButton edge="end" aria-label="lightMode-on"
         sx={{
            margin: { xs: "auto 0px", sm: "0 0 0 10px" },
            "&:hover": {
               backgroundColor: currentMode === "light" ?
                  "#aaaaaa1c" : "warning",
            }
         }}
         color={currentMode === "dark" ? 'warning' : "inherit"}
         onClick={() =>
         {
            localStorage.setItem("currentMode", currentMode === "dark" ? "light" : "dark");

            setMyMode(currentMode === "dark" ? "light" : "dark")
         }}
      >
         {
            currentMode === "dark" ?
               < LightModeSharp /> :
               <DarkModeOutlined />
         }
      </IconButton>
   )
}

export default DarkModeBtn
