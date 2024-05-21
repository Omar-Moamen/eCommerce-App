import { Box } from '@mui/material';
import styles from './styles.module.css';
import Typography from '@mui/material/Typography'

const { footerContainer } = styles;

export default function Footer()
{
   return (
      <Box className={footerContainer} component="footer" borderTop="1px solid" >
         <Typography>
            &copy; 2024<Typography component="span" color="primary.dark">
               Our-Ecommerce
            </Typography>
            all rights reserved
         </Typography>
      </Box>
   )
}

