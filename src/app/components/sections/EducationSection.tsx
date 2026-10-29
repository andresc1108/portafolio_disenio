import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { education } from '../../../data/education';
import { SectionTitle } from '../SectionTitle';

export function EducationSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.education.title)}</SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'} transition-all group`}
              >
                <Icon size={40} className="mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <div className="text-xs text-blue-500 mb-3" style={{ fontWeight: 800 }}>{edu.start} — {edu.end ?? t(ui.education.present)}</div>
                <h3 className="text-lg mb-2" style={{ fontWeight: 800 }}>{t(edu.degree)}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{t(edu.institution)}</p>
                {edu.location && (
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={12} className="text-gray-500" />
                    <p className="text-xs text-gray-500" style={{ fontWeight: 600 }}>{t(edu.location)}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
