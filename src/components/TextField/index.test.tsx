import React from 'react';
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import { TextField } from '@components';

describe('TextField', () => {
  let wrapper: RenderResult;
  const onInput = jest.fn();

  beforeEach(() => {
    wrapper = render(<TextField data-testid="test-input" onInput={onInput} label="Hello world" />);
  });

  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should onInput be called', () => {
    fireEvent.input(screen.getByTestId('test-input'));
    expect(onInput).toHaveBeenCalledTimes(1);
  });

  it('Should display the label', () => {
    expect(screen.getByText('Hello world')).toBeDefined();
  });
});
