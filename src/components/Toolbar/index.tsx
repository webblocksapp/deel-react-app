import React from 'react';
import './index.css';
import { Logo, ThemeSelector } from '@components';

export const Toolbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <ThemeSelector />
    </nav>
  );
};
