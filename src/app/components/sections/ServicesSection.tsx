import { motion } from 'motion/react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { services } from '../../../data/services';
import { SectionTitle } from '../SectionTitle';

export function ServicesSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.services.title)}</SectionTitle>

        <div className={`p-8 md:p-12 border-2 ${theme === 'dark' ? 'border-blue-500/30 hover:border-blue-500/50' : 'border-blue-500/50 hover:border-blue-500/70'} rounded-2xl transition-all`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                className={`py-6 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} last:border-b-0 rounded-lg px-4 transition-all`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Icon size={28} className="text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl md:text-2xl" style={{ fontWeight: 700 }}>{t(service.title)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/30 text-blue-700'} rounded border ${theme === 'dark' ? 'border-blue-500/30' : 'border-blue-500/50'}`}
                        style={{ fontWeight: 700 }}
                      >
                        {t(tag)}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
