import React from 'react';
import './index.css';
import { Select, useThemeContext } from '@components';
import { Theme } from '@interfaces';

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useThemeContext();

  return (
    <div>
      <Select
        onChange={(event) => setTheme(event.target.value as Theme)}
        options={[
          { value: 'main.light', label: 'Light' },
          { value: 'main.dark', label: 'Dark' },
        ]}
      />
    </div>
  );
};
