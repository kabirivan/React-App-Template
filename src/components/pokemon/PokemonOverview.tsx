import {
  Typography,
  Box,
  Grid,
  TablePagination,
  TextField,
} from "@mui/material";
import { useState, ChangeEvent, MouseEvent } from "react";
import Loader from "../Loader";
import PokemonCard from "../PokemonCard";
import { useGetPokemonListQuery } from "src/services/pokemonService";

export const PokemonOverview = () => {
  const [limit, setLimit] = useState<number>(25);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const { data, isFetching } = useGetPokemonListQuery({
    limit: 151,
    // offset: page,
  });
  console.log(limit, page);
  const pokemons = data?.results ?? [];
  const fileteredPokemons = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(page * limit, page * limit + limit);

  // TODO: crear  pagination
  console.log({ pokemons });

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
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{ mt: 2 }}
        align="center"
      >
        Llamada a API POKEMON
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <TextField
          label="Search pokemon"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
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
            count={pokemons.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Loader>
      </Box>
    </>
  );
};
