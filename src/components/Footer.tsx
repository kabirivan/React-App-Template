import type { FC } from 'react';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import Logo from './Logo';

const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      pb: 6,
      pt: {
        md: 6,
        xs: 6
      }
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={3}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4
            }
          }}
          xs={12}
        >
          <Logo />
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="caption"
          >
            © 2022 JRTEC.
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: '#f0f0f0f',
          my: 2
        }}
      />
      <Typography
        color="textSecondary"
        variant="caption"
      >
        Todos los derechos reservados.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
