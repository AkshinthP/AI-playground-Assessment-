import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = 'ai-playground-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Load initial theme from localStorage on first render
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
      const initial: Theme =
        stored === 'light' || stored === 'dark' ? stored : 'light';

      setTheme(initial);
      document.documentElement.classList.toggle('dark', initial === 'dark');
    } catch {
      // if anything fails, just fallback to light
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Whenever theme changes, update <html> class and persist
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return ctx;
};
