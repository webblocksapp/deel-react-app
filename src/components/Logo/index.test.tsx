import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '@components';

describe('Logo', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Logo />);
    expect(wrapper).toBeDefined();
  });
});
