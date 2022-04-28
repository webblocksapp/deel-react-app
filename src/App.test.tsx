import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('Should render correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeDefined();
  });
});
