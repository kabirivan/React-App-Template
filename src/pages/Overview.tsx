import { useState } from "react";
import type { FC, ChangeEvent, MouseEvent } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  TablePagination,
} from "@mui/material";
import logo from "src/logo.svg";
import "./Styles.css";
import { useGetPokemonListQuery } from "src/services/pokemonService";
import PokemonCard from "src/components/PokemonCard";
import Loader from "src/components/Loader";
import CounterView from "../components/counter/CounterView";

const Overview: FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const { data, isFetching } = useGetPokemonListQuery({ limit });
  const pokemons = data?.results ?? [];
  const fileteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value, 10));
  };
  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage);
  };
  return (
    <>
      <Helmet>
        <title>Overview | JRTEC</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          minHeight: "100%",
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box>
                <img src={logo} className="App-logo" alt="logo" />
              </Box>
              <Box>
                <Typography color="textSecondary" variant="h5">
                  React JS
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Typography color="textPrimary" variant="h4" sx={{ mt: 2 }}>
              Llamada a API POKEMON
            </Typography>
            <Box sx={{ my: 4 }}>
              <Loader isLoading={isFetching} hasData={pokemons}>
                <Grid container spacing={3}>
                  {fileteredPokemons.map((pokemon) => (
                    <Grid item key={pokemon.name} lg={2} md={3} xs={12}>
                      <PokemonCard pokemon={pokemon} />
                    </Grid>
                  ))}
                </Grid>
                <TablePagination
                  component="div"
                  count={fileteredPokemons.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 25]}
                />
              </Loader>
            </Box>
            <Divider />
            <CounterView />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
