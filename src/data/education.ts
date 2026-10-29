// ─────────────────────────────────────────────────────────────
//  EDUCACIÓN
//  end: null  →  se muestra "Presente"
//  location es opcional.
// ─────────────────────────────────────────────────────────────
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import type { Text } from '../i18n';

export const education: { icon: typeof Award; start: string; end: string | null; degree: Text; institution: Text; location?: Text }[] = [
  {
    icon: GraduationCap,
    start: '2024',
    end: null,
    degree: { es: 'Ingeniería de Software', en: 'Software Engineering', pt: 'Engenharia de Software', fr: 'Génie Logiciel' },
    institution: 'Universidad Cooperativa de Colombia',
    location: { es: '6to Semestre', en: '6th Semester', pt: '6º Semestre', fr: '6ème Semestre' }
  },
  {
    icon: BookOpen,
    start: '2023',
    end: '2024',
    degree: {
      es: 'Técnico en Asistencia y Soporte de la Información',
      en: 'Technical Support and Information Systems',
      pt: 'Técnico em Assistência e Suporte de Informação',
      fr: 'Technicien en Assistance et Support Informatique'
    },
    institution: { es: 'Instituto INESUR', en: 'INESUR Institute', pt: 'Instituto INESUR', fr: 'Institut INESUR' }
  },
  {
    icon: Award,
    start: '2011',
    end: '2021',
    degree: { es: 'Bachiller Técnico', en: 'Technical High School', pt: 'Ensino Médio Técnico', fr: 'Baccalauréat Technique' },
    institution: { es: 'Colegio Técnico Industrial', en: 'Industrial Technical College', pt: 'Colégio Técnico Industrial', fr: 'Collège Technique Industriel' },
    location: 'Pasto'
  }
];
