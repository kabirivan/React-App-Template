import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography
} from '@mui/material';

const HomeHero: FC = (props) => {

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pt: 6
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          px: {
            md: '70px !important'
          }
        }}
      >
        <Typography
          color="primary"
          variant="overline"
        >
          Plantilla de React JS
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h3"
        >
          Hello World
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="body1"
          sx={{ py: 4 }}
        >
          La siguiente forma de organización se basada en módulos, esta organización es interesante para proyectos con una escala mayor.
          La idea principal es que cada módulo que se defina tenga todo el código relacionado con este y solo se importe código del modulo en sí. 
        </Typography>
        <Button
          color="primary"
          component={RouterLink}
          size="large"
          to="/overview"
          variant="contained"
        >
          Empezar
        </Button>
        <Box
          sx={{
            alignItems: {
              sm: 'center',
              xs: 'flex-start'
            },
            display: 'flex',
            flexDirection: {
              sm: 'row',
              xs: 'column'
            },
            py: 3,
            '& > div': {
              p: {
                sm: '0 10.5px',
                xs: '10.5px 0'
              }
            }
          }}
        >
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Válido para:
          </Typography>
          {['TypeScript'].map((item) => (
            <Box
              key={item}
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
