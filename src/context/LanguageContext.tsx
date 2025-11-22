'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ro' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export const translations = {
  en: {
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    language: {
      en: 'English',
      ro: 'Română',
    },
    greeting: "Hello, I'm Alexis Matei",
    tagline: "Full Stack Developer",
    screenSize: "Screen Size",
    about: {
      title: "About Me",
      intro: "I'm a passionate Frontend Developer specializing in React, TypeScript, and Next.js. With a strong eye for design and a love for clean, efficient code, I create engaging and performant web applications.",
      technicalSkills: "Technical Skills",
      whatIDo: "What I Do",
      skills: {
        react: "React.js & Next.js",
        typescript: "TypeScript & JavaScript (ES6+)",
        styling: "Tailwind CSS & Styled Components",
        spline: "Spline 3D Design"
      },
      activities: {
        responsive: "Build responsive and accessible web applications",
        threeD: "Create interactive 3D web experiences with Spline",
        cleanCode: "Write clean, maintainable, and well-documented code",
        optimize: "Optimize for performance and user experience"
      },
      cornerTexts: {
        aboutMe: "// About Me",
        fullStack: "// Full Stack Developer",
        passion: "const passion = 'Creating digital experiences'",
        goal: "const goal = 'Build amazing web applications'"
      },
    },
    portfolio: {
      title: "My Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      projects: {
        project1: {
          title: "E-commerce Platform",
          description: "A full-featured e-commerce platform with cart, checkout, and user authentication.",
          tech: "Next.js, TypeScript, Tailwind CSS, MongoDB, EuPlatesc, Cloudinary",
        },
        project2: {
          title: "Gym Dapp",
          description: "A full-featured gym management workouts web application with wallet authentication, gym workouts management, and user workouts management.",
          tech: "React.js, Rust, Web3, Tailwind CSS, TypeScript, Anchor, Solana"
        },
        project3: {
          title: "MPR Project",
          description: "A web application for the company's MPR (Monthly Performance Report) that allows employees to submit their performance reports.",
          tech: "React.js, TypeScript, PostgreSQL, Tailwind CSS, Node.js, Express, TypeScript, Unit Testing, "
        }
      }
    }
  },
  ro: {
    theme: {
      light: 'Luminos',
      dark: 'Întunecat',
    },
    language: {
      en: 'English',
      ro: 'Română',
    },
    greeting: "Bună, sunt Alexis Matei",
    tagline: "Full Stack Developer",
    screenSize: "Dimensiunea Ecranului",
    about: {
      title: "Despre Mine",
      intro: "Sunt un dezvoltator Frontend pasionat specializat în React, TypeScript și Next.js. Cu o ochii puternice pentru design și o pasiune pentru codul net, eficient și curat, creez aplicații web engageante și performante.",
      technicalSkills: "Abilități Tehnologice",
      whatIDo: "Ce Face",
      skills: {
        react: "React.js & Next.js",
        typescript: "TypeScript & JavaScript (ES6+)",
        styling: "Tailwind CSS & Styled Components",
        spline: "Spline 3D Design"
      },
      activities: {
        responsive: "Creez aplicații web responsive și accesibile",
        threeD: "Creez experiențe web interactive 3D cu Spline",
        cleanCode: "Creez cod curat, menținabil și documentat",
        optimize: "Optimizez pentru performanță și experiență utilizator"
      },
      cornerTexts: {
        aboutMe: "// Despre Mine",
        fullStack: "// Full Stack Developer",
        passion: "const passion = 'Crearea experiențelor digitale'",
        goal: "const goal = 'Creez aplicații web impresionante'"
      },
    },
    portfolio: {
      title: "Proiectele Mele",
      viewProject: "Vezi Proiectul",
      viewCode: "Vezi Codul",
      projects: {
        project1: {
          title: "Platformă E-commerce",
          description: "O platformă e-commerce completă cu coș de cumpărături, plată și autentificare utilizator.",
          tech: "Next.js, TypeScript, Tailwind CSS, MongoDB, EuPlatesc, Cloudinary",
        },
        project2: {
          title: "Gym Dapp",
          description: "O platformă completă de gestionare a workout-urilor cu autentificare prin portofel digital, administrare workout-uri și gestionare utilizatori.",
          tech: "React.js, Rust, Web3, Tailwind CSS, TypeScript, Anchor, Solana"
        },
        project3: {
          title: "Proiect MPR",
          description: "O aplicație web pentru MPR-urile companiei (Raport Lunar de Performanță) care permite angajaților să își trimită rapoartele de performanță.",
          tech: "React.js, TypeScript, PostgreSQL, Tailwind CSS, Node.js, Express, Testare Unitara"
        }
      }
    }
  },
};