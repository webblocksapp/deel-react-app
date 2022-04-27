import { CommonObject } from '@interfaces';

export const buildQueryString = (filters: CommonObject = {}) => {
  return Object.keys(filters)
    .map((k) => k + '=' + filters[k])
    .join('&');
};
