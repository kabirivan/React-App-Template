// https://codebrahma.com/intercepting-the-case-battle-between-snakes-and-camels-in-front-end-javascript/
import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';

const responseCamelizerAxios = axios.create();

responseCamelizerAxios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return {
      ...response,
      data: camelCaseKeys(response.data, { deep: true }),
    };
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default responseCamelizerAxios;
