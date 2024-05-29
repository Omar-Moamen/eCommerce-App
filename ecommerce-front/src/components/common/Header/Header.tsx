import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// MUI
import { Typography, AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { blueGrey, cyan } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
// Components & types
import DarkModeBtn from './DarkModeBtn/DarkModeBtn';
import DrawerAppBar from '../DrawerAppBar/DrawerAppBar';
import { TSetFunc } from '@customTypes/shared';
import { HeaderBasket } from '@components/eCommerce';
// Styles
import styles from './styles.module.css';

type TSetMode = { setMyMode: TSetFunc }

const navBtnOverrides = {
   color: "#F2F2F2",
   "&:hover": {
      color: cyan[400],
      backgroundColor: "transparent"
   }
};

const { badge } = styles;

export default function Header({ setMyMode }: TSetMode)
{
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleDrawerToggle = () =>
   {
      setMobileOpen((prevState) => !prevState);
   };

   return (
      <>
         <header id='mainHeader' style={{ padding: "30px 0 10px" }}>
            <Box
               display="flex"
               alignItems="center"
               justifyContent="space-between"
               mb="15px"
               height="50px"
            >
               <Typography fontWeight={"bold"} variant='h4' component={"h1"}>
                  Our<span className={badge}>Ecom</span>
               </Typography>

               <HeaderBasket />

            </Box>

            <AppBar
               component="nav"
               position='static'
               sx={{
                  mt: 1, height: "45px",
                  backgroundColor: blueGrey[900],
               }}
            >
               <Toolbar sx={{ '&.MuiToolbar-root': { minHeight: "100%" } }}>
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     edge="end"
                     onClick={handleDrawerToggle}
                     sx={{ display: { sm: 'none' }, ml: "auto" }}
                  >
                     <MenuIcon />
                  </IconButton>

                  <Box sx={{ display: { xs: 'none', sm: 'block', flexGrow: 1 } }}>
                     <Button sx={navBtnOverrides} component={NavLink} to="/">
                        Home
                     </Button>
                     <Button sx={navBtnOverrides} component={NavLink} to="categories">
                        Categories
                     </Button>
                     <Button sx={navBtnOverrides} component={NavLink} to="about-us">
                        About
                     </Button>
                  </Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                     <Button sx={navBtnOverrides} component={NavLink} to="login">
                        Login
                     </Button>

                     <Button sx={navBtnOverrides} component={NavLink} to="register">
                        Register
                     </Button>

                     <DarkModeBtn setMyMode={setMyMode} />

                  </Box>
               </Toolbar>
            </AppBar>
            <DrawerAppBar
               handleDrawerToggle={handleDrawerToggle}
               setMyMode={setMyMode}
               mobileOpen={mobileOpen}
            />
         </header>
      </>
   )
}

