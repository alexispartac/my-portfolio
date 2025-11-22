'use client';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

export function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      tech: t.projects.project1.tech,
      githubLink: "https://github.com/alexispartac/florarie-simona",
      liveLink: "https://www.buchetul-simonei.com/",
      image: "/P1.png"
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      tech: t.projects.project2.tech,
      githubLink: "https://github.com/alexispartac/gym-dapp",
      liveLink: "https://gym-dapp.vercel.app/",
      image: "/P2.png"
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      tech: t.projects.project3.tech,
      githubLink: "https://github.com/Thinslices/Beta-Squad-FE",
      liveLink: "https://beta-squad-fe-production.up.railway.app/",
      image: "/P3.png"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="portfolio" 
      className="relative min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-r from-blue-10 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mt-8 mb-16">
          {t.title}
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {projects[currentIndex].description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Technologies used:
                    </p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {projects[currentIndex].tech}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    {projects[currentIndex].githubLink && (
                      <a
                        href={projects[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FiGithub className="mr-2" />
                        {t.viewCode}
                      </a>
                    )}
                    {projects[currentIndex].liveLink && (
                      <a
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <FiExternalLink className="mr-2" />
                        {t.viewProject}
                      </a>
                    )}
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-8 flex items-center justify-center">
                  <div className="w-full h-64 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <img src={projects[currentIndex].image} alt="Screenshot" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous project"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next project"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-indigo-600 dark:bg-indigo-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}