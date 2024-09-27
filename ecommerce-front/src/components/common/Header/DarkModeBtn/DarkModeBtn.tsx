import { LightModeSharp, DarkModeOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { TSetFunc } from '@customTypes/shared';
import useCurrentMode from '@hooks/use-current-mode';

type TSetMode = { setMyMode: TSetFunc }

function DarkModeBtn({ setMyMode }: TSetMode)
{
   const { currentMode } = useCurrentMode();
   const themeToggleHandler = () =>
   {
      setMyMode(currentMode === "dark" ? "light" : "dark")
      localStorage.setItem("currentMode", currentMode === "dark" ? "light" : "dark");
   }
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
         onClick={themeToggleHandler}
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
