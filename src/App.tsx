import React from 'react';
import { AutoCompleteInput } from '@components';
import { Main } from '@layouts';
import { useCountriesApi } from '@apis';

export const App: React.FC = () => {
  const countriesApi = useCountriesApi();

  return (
    <Main>
      <div>
        <h3>Countries</h3>
        <AutoCompleteInput
          label="Find by Name"
          service={countriesApi.list}
          map={{ primaryText: 'name' }}
          filterKey="name"
          placeholder="Type a country name"
        />
        <br />
        <AutoCompleteInput
          label="Find by Continent"
          service={countriesApi.list}
          map={{ primaryText: 'name', secondaryText: 'continent' }}
          filterKey="continent"
          placeholder="Type a continent name"
        />
      </div>
    </Main>
  );
};
