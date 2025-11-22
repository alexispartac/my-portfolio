// src/components/Navigation.tsx
'use client';

import { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export function Navigation() {
  const screenSize = useResponsive();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', en: 'Home', ro: 'Acasă' },
    { id: 'about', en: 'About', ro: 'Despre' },
    { id: 'portfolio', en: 'Portfolio', ro: 'Portofoliu' },
    { id: 'contact', en: 'Contact', ro: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center z-50 backdrop-blur-md justify-between p-4 bg-transparent shadow-none">
        <div className="flex items-center gap-1">
          {theme === 'light' ? (
            <img src="/logo2.png" alt="Logo" className="w-10 h-8 sm:w-14 sm:h-12" />
          ) : (
            <img src="/logo1.png" alt="Logo" className="w-10 h-8 sm:w-14 sm:h-12" />
          )}
          <span className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
            Software Developer
          </span>
        </div>

        <div className="flex items-center gap-4">
          {screenSize === 'desktop' && (
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {language === 'en' ? item.en : item.ro}
                </a>
              ))}
            </div>
          )}
          <ThemeSwitcher />
          {screenSize === 'mobile' && (
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {screenSize === 'mobile' && isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {language === 'en' ? item.en : item.ro}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}