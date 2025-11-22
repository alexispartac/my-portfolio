'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/context/LanguageContext';
import HoverSpline from './Animation';

export function Preview() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-10 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
      style={{ height: '100vh' }}
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {t.greeting || 'Hello, I am [Your Name]'}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {t.tagline || 'Full Stack Developer'}
        </p>
      </div>

      <div className="absolute top-30 left-8 text-[8px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-mono">
        <div>Full Stack Development</div>
        <div>Clean Code Enthusiast</div>
        <div>Problem Solver</div>
      </div>

      <div className="absolute top-30 right-8 text-[8px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-mono text-right">
        <div>React.js • Next.js • TypeScript</div>
        <div>Node.js • Express • MongoDB</div>
        <div>Tailwind CSS • Framer Motion</div>
      </div>

      <div className="absolute bottom-20 left-8 text-[8px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-mono">
        <div>const passion = &apos;Coding&apos;;</div>
        <div>let experience = &apos;2+ years&apos;;</div>
        <div>let available = true;</div>
      </div>

      <div className="absolute bottom-20 right-8 text-[8px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-mono text-right">
        <div>function createAwesome() {'{'}</div>
        <div className="ml-4">return &quot;Lets build something great!&quot;;</div>
        <div>{'}'}</div>
      </div>

      <div className="absolute fixed inset-0 overflow-hidden opacity-10 dark:opacity-30">
        <HoverSpline />
      </div>
    </section>
  );
};