// ─────────────────────────────────────────────────────────────
//  TUS DATOS PERSONALES
//  Cada texto con { es, en, pt, fr } tiene sus 4 idiomas juntos.
//  Un texto sin llaves (solo '...') se muestra igual en todos.
// ─────────────────────────────────────────────────────────────
import foto from '../assets/foto.jpeg';
import cv from '../assets/cv andres criollo.pdf';
import { Github, Linkedin } from 'lucide-react';

export const profile = {
  firstName: 'ANDRÉS DAVID',
  lastName: 'CRIOLLO',
  initials: 'ADCR',
  footerName: 'ANDRÉS CRIOLLO',
  photo: foto,
  cv: cv as string,
  cvFileName: 'Andres_CV.pdf',

  title: {
    es: 'Estudiante de Ingeniería de Software',
    en: 'Software Engineering Student',
    pt: 'Estudante de Engenharia de Software',
    fr: 'Étudiant en Génie Logiciel'
  },
  heroDescription: {
    es: 'en la Universidad Cooperativa de Colombia. Apasionado por construir experiencias digitales con tecnologías y creatividad.',
    en: 'at Universidad Cooperativa de Colombia. Passionate about building digital experiences with technologies and creativity.',
    pt: 'na Universidad Cooperativa de Colombia. Apaixonado por construir experiências digitais com tecnologias e criatividade.',
    fr: "à l'Universidad Cooperativa de Colombia. Passionné par la création d'expériences numériques avec technologies et créativité."
  },
  location: {
    es: 'PASTO, NARIÑO, COLOMBIA',
    en: 'PASTO, NARIÑO, COLOMBIA',
    pt: 'PASTO, NARIÑO, COLÔMBIA',
    fr: 'PASTO, NARIÑO, COLOMBIE'
  },

  // Sección "Sobre mí"
  aboutBadge: {
    es: 'Técnico en desarrollo y soporte de la información',
    en: 'Technical support and information systems developer',
    pt: 'Técnico em desenvolvimento e suporte de informação',
    fr: 'Technicien en développement et support informatique'
  },
  aboutDescription: {
    es: 'Me apasiona crear soluciones tecnológicas innovadoras que generen impacto positivo. Cuento con experiencia en desarrollo full stack, trabajando con metodologías ágiles y tecnologías modernas.',
    en: "I'm passionate about creating innovative technological solutions that generate positive impact. I have experience in full stack development, working with agile methodologies and modern technologies.",
    pt: 'Sou apaixonado por criar soluções tecnológicas inovadoras que geram impacto positivo. Tenho experiência em desenvolvimento full stack, trabalhando com metodologias ágeis e tecnologias modernas.',
    fr: "Je suis passionné par la création de solutions technologiques innovantes qui génèrent un impact positif. J'ai de l'expérience en développement full stack, travaillant avec des méthodologies agiles et des technologies modernes."
  },
  // Cifras de "Sobre mí": cambia el valor cuando crezcan
  stats: {
    years: {
      value: '2+',
      label: { es: 'Experiencia en Software', en: 'Software Experience', pt: 'Experiência em Software', fr: 'Expérience en logiciel' }
    },
    projects: {
      value: '2+',
      label: { es: 'Proyectos completados', en: 'Completed projects', pt: 'Projetos concluídos', fr: 'Projets complétés' }
    },
    technologies: {
      value: '8+',
      label: { es: 'Tecnologías dominadas', en: 'Technologies mastered', pt: 'Tecnologias dominadas', fr: 'Technologies maîtrisées' }
    }
  },

  // Sección "Contacto"
  contactDescription: {
    es: 'Actualmente en búsqueda de mi primera experiencia profesional. Abierto a prácticas, proyectos freelance y colaboraciones.',
    en: 'Currently looking for my first professional experience. Open to internships, freelance projects and collaborations.',
    pt: 'Atualmente em busca da minha primeira experiência profissional. Aberto a estágios, projetos freelance e colaborações.',
    fr: 'Actuellement à la recherche de ma première expérience professionnelle. Ouvert aux stages, projets freelance et collaborations.'
  },
  lookingFor: {
    es: 'En búsqueda de mi primera experiencia profesional. Interesado en oportunidades relacionadas con desarrollo de software, prácticas y proyectos que me permitan crecer en el área tecnológica.',
    en: 'Looking for my first professional experience. Interested in software development opportunities, internships, and projects that allow me to grow in the tech field.',
    pt: 'Em busca da minha primeira experiência profissional. Interessado em oportunidades de desenvolvimento de software, estágios e projetos que me permitam crescer na área tecnológica.',
    fr: 'À la recherche de ma première expérience professionnelle. Intéressé par les opportunités de développement logiciel, les stages et les projets me permettant de progresser dans le domaine technologique.'
  },
  // Correo que recibe los mensajes del formulario (vía formsubmit.co)
  formEmail: 'criolloandres2003@gmail.com',
  links: [
    { label: 'LINKEDIN', value: 'Andrés David Criollo', icon: Linkedin, url: 'https://www.linkedin.com/in/andr%C3%A9s-david-criollo-rosero-84a452337' },
    { label: 'GITHUB', value: 'andresc1108', icon: Github, url: 'https://github.com/andresc1108' }
  ],
  footer: {
    es: '© 2026 — Pasto, Nariño, Colombia',
    en: '© 2026 — Pasto, Nariño, Colombia',
    pt: '© 2026 — Pasto, Nariño, Colômbia',
    fr: '© 2026 — Pasto, Nariño, Colombie'
  }
};
