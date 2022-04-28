import React from 'react';
import { useCountriesApi } from '@apis';
import { renderHook } from '@testing-library/react';
import { useLocalAxiosInstance } from '@utils';
import axios from 'axios';

const countries = [
  { id: 1, name: 'Colombia', continent: 'America' },
  { id: 2, name: 'Argentina', continent: 'America' },
  { id: 3, name: 'China', continent: 'Asia' },
];

jest.mock('axios');
axios.get = jest.fn().mockResolvedValue({ data: countries });
axios.create = jest.fn(() => axios);

describe('useCountriesApi', () => {
  beforeEach(() => {
    jest.spyOn({ useLocalAxiosInstance }, 'useLocalAxiosInstance').mockReturnValue(axios);
  });

  it('Should return the expected list response', async () => {
    const { result } = renderHook(() => useCountriesApi());
    expect(result.current.list).toBeDefined();
    expect(await result.current.list()).toBe(countries);
  });
});
