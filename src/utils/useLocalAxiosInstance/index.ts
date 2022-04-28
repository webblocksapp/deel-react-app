import axios from 'axios';

export const useLocalAxiosInstance = () => {
  return axios.create({ baseURL: process.env.API_ROOT });
};
