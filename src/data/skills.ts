// ─────────────────────────────────────────────────────────────
//  HABILIDADES Y STACK
//  level: de 1 a 5 (cantidad de barras llenas)
// ─────────────────────────────────────────────────────────────
import { Code2, Database, Palette, Wrench, Users, Github } from 'lucide-react';
import type { Text } from '../i18n';

export const skills: { name: Text; icon: typeof Code2; level: number }[] = [
  { name: 'HTML', icon: Code2, level: 5 },
  { name: 'CSS', icon: Palette, level: 5 },
  { name: 'Python', icon: Code2, level: 5 },
  { name: 'Java', icon: Code2, level: 5 },
  { name: 'React', icon: Code2, level: 5 },
  { name: 'Node.js', icon: Database, level: 5 },
  { name: 'MongoDB', icon: Database, level: 5 },
  { name: 'Figma', icon: Palette, level: 5 },
  { name: 'Git', icon: Code2, level: 5 },
  { name: 'GitHub', icon: Github, level: 5 },
  { name: 'Liderazgo', icon: Users, level: 5 },
  { name: 'Soporte TI', icon: Wrench, level: 5 }
];

// Stack: cada categoría con su título y sus tecnologías
export const stack: { title: Text; items: string[] }[] = [
  {
    title: 'FRONTEND',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Figma']
  },
  {
    title: 'BACKEND',
    items: ['Node.js', 'Python', 'Java', 'Spring Boot', 'REST APIs']
  },
  {
    title: { es: 'BASE DE DATOS', en: 'DATABASE', pt: 'BANCO DE DADOS', fr: 'BASE DE DONNÉES' },
    items: ['MongoDB', 'SQL', 'Firebase']
  },
  {
    title: { es: 'HERRAMIENTAS', en: 'TOOLS', pt: 'FERRAMENTAS', fr: 'OUTILS' },
    items: ['Git', 'GitHub', 'VS Code', 'Postman']
  }
];
