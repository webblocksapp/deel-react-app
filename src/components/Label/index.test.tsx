import React from 'react';
import { render } from '@testing-library/react';
import { Label } from '@components';

describe('Label', () => {
  it('Should render correctly', () => {
    const wrapper = render(<Label />);
    expect(wrapper).toBeDefined();
  });
});
