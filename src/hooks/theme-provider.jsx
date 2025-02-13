import { useEffect, useState } from "react";

const useTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [theme, setTheme] = useState(prefersDarkMode);

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
