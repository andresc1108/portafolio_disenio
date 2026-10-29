import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { testimonials } from '../../../data/testimonials';
import { SectionTitle } from '../SectionTitle';

export function TestimonialsSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.testimonials.title)}</SectionTitle>

        <div className={`grid gap-6 ${testimonials.length % 3 === 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16, scale: 0.995 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 180, damping: 16 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.12 } }}
              whileTap={{ scale: 0.995 }}
              className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'} transition-all group`}
            >
              <motion.div initial={{ scale: 0.98 }} whileInView={{ scale: 1 }} className="mb-4">
                <Quote size={28} className="text-blue-500 transition-transform" />
              </motion.div>

              <p className={`text-sm mb-6 italic border-l-2 border-dashed ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pl-4`} style={{ fontWeight: 500, lineHeight: 1.6 }}>
                {t(testimonial.quote)}
              </p>

              <div className="mt-3">
                <motion.div whileHover={{ scale: 1.02 }} style={{ fontWeight: 700 }}>{testimonial.name}</motion.div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{t(testimonial.role)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
