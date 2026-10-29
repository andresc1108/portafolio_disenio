import { useState } from 'react';
import { ThemeContext, type Theme } from './theme';
import { LanguageContext, type Language } from '../i18n';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { StackSection } from './components/sections/StackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

// El contenido del portafolio (experiencia, habilidades, proyectos...) está en src/data/
export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('es');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div
          className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <StackSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
