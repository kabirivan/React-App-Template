import { createApi } from '@reduxjs/toolkit/query/react';
import axiosNormalQuery from 'src/lib/axiosNormalQuery';
import { encodeQuery } from 'src/utils/encodeQuery';

const API_POKEMON = '/api/v2/pokemon';

export interface IPokemonForm {
  limit: number;
  offset?: number;
}

export interface IPokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string,
    url: string
  }[];
}

export const pokemonApi = createApi({
  baseQuery: axiosNormalQuery({ baseUrl: API_POKEMON }),
  reducerPath: 'pokemonApi',
  tagTypes: ['Pokemon'],
  endpoints: (build) => ({
    getPokemonList: build.query<IPokemonResponse, IPokemonForm>({
      query: (form: IPokemonForm) => ({
        method: 'get',
        params: encodeQuery(form)
      }),
    }),
  }),
});

export const {
  useGetPokemonListQuery,
} = pokemonApi;
