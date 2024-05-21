import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

function MainLayout()
{
   const [myMode, setMyMode] = useState(localStorage.currentMode || "light");

   const darkTheme = useMemo(() => createTheme({
      palette: {
         mode: myMode,
      },
   }), [myMode])


   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <Container maxWidth="lg" sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
         }}
         >
            <Header setMyMode={setMyMode} />
            <Box mt="30px">
               <Outlet />
            </Box>
            <Footer />
         </Container>
      </ThemeProvider>
   )
}

export default MainLayout
