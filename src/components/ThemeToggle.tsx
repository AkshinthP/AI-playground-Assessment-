import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/Button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="text-xs"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};
