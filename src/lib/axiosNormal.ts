import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';
import { baseURL } from 'src/constants';

const axiosNormal = axios.create();

axiosNormal.defaults.timeout = 1000 * 10;

axiosNormal.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };
    newConfig.baseURL = baseURL;
    if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
      return newConfig;
    }
    if (
      newConfig.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      return newConfig;
    }
    if (config.params) {
      newConfig.params = snakeCaseKeys(config.params);
    }
    if (config.data) {
      newConfig.data = snakeCaseKeys(config.data);
    }
    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosNormal.interceptors.response.use(
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

export default axiosNormal;
