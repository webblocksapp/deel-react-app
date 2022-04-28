import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '@components';

describe('Header', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeDefined();
  });
});
