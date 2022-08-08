import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const options = {
  ignoreHeaders: true,
};

export const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:9001/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 2000,
  }),
  options,
);
