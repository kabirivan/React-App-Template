import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from 'src/components/HomeHero';
import {
  Box,
  Container,
} from '@mui/material';

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>JRTEC S.A.S.</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <div>
              <HomeHero />
            </div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
