
import React from 'react';
import { Icons } from '../constants';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
    </button>
  );
};

export default ThemeToggle;
