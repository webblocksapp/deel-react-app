import { renderHook } from '@testing-library/react';
import { useLocalAxiosInstance } from '@utils';

describe('useLocalAxiosInstance', () => {
  it('Should return the right axios baseURL instance', () => {
    const { result } = renderHook(() => useLocalAxiosInstance());
    expect(result.current).toBeDefined();
  });
});
