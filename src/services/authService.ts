import { createApi } from '@reduxjs/toolkit/query/react';
import axiosNormalQuery from 'src/lib/axiosNormalQuery';
import { ILoginForm } from 'src/types/auth';

const API_AUTH = '/api/v1/';

export interface ILoginResponse {
    message: string;
    status: string;
    meta: any;
    data: {
      accessToken: string;
      tokenType: string;
      refreshToken: string;
      user: any;
    }
  }
  

export const loginApi = createApi({
  baseQuery: axiosNormalQuery({ baseUrl: API_AUTH }),
  reducerPath: 'loginApi',
  tagTypes: ['Login'],
  endpoints: (build) => ({
    loginWithEmailAndPassword: build.mutation<ILoginResponse, ILoginForm>({
      query: (form) => ({
        url: 'login/dashboard',
        method: 'post',
        body: form,
      }),
    }),
  }),
});



export const {
    useLoginWithEmailAndPasswordMutation
} = loginApi