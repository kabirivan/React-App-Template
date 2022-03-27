import { useState } from 'react'
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import logo from 'src/logo.svg';
import { useSelector, useDispatch } from 'src/redux/store';
import { incrementAction, decrementAction, incrementByAmountAction } from 'src/redux/slices/counter';
import './Styles.css';
import { useGetPokemonListQuery } from 'src/services/pokemonService';
import PokemonCard from 'src/components/PokemonCard';

const Overview: FC = () => {
  const count = useSelector((state) => state.counter.value);
  const [limit, setLimit] = useState<number>(500);
  const [offset, setOffset] = useState<number>(2);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetPokemonListQuery({ limit });
  // const { results = [] } = data;
  // const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  console.log('data', data)
  console.log('isLoading', isLoading)
  console.log('error', error)
  return (
    <>
      <Helmet>
        <title>Overview | JRTEC</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 3
              }}
            >
              <Box>
                <img src={logo} className="App-logo" alt="logo" />
              </Box>
              <Box>
                <Typography
                  color="textSecondary"
                  variant="h5"
                >
                  React JS
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Llamada a API POKEMON
            </Typography>
            <Box sx={{ my: 6 }}>
              <Grid
                container
                spacing={6}
              >
                {[{ id: 1, name: 'pikachu' }].map((post) => (
                  <Grid
                    item
                    key={post.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <PokemonCard />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                {`Estados Redux: ${count}`}
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', direction: 'row', justifyContent: 'flex-start', spacing: 2 }}>
                <Button variant="contained" onClick={() => dispatch(incrementAction())}>Aumentar</Button>
                <Box sx={{ ml: 2 }} />
                <Button variant="contained" onClick={() => dispatch(decrementAction())}>Disminuir</Button>
                <Box sx={{ ml: 2 }} />
                <Button variant="contained" onClick={() => dispatch(incrementByAmountAction(2))}>Sumar 2</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
