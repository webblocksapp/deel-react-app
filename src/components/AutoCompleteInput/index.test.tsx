import React from 'react';
import { render, screen, fireEvent, RenderResult, waitFor } from '@testing-library/react';
import { AutoCompleteInput } from '@components';
import { Country } from '@interfaces';

const resultsMock: Country[] = [
  { name: 'Colombia', continent: 'America' },
  { name: 'Argentina', continent: 'America' },
  { name: 'Mexico', continent: 'America' },
];

const mapMock = { primaryText: 'name', secondaryText: 'continent' };
const filterKeyMock = 'name';
const debounceMock = 200;

const service = jest.fn(async () => resultsMock);

describe('AutoCompleteInput', () => {
  let wrapper: RenderResult;
  const onInput = jest.fn();
  const onKeyDown = jest.fn();
  const onFocus = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <>
        <AutoCompleteInput
          debounce={debounceMock}
          data-testid="test-input"
          service={service}
          map={mapMock}
          filterKey={filterKeyMock}
          onInput={onInput}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
        />
        <div data-testid="click-away-zone">Click away zone</div>
      </>
    );
  });

  it('Should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should call the service on input', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      expect(service).toHaveBeenCalledTimes(1);
    });
  });

  it('Should show any autocomplete-result on input', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      expect(screen.getByText('Colombia')).toBeDefined();
    });
  });

  it('Should hide any autocomplete-result on pressing esc or tab', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      fireEvent.keyDown(screen.getByTestId('test-input'), { key: 'Escape' });
      expect(() => screen.getByText('Colombia')).toThrow(Error);
      fireEvent.focus(screen.getByTestId('test-input'));
      fireEvent.keyDown(screen.getByTestId('test-input'), { key: 'Tab' });
      expect(() => screen.getByText('Colombia')).toThrow(Error);
    });
  });

  it('Should show any result on focus', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      fireEvent.keyDown(screen.getByTestId('test-input'), { key: 'Escape' });
      fireEvent.focus(screen.getByTestId('test-input'));
      expect(screen.getByText('Colombia')).toBeDefined();
    });
  });

  it('Should hide autocomplete-result on click away', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('click-away-zone'));
      expect(() => screen.getByText('Colombia')).toThrow(Error);
    });
  });

  it('Should know when mouse entered and left', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    await waitFor(() => {
      const ref = document.querySelector('input').closest('div');
      fireEvent.mouseEnter(ref);
      fireEvent.click(ref);
      expect(screen.getByText('Colombia')).toBeDefined();
      fireEvent.mouseLeave(ref);
      fireEvent.click(screen.getByTestId('click-away-zone'));
      expect(() => screen.getByText('Colombia')).toThrow(Error);
    });
  });

  it('Should detect every event', async () => {
    fireEvent.input(screen.getByTestId('test-input'));
    fireEvent.keyDown(screen.getByTestId('test-input'));
    fireEvent.focus(screen.getByTestId('test-input'));

    expect(onInput).toBeCalled();
    expect(onKeyDown).toBeCalled();
    expect(onFocus).toBeCalled();
  });
});
