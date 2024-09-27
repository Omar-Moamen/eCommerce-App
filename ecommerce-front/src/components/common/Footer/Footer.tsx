import { Box } from '@mui/material';
import styles from './styles.module.css';
import Typography from '@mui/material/Typography'
import { blueGrey, deepOrange } from '@mui/material/colors';

const { footerContainer } = styles;

export default function Footer()
{
   return (
      <Box className={footerContainer}
         bgcolor={blueGrey[900]}
         component="footer"
      >
         <Typography color="white" fontSize={{ xs: "13px", sm: "16px" }}>
            &copy; 2024
            <Typography
               fontSize="inherit"
               textTransform="uppercase"
               component="span"
               mx="5px"
               color={deepOrange[600]}
            >
               E-commerce
            </Typography>
            all rights reserved
         </Typography>
      </Box>
   )
}

