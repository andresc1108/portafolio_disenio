import { motion } from 'motion/react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { stack } from '../../../data/skills';
import { SectionTitle } from '../SectionTitle';

export function StackSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="mb-8">{t(ui.stack.title)}</SectionTitle>

        <p className={`text-lg mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl`} style={{ fontWeight: 500 }}>
          {t(ui.stack.description)}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {stack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-800 bg-white/5' : 'border-gray-200 bg-black/5'}`}
            >
              <h3 className="text-xs text-blue-500 tracking-wider mb-4" style={{ fontWeight: 800 }}>
                {t(category.title)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`px-4 py-2 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} rounded-lg transition-all cursor-default border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                    style={{ fontWeight: 600 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
