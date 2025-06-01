import { useEffect, useState, type ReactElement } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitcher = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    if ("theme" in localStorage) {
      return localStorage.theme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect((): void => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={(): void => setIsDarkMode(!isDarkMode)}
      className="p-3 rounded-full text-blue-700 dark:text-sky-300 border border-blue-700 dark:border-sky-300 cursor-pointer"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export { ThemeSwitcher };
