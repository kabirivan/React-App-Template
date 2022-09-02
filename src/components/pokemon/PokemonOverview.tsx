import { Typography, Box, Grid, TablePagination } from "@mui/material";
import { useState, ChangeEvent, MouseEvent } from "react";
import Loader from "../Loader";
import PokemonCard from "../PokemonCard";
import { useGetPokemonListQuery } from "src/services/pokemonService";

export const PokemonOverview = () => {
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
    </>
  );
};
