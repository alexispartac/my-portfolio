'use client';

import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle language"
      >
        {language === 'en' ? 'RO' : 'EN'}
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}