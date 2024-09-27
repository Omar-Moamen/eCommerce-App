import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// MUI
import { Typography, AppBar, Toolbar, Box, Button, IconButton, Container } from '@mui/material';
import { blueGrey, cyan } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
// Components & types
import DarkModeBtn from './DarkModeBtn/DarkModeBtn';
import DrawerAppBar from '../DrawerAppBar/DrawerAppBar';
import { TSetFunc } from '@customTypes/shared';
import { HeaderBasket } from '@components/eCommerce';

type TSetMode = { setMyMode: TSetFunc }

const navBtnOverrides = {
   color: "#F2F2F2",
   "&:hover": {
      color: cyan[400],
      backgroundColor: "transparent"
   }
};

const containerStyles = {
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   mb: { xs: "8px", md: "15px" },
   px: "50px", height: "50px"
}

const toolbarStyles = {
   '&.MuiToolbar-root': { minHeight: "100%" },
   px: { xs: "15px", sm: "0 !important" }
}

function Header({ setMyMode }: TSetMode)
{
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleDrawerToggle = () =>
   {
      setMobileOpen((prevState) => !prevState);
   };

   return (
      <header id='mainHeader' style={{ paddingTop: "30px" }}>
         <Container
            className="mainPx"
            maxWidth="xl"
            sx={containerStyles}
         >
            <Typography
               fontSize={{ xs: "20px", sm: "26px", md: "34px" }}
               component={"h1"}
               textTransform="uppercase"
               fontWeight="bold"
               color={blueGrey[800]}
            >
               E-<span style={{ color: "#F4511E" }}>commerce</span>
            </Typography>

            <HeaderBasket />

         </Container>

         <AppBar
            component="nav"
            position='static'
            sx={{
               mt: "8px",
               px: { xs: "10px", sm: "50px" },
               height: "45px",
               backgroundColor: blueGrey[900],
            }}
         >
            <Toolbar sx={toolbarStyles}>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: 'none' }, ml: "auto" }}
               >
                  <MenuIcon />
               </IconButton>

               <Box sx={{ display: { xs: 'none', sm: 'flex', gap: "15px", height: "100%", flexGrow: 1 } }}>
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
   )
}

export default Header;
