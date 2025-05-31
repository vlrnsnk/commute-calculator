import { useEffect, useState, type ReactElement } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitcher = (): ReactElement => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect((): void => {
    const isDark: boolean = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = (): void => {
    const newMode: boolean = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className='p-3 rounded-full bg-geico-blue text-white dark:bg-geico-darkblue cursor-pointer'
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </>
  );
};

export { ThemeSwitcher };
