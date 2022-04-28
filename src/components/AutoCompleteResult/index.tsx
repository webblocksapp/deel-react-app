import React from 'react';
import { useAutoCompleteInputContext } from '../AutoCompleteInput';
import './index.css';

export const AutoCompleteResult: React.FC = () => {
  const { results, match, setMatch, setShow, loading } = useAutoCompleteInputContext();

  return (
    <ul className="autocomplete-result">
      {Boolean(results?.length)
        ? results.map((result, index) => (
            <li
              onClick={() => {
                setMatch(result.primaryText);
                setShow(false);
              }}
              key={index}
            >
              <span>{result.primaryText}</span>
              {result.secondaryText && (
                <>
                  {' '}
                  - <small>{result.secondaryText}</small>
                </>
              )}
            </li>
          ))
        : match && (
            <>
              {loading && <span>Searching...</span>}
              {!loading && <span>No results found.</span>}
            </>
          )}
    </ul>
  );
};
