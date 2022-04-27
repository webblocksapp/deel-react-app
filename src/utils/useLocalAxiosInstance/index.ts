import axios from 'axios';

export const useLocalAxiosInstance = () => {
  return axios.create({ baseURL: 'http://localhost:4200' });
};
