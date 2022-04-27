import { CommonObject, Country } from '@interfaces';
import { buildQueryString, useLocalAxiosInstance } from '@utils';

export const useCountriesApi = () => {
  const axios = useLocalAxiosInstance();

  const list = async (filters?: CommonObject) => {
    const { data } = await axios.get<Country[]>(`/countries?${buildQueryString(filters)}`);
    return data;
  };

  return { list };
};
