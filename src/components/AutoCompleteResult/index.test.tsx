import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AutoCompleteResult, AutoCompleteInputContext } from '@components';
import { ResultItem } from '@interfaces';

const resultsMock: ResultItem[] = [
  { primaryText: 'Colombia' },
  { primaryText: 'Argentina', secondaryText: 'America' },
  { primaryText: 'Mexico' },
];

describe('AutoCompleteResult', () => {
  it('Should render correctly', () => {
    const wrapper = render(<AutoCompleteResult />);
    expect(wrapper).toBeDefined();
  });

  it('Should display the expected results', () => {
    render(
      <AutoCompleteInputContext.Provider value={{ results: resultsMock } as any}>
        <AutoCompleteResult />
      </AutoCompleteInputContext.Provider>
    );

    expect(screen.getByText('Colombia')).toBeDefined();
    expect(screen.getByText('Argentina')).toBeDefined();
    expect(screen.getByText('America')).toBeDefined();
    expect(screen.getByText('Mexico')).toBeDefined();
  });

  it('Should fire the setMatch and setShow fns', () => {
    const setMatch = jest.fn();
    const setShow = jest.fn();

    render(
      <AutoCompleteInputContext.Provider value={{ setMatch, setShow, results: resultsMock } as any}>
        <AutoCompleteResult />
      </AutoCompleteInputContext.Provider>
    );

    fireEvent.click(screen.getByText('Colombia'));
    expect(setMatch).toHaveBeenCalledTimes(1);
    expect(setShow).toHaveBeenCalledTimes(1);
  });

  it('Should show "No results found." message', () => {
    render(
      <AutoCompleteInputContext.Provider value={{ results: [], match: 'xxx' } as any}>
        <AutoCompleteResult />
      </AutoCompleteInputContext.Provider>
    );

    expect(screen.getByText('No results found.')).toBeDefined();
  });

  it('Should show "Searching..." message', () => {
    render(
      <AutoCompleteInputContext.Provider value={{ results: [], match: 'xxx', loading: true } as any}>
        <AutoCompleteResult />
      </AutoCompleteInputContext.Provider>
    );

    expect(screen.getByText('Searching...')).toBeDefined();
  });
});
