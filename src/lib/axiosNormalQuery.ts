import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosRequestConfig, AxiosError } from 'axios';
import axiosNormal from 'src/lib/axiosNormal';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url?: string;
      method: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url = '', method, body, headers, params }) => {
    try {
      const result = await axiosNormal({
        url: baseUrl + url,
        method,
        data: body,
        headers,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      console.log('axiosError', axiosError);
      console.log('axiosError', axiosError.response?.status);
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default axiosBaseQuery;
