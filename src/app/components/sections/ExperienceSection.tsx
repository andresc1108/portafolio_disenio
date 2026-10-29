import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { experience } from '../../../data/experience';
import { SectionTitle } from '../SectionTitle';

export function ExperienceSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.experience.title)}</SectionTitle>

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className={`mb-8 p-8 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} transition-all`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={20} className="text-blue-500" />
              <span className="text-xs text-blue-500" style={{ fontWeight: 800 }}>{exp.start} — {exp.end ?? t(ui.experience.present)}</span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Briefcase size={28} className="text-blue-500 mt-1" />
              <h3 className="text-2xl" style={{ fontWeight: 800 }}>{t(exp.position)}</h3>
            </div>

            <p className={`mb-4 ml-11 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{t(exp.company)}</p>
            <p className={`text-sm mb-4 ml-11 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.7 }}>{t(exp.description)}</p>
            {exp.status && (
              <p className={`text-xs ml-11 px-4 py-2 inline-block rounded-lg ${theme === 'dark' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'bg-blue-500/20 text-blue-700 border border-blue-500/50'}`} style={{ fontWeight: 700 }}>{t(exp.status)}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
