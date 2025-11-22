'use client';

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/LanguageContext";

export function About() {
    const { language } = useLanguage();
    const t = translations[language];

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-r from-blue-10 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
    >

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-34 sm:mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white py-10 sm:py-4 mb-18 sm:mb-8">
          {t.about.title}
        </h2>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {t.about.intro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {t.about.technicalSkills}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">▹</span>
                  {t.about.skills.react}
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">▹</span>
                  {t.about.skills.typescript}
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">▹</span>
                  {t.about.skills.styling}
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-2">▹</span>
                  {t.about.skills.spline}
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {t.about.whatIDo}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">▹</span>
                  {t.about.activities.responsive}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">▹</span>
                  {t.about.activities.threeD}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">▹</span>
                  {t.about.activities.cleanCode}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">▹</span>
                  {t.about.activities.optimize}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-34 sm:top-20 left-8 text-sm text-indigo-400 dark:text-indigo-500 font-mono opacity-70">
        <div>{t.about.cornerTexts.aboutMe}</div>
        <div>{t.about.cornerTexts.fullStack}</div>
      </div>

      <div className="absolute bottom-16 right-8 text-sm text-indigo-400 dark:text-indigo-500 font-mono opacity-70 text-right">
        <div>{t.about.cornerTexts.passion}</div>
        <div>{t.about.cornerTexts.goal}</div>
      </div>
    </section>
  );
}