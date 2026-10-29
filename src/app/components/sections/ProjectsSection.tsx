import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { useTheme } from '../../theme';
import { useT } from '../../../i18n';
import { ui } from '../../../i18n/ui';
import { projects } from '../../../data/projects';
import { SectionTitle } from '../SectionTitle';

export function ProjectsSection() {
  const { theme } = useTheme();
  const t = useT();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t(ui.projects.title)}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-2xl border-2 ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'} transition-all group relative overflow-hidden`}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon size={128} />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs text-blue-500" style={{ fontWeight: 800 }}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`} style={{ fontWeight: 700 }}>{t(project.badge)}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={40} className="text-blue-500" />
                    <h3 className="text-3xl group-hover:text-blue-500 transition-colors" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>{project.name}</h3>
                  </div>

                  <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.7 }}>
                    {t(project.description)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 text-xs ${theme === 'dark' ? 'bg-black/50 border-gray-700' : 'bg-white/50 border-gray-300'} rounded-lg border`}
                        style={{ fontWeight: 700 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors"
                        style={{ fontWeight: 700 }}
                      >
                        <Play size={14} />
                        {t(ui.projects.viewDemo)}
                      </motion.a>
                    )}

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-sm text-blue-500 flex items-center gap-2 group/link"
                      style={{ fontWeight: 700 }}
                    >
                      {t(ui.projects.viewProject)}
                      <ExternalLink size={14} className="group-hover/link:rotate-45 transition-transform" />
                    </motion.a>
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
