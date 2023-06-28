import { useContext, useEffect } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';
import MainContext from './context/MainContext';

function App() {
  const { themeMode } = useContext(MainContext);

  useEffect(() => {
    window.onload = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  }, []);

  useEffect(() => {
    if (themeMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [themeMode]);

  console.log(themeMode);

  // window.addEventListener = ('storage', () => navigate('/'));

  return (
    <main className="h-screen w-full flex items-center justify-center bg-lighter-gray dark:bg-darker-gray">
      <ToggleThemeButton />
    </main>
  );
}

export default App;
