import { Select, useThemeContext } from '@components';
import { Theme } from '@interfaces';
import React from 'react';

export const App: React.FC = () => {
  const { setTheme } = useThemeContext();

  return (
    <>
      <Select
        onChange={(event) => setTheme(event.target.value as Theme)}
        options={[
          { value: 'main.light', label: 'Light' },
          { value: 'main.dark', label: 'Dark' },
        ]}
      />
    </>
  );
};
