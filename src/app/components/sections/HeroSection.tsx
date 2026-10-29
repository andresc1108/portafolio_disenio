import { motion } from 'motion/react';
import { ExternalLink, MapPin } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { profile } from '../../../data/profile';
import { downloadCV } from '../../downloadCV';

export function HeroSection() {
  const { theme } = useTheme();
  const t = useT();

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadCV();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
            <span className="text-xs text-blue-500 tracking-wider" style={{ fontWeight: 700 }}>{t(ui.hero.available)}</span>
          </div>

          <h1 className="mb-6">
            <div className="text-5xl md:text-7xl lg:text-8xl tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
              {profile.firstName}
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-blue-500" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
              {profile.lastName}
            </div>
          </h1>

          <p className={`text-lg md:text-xl mb-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>
            {t(profile.title)} <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>{t(profile.heroDescription)}</span>
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin size={16} className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} />
            <span className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} tracking-wider`} style={{ fontWeight: 700 }}>{t(profile.location)}</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontWeight: 700 }}
            >
              {t(ui.hero.contact)}
              <ExternalLink size={16} />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto px-8 py-3 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} rounded-lg transition-colors flex items-center justify-center`}
              style={{ fontWeight: 700 }}
            >
              {t(ui.hero.projects)}
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors flex items-center justify-center gap-2 text-blue-500"
              style={{ fontWeight: 700 }}
            >
              {t(ui.downloadCV)}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
