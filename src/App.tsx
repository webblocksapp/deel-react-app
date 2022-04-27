import React from 'react';
import { TextField } from '@components';
import { Main } from '@layouts';

export const App: React.FC = () => {
  return (
    <Main>
      <h3>Auto complete countries example</h3>
      <TextField label="Find a country" />
    </Main>
  );
};
