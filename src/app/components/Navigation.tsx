import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from '../theme';
import { LanguageContext, languages, useT, type Language } from '../../i18n';
import { ui } from '../../i18n/ui';
import { profile } from '../../data/profile';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useContext(LanguageContext);
  const t = useT();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t(ui.nav.about), href: '#about' },
    { label: t(ui.nav.services), href: '#services' },
    { label: t(ui.nav.projects), href: '#projects' },
    { label: t(ui.nav.testimonials), href: '#testimonials' },
    { label: t(ui.nav.contact), href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.05em' }}
        >
          {profile.initials}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(item => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="text-sm tracking-wider hover:text-blue-500 transition-colors"
              style={{ fontWeight: 600 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          {/* Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              style={{ fontWeight: 700 }}
            >
              <Globe size={18} />
              <span className="text-xs">{languages[language]}</span>
              <ChevronDown size={14} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute top-full mt-2 right-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-hidden min-w-[120px]`}
                >
                  {Object.entries(languages).map(([lang, name]) => (
                    <motion.button
                      key={lang}
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      onClick={() => {
                        setLanguage(lang as Language);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm ${language === lang ? 'text-blue-500' : ''}`}
                      style={{ fontWeight: 600 }}
                    >
                      {name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg ${theme === 'dark' ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' : 'bg-gray-800 text-white hover:bg-gray-700'} transition-colors`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} overflow-hidden`}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm hover:text-blue-500 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
