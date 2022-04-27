import React from 'react';
import { render } from '@testing-library/react';
import { Toolbar } from '@components';

describe('Toolbar', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Toolbar />);
    expect(wrapper).toBeDefined();
  });
});
