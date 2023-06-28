/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Switch } from '@headlessui/react';
import SunIcon from '../../assets/SunIcon';
import MoonIcon from '../../assets/MoonIcon';
import MainContext from '../../context/MainContext';
import useSound from 'use-sound';
import clickSound from '../../sounds/click.mp3';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToggleThemeButton() {
  const { themeMode, setThemeMode } = useContext(MainContext);
  const [play] = useSound(clickSound);

  return (
    <Switch
      onClick={play}
      checked={themeMode}
      onChange={() => {
        themeMode
          ? localStorage.setItem('theme', 'dark')
          : localStorage.setItem('theme', 'light');
        setThemeMode(!themeMode);
      }}
      className={classNames(
        themeMode ? 'bg-dark-gray' : 'bg-blue-100',
        'relative inline-flex h-[24px] w-[44px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out scale-150'
      )}
    >
      <span
        className={classNames(
          themeMode
            ? 'translate-x-5 bg-darker-gray'
            : 'translate-x-0 bg-lighter-gray',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            themeMode
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity p-[4px]'
          )}
          aria-hidden="true"
        >
          <SunIcon />
        </span>
        <span
          className={classNames(
            themeMode
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity p-[4px]'
          )}
          aria-hidden="true"
        >
          <MoonIcon />
        </span>
      </span>
    </Switch>
  );
}
