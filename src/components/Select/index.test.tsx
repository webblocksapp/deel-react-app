import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { Select } from '@components';

describe('Select', () => {
  let wrapper: RenderResult;
  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <Select
        label="Hello world"
        data-testid="test-select"
        options={[
          { value: 1, label: 'A-opt' },
          { value: 2, label: 'B-opt' },
          { value: 3, label: 'C-opt' },
        ]}
        onChange={onChange}
      />
    );
  });

  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should select any value', () => {
    const select: HTMLSelectElement = screen.getByTestId('test-select');
    fireEvent.change(select, { target: { value: 2 } });
    expect(select.value).toBe('2');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Should display options', () => {
    expect(screen.getByText('A-opt')).toBeDefined();
    expect(screen.getByText('B-opt')).toBeDefined();
    expect(screen.getByText('C-opt')).toBeDefined();
  });

  it('Should display the label', () => {
    expect(screen.getByText('Hello world')).toBeDefined();
  });
});
