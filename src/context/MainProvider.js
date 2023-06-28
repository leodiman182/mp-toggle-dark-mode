import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [themeMode, setThemeMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const context = {
    themeMode,
    setThemeMode,
  };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}
