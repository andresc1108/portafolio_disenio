import { motion } from 'motion/react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { skills } from '../../../data/skills';
import { SectionTitle } from '../SectionTitle';

export function SkillsSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.skills.title)}</SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'} transition-all cursor-pointer group`}
            >
              <skill.icon size={32} className="mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="mb-2" style={{ fontWeight: 700 }}>{t(skill.name)}</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + i * 0.1 }}
                    className={`h-1 w-full rounded ${i < skill.level ? 'bg-blue-500' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
