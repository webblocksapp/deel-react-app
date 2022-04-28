import { buildQueryString } from '@utils';

describe('buildQueryString', () => {
  it('Should generate the expected query string', () => {
    const queryString = buildQueryString({ name: 'john', country: 'france' });
    expect(queryString).toBe('name=john&country=france');
  });

  it('Should return an empty string if no object provided', () => {
    expect(buildQueryString()).toBe('');
  });
});
