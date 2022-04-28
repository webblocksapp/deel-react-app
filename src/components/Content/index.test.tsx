import React from 'react';
import { render } from '@testing-library/react';
import { Content } from '@components';

describe('Content', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Content />);
    expect(wrapper).toBeDefined();
  });
});
