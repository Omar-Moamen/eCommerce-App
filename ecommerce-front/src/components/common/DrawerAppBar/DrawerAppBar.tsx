import
{
   Box, Divider, List, ListItem,
   ListItemButton, ListItemText, Drawer,
} from '@mui/material';
import DarkModeBtn from '../Header/DarkModeBtn/DarkModeBtn';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function DrawerAppBar({ handleDrawerToggle, setMyMode, mobileOpen })
{

   return (
      <nav id='drawerAppBar'>
         <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
               keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
               display: { xs: 'block', sm: 'none' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
         >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
               <List sx={{ textTransform: "capitalize" }}>
                  <ListItem sx={{ justifyContent: 'center', pt: 0 }}>
                     <DarkModeBtn setMyMode={setMyMode} />
                  </ListItem>

                  <Divider />

                  <ListItem sx={{ mt: "10px" }} disablePadding>
                     <ListItemButton sx={{ textAlign: 'center' }}
                        component={NavLink} to="/"
                     >
                        <ListItemText primary="home" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton sx={{ textAlign: 'center' }}
                        component={NavLink} to="categories"
                     >
                        <ListItemText primary="categories" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton sx={{ textAlign: 'center' }}
                        component={NavLink} to="about-us"
                     >
                        <ListItemText primary="about" />
                     </ListItemButton>
                  </ListItem>

                  <Divider sx={{ mt: "15px" }} />

                  <ListItem sx={{ mt: "10px" }} disablePadding>
                     <ListItemButton sx={{ textAlign: 'center' }}
                        component={NavLink} to="register"
                     >
                        <ListItemText primary="register" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton sx={{ textAlign: 'center' }}
                        component={NavLink} to="login"
                     >
                        <ListItemText primary="login" />
                     </ListItemButton>
                  </ListItem>

               </List>
            </Box>
         </Drawer>
      </nav>
   )
}
