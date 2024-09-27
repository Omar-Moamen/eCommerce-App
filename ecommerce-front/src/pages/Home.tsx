import { Heading } from "@components/common";
import { Container } from "@mui/material";

const containerStyles = {
   "&.MuiContainer-root": { px: "35px" }
};

export default function Home()
{
   return (
      <Container className="pageMinHeight mainPx" maxWidth="xl" sx={containerStyles}>
         <Heading>Home</Heading>
      </Container>
   )
}


