import React from 'react';
import { AutoCompleteInput } from '@components';
import { Main } from '@layouts';
import { useCountriesApi } from '@apis';

export const App: React.FC = () => {
  const countriesApi = useCountriesApi();

  return (
    <Main>
      <div>
        <h3>Auto Complete Countries Example</h3>
        <AutoCompleteInput
          label="Find by Country"
          service={countriesApi.list}
          map={{ primaryText: 'name' }}
          filterKey="name"
        />
        <br />
        <AutoCompleteInput
          label="Find by Continent"
          service={countriesApi.list}
          map={{ primaryText: 'name', secondaryText: 'continent' }}
          filterKey="continent"
        />
      </div>
    </Main>
  );
};
