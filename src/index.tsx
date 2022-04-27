import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@components';
import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
