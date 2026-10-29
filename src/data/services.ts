// ─────────────────────────────────────────────────────────────
//  SERVICIOS
//  Para agregar uno, copia un bloque { ... } y cámbialo.
//  Íconos disponibles: https://lucide.dev/icons (impórtalos arriba)
// ─────────────────────────────────────────────────────────────
import { Code2, Database, Palette, Briefcase, Wrench, Users } from 'lucide-react';
import type { Text } from '../i18n';

export const services: { icon: typeof Code2; title: Text; tags: Text[] }[] = [
  {
    icon: Code2,
    title: { es: 'Desarrollo Web Frontend', en: 'Frontend Web Development', pt: 'Desenvolvimento Web Frontend', fr: 'Développement Web Frontend' },
    tags: ['REACT', 'NEXT.JS', 'TAILWIND', 'TYPESCRIPT', 'FRAMER MOTION']
  },
  {
    icon: Database,
    title: { es: 'Desarrollo Backend & APIs', en: 'Backend Development & APIs', pt: 'Desenvolvimento Backend & APIs', fr: 'Développement Backend & APIs' },
    tags: ['EXPRESS', 'FASTAPI', 'REST API', 'MongoDB', 'IA']
  },
  {
    icon: Palette,
    title: { es: 'Diseño UI/UX', en: 'UI/UX Design', pt: 'Design UI/UX', fr: 'Design UI/UX' },
    tags: ['FIGMA', 'DESIGN SYSTEMS', 'WIREFRAMING', { es: 'PROTOTIPADO', en: 'PROTOTYPING', pt: 'PROTOTIPAGEM', fr: 'PROTOTYPAGE' }, 'FRAMER']
  },
  {
    icon: Briefcase,
    title: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development', pt: 'Desenvolvimento de Aplicações Web', fr: "Développement d'Applications Web" },
    tags: ['REACT', 'NODE.JS', 'VITE', 'DOCKER', 'CI/CD']
  },
  {
    icon: Wrench,
    title: { es: 'Soporte Técnico & Sistemas', en: 'Technical Support & Systems', pt: 'Suporte Técnico & Sistemas', fr: 'Support Technique & Systèmes' },
    tags: [
      'BASH',
      'LINUX',
      { es: 'REDES', en: 'NETWORKS', pt: 'REDES', fr: 'RÉSEAUX' },
      { es: 'CIBERSEGURIDAD', en: 'CYBERSECURITY', pt: 'CIBERSEGURANÇA', fr: 'CYBERSÉCURITÉ' },
      { es: 'VIRTUALIZACIÓN', en: 'VIRTUALIZATION', pt: 'VIRTUALIZAÇÃO', fr: 'VIRTUALISATION' }
    ]
  },
  {
    icon: Users,
    title: { es: 'Consultoría de Software', en: 'Software Consulting', pt: 'Consultoria de Software', fr: 'Consulting en Logiciel' },
    tags: ['SCRUM', 'AGILE', 'GIT FLOW', { es: 'DOCUMENTACIÓN', en: 'DOCUMENTATION', pt: 'DOCUMENTAÇÃO', fr: 'DOCUMENTATION' }, 'CLEAN CODE']
  }
];
