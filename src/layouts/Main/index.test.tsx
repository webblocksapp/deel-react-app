import React from 'react';
import { render } from '@testing-library/react';
import { Main } from '@layouts';

describe('Main', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Main />);
    expect(wrapper).toBeDefined();
  });
});
