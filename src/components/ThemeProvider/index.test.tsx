import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@components';

describe('ThemeProvider', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<ThemeProvider />);
  });

  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should append themes stylesheets at document head', () => {
    const links = document.querySelectorAll('link');
    expect(links.length).toBe(2);
  });
});
