import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { Theme } from '@interfaces';

export const ThemeContext = createContext<{
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({} as any);
export const useThemeContext = () => useContext(ThemeContext);

export interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState<Theme>('main.light');

  useEffect(() => {
    /**
     * Base theme stylesheet definition
     */
    const _appBaseTheme = document.getElementById('app-base-theme') as HTMLLinkElement;
    const appBaseTheme = _appBaseTheme || document.createElement('link');
    appBaseTheme.rel = 'stylesheet';
    appBaseTheme.id = 'app-base-theme';
    appBaseTheme.href = `themes/${theme.replace(/\.([^.]+)$/, '/base')}.css`;

    /**
     * Base theme colors palette definition
     */
    const _appTheme = document.getElementById('app-theme') as HTMLLinkElement;
    const appTheme = _appTheme || document.createElement('link');
    appTheme.rel = 'stylesheet';
    appTheme.id = 'app-theme';
    appTheme.href = `themes/${theme.replace(/\./g, '/')}.css`;

    if (!_appBaseTheme) document.querySelector('head').appendChild(appBaseTheme);
    if (!_appTheme) document.querySelector('head').appendChild(appTheme);
  }, [theme]);

  return <ThemeContext.Provider value={{ setTheme }}>{props.children}</ThemeContext.Provider>;
};
