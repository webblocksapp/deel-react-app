import React from 'react';
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import { ThemeSelector, ThemeContext } from '@components';

describe('ThemeSelector', () => {
  let wrapper: RenderResult;
  const setTheme = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <ThemeContext.Provider value={{ setTheme }}>
        <ThemeSelector />
      </ThemeContext.Provider>
    );
  });
  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render correctly', () => {
    fireEvent.change(document.querySelector('select'));
    expect(setTheme).toBeCalled();
  });
});
