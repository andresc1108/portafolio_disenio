// ─────────────────────────────────────────────────────────────
//  EXPERIENCIA
//  Para agregar una nueva, copia un bloque { ... } al INICIO de la lista.
//  end: null  →  se muestra "PRESENTE"
//  status es opcional (la etiqueta azul de abajo); bórralo si no lo usas.
// ─────────────────────────────────────────────────────────────
import type { Text } from '../i18n';

export const experience: { start: string; end: string | null; position: Text; company: Text; description: Text; status?: Text }[] = [
  {
    start: '2024',
    end: null,
    position: { es: 'Proyectos Universitarios', en: 'University Projects', pt: 'Projetos Universitários', fr: 'Projets Universitaires' },
    company: {
      es: 'Desarrollador de Software — Universidad Cooperativa de Colombia',
      en: 'Software Developer — Universidad Cooperativa de Colombia',
      pt: 'Desenvolvedor de Software — Universidad Cooperativa de Colombia',
      fr: 'Développeur de Logiciels — Universidad Cooperativa de Colombia'
    },
    description: {
      es: 'Desarrollo de proyectos académicos aplicando metodologías ágiles, trabajo en equipo y tecnologías modernas como React, Node.js y MongoDB. Participación en proyectos con impacto real como KAWSAY LENS y ANDES_SOUND.',
      en: 'Development of academic projects applying agile methodologies, teamwork and modern technologies such as React, Node.js and MongoDB. Participation in real impact projects like KAWSAY LENS and ANDES_SOUND.',
      pt: 'Desenvolvimento de projetos acadêmicos aplicando metodologias ágeis, trabalho em equipe e tecnologias modernas como React, Node.js e MongoDB. Participação em projetos com impacto real como KAWSAY LENS e ANDES_SOUND.',
      fr: "Développement de projets académiques en appliquant des méthodologies agiles, le travail d'équipe et des technologies modernes comme React, Node.js et MongoDB. Participation à des projets à impact réel comme KAWSAY LENS et ANDES_SOUND."
    },
    status: {
      es: 'EN BÚSQUEDA DE MI PRIMERA EXPERIENCIA PROFESIONAL',
      en: 'LOOKING FOR MY FIRST PROFESSIONAL EXPERIENCE',
      pt: 'EM BUSCA DA MINHA PRIMEIRA EXPERIÊNCIA PROFISSIONAL',
      fr: 'À LA RECHERCHE DE MA PREMIÈRE EXPÉRIENCE PROFESSIONNELLE'
    }
  }
];
