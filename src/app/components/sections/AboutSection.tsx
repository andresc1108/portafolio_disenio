import { motion } from 'motion/react';
import { Zap, Target, Award } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { profile } from '../../../data/profile';
import { SectionTitle } from '../SectionTitle';

export function AboutSection() {
  const { theme } = useTheme();
  const t = useT();

  const stats = [
    { ...profile.stats.years, icon: Zap },
    { ...profile.stats.projects, icon: Target },
    { ...profile.stats.technologies, icon: Award }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.about.title)}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className={`aspect-square ${theme === 'dark' ? 'bg-gradient-to-br from-red-900 via-gray-900 to-black' : 'bg-gradient-to-br from-red-300 via-gray-300 to-gray-100'} rounded-2xl overflow-hidden border-2 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} group-hover:border-blue-500 transition-all duration-300`}
              style={{ boxShadow: theme === 'dark' ? '0 0 30px 8px rgba(255, 255, 255, 0.18)' : '0 0 30px 8px rgba(0, 0, 0, 0.18)' }}
            >
              {/* Para cambiar tu foto, reemplaza src/assets/foto.jpeg */}
              <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} className="w-full h-full object-cover" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`absolute -bottom-4 -right-4 px-6 py-3 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg text-sm shadow-xl`}
              style={{ fontWeight: 700 }}
            >
              {t(profile.aboutBadge)}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.8 }}>
              {t(profile.aboutDescription)}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl transition-all border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'}`}
                >
                  <stat.icon size={24} className="mb-3 text-blue-500" />
                  <div className="text-3xl mb-1" style={{ fontWeight: 900 }}>{stat.value}</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{t(stat.label)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
