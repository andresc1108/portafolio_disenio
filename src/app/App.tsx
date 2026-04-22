import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Sun,
  Moon,
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Database,
  Palette,
  Wrench,
  Users,
  GraduationCap,
  Quote,
  ExternalLink,
  Brain,
  Heart,
  Zap,
  Target,
  Award,
  BookOpen,
  Briefcase,
  MapPin,
  Calendar,
  TrendingUp,
  ChevronDown,
  Menu,
  X,
  Music,
  Activity
} from 'lucide-react';
import fotoMia from '../assets/foto.jpeg';
import cvFile from '../assets/cv andres criollo.pdf';

type Language = 'es' | 'en' | 'pt' | 'fr';

// Context for theme
const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
});

// Context for language
const LanguageContext = createContext({
  language: 'es' as Language,
  setLanguage: (lang: Language) => {}
});

// Translations
const translations = {
  es: {
    nav: {
      about: 'SOBRE MÍ',
      services: 'SERVICIOS',
      projects: 'PROYECTOS',
      testimonials: 'TESTIMONIOS',
      contact: 'CONTACTO'
    },
    hero: {
      available: 'DISPONIBLE PARA OPORTUNIDADES',
      subtitle: 'Estudiante de Ingeniería de Software',
      description: 'en la Universidad Cooperativa de Colombia. Apasionado por construir experiencias digitales con tecnologías y creatividad.',
      location: 'PASTO, NARIÑO, COLOMBIA',
      contact: 'CONTACTAR',
      projects: 'VER PROYECTOS'
    },
    about: {
      title: 'SOBRE MÍ',
      text: 'Técnico en desarrollo y soporte de la información',
      description: 'Me apasiona crear soluciones tecnológicas innovadoras que generen impacto positivo. Cuento con experiencia en desarrollo full stack, trabajando con metodologías ágiles y tecnologías modernas.',
      yearsLabel: 'Experiencia en Software',
      projectsLabel: 'Proyectos completados',
      technologiesLabel: 'Tecnologías dominadas'
    },
    services: {
      title: 'SERVICIOS',
      list: [
        {
          title: 'Desarrollo Web Frontend',
          tags: ['REACT', 'NEXT.JS','TAILWIND', 'TYPESCRIPT','FRAMER MOTION']
        },
        {
          title: 'Desarrollo Backend & APIs',
          tags: ['EXPRESS', 'FASTAPI','REST API','MongoDB','IA']
        },
        {
          title: 'Diseño UI/UX',
          tags: ['FIGMA', 'DESIGN SYSTEMS', 'WIREFRAMING', 'PROTOTIPADO', 'FRAMER']
        },
        {
          title: 'Desarrollo de Aplicaciones Web',
          tags: ['REACT', 'NODE.JS','VITE','DOCKER','CI/CD']
        },
        {
          title: 'Soporte Técnico & Sistemas',
          tags: ['BASH','LINUX','REDES', 'CIBERSEGURIDAD','VIRTUALIZACIÓN']
        },
        {
          title: 'Consultoría de Software',
          tags: ['SCRUM','AGILE', 'GIT FLOW', 'DOCUMENTACIÓN', 'CLEAN CODE']
        }
      ]
    },
    skills: {
      title: 'HABILIDADES'
    },
    stack: {
      title: 'STACK TECH',
      description: 'Las herramientas y tecnologías con las que trabajo día a día para construir productos digitales modernos y escalables.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      database: 'BASE DE DATOS',
      tools: 'HERRAMIENTAS'
    },
    projects: {
      title: 'PROYECTOS',
      university: 'PROYECTO UNIVERSITARIO',
      items: [
        {
          number: '01',
          name: 'EMOIA',
          description: 'Plataforma web que analiza el comportamiento de los usuarios mediante patrones de interacción para detectar posibles casos de ansiedad o depresión, facilitando una intervención temprana.',
          tags: ['REACT', 'NODE.JS', 'MONGODB', 'PYTHON'],
          link: 'https://github.com/Alcstr/proyectos-estructuras'
        },
        {
          number: '02',
          name: 'ANDES_SOUND',
          description: 'Reproductor de música desarrollado con tecnologías web modernas. Permite gestionar y reproducir listas de reproducción con una interfaz intuitiva y responsiva.',
          tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
          link: 'https://github.com/andresc1108/andes_sound'
        }
      ]
    },
    experience: {
      title: 'EXPERIENCIA',
      current: 'PRESENTE',
      items: [
        {
          year: '2024',
          position: 'Proyectos Universitarios',
          company: 'Desarrollador de Software — Universidad Cooperativa de Colombia',
          description: 'Desarrollo de proyectos académicos aplicando metodologías ágiles, trabajo en equipo y tecnologías modernas como React, Node.js y MongoDB. Participación en proyectos con impacto real como EMOIA y ANDES_SOUND.',
          status: 'EN BÚSQUEDA DE MI PRIMERA EXPERIENCIA PROFESIONAL'
        }
      ]
    },
    education: {
      title: 'EDUCACIÓN',
      items: [
        {
          years: '2024 — Presente',
          degree: 'Ingeniería de Software',
          institution: 'Universidad Cooperativa de Colombia',
          location: '5to Semestre'
        },
        {
          years: '2023 — 2024',
          degree: 'Técnico en Asistencia y Soporte de la Información',
          institution: 'Instituto INESUR'
        },
        {
          years: '2011 — 2021',
          degree: 'Bachiller Técnico',
          institution: 'Colegio Técnico Industrial',
          location: 'Pasto'
        }
      ]
    },
    testimonials: {
      title: 'TESTIMONIOS',
      items: [
        {
          quote: 'Desarrolló un excelente reproductor de música, fácil de usar y intuitivo!',
          name: 'Gabriela Cuastumal',
          role: 'Usuario activo-andes sound'
        },
        {
          quote: 'La mejor app de música que he usado. Interfaz hermosa y fluida, me encanta la experiencia de usuario!',
          name: 'Carlos Martínez',
          role: 'Músico profesional'
        },
        {
          quote: 'Su app ha ayudado a la mejora con mis pacientes, gracias!!',
          name: 'Ruth Rosero',
          role: 'Psicóloga/usuaria activa-emoia'
        }
      ]
    },
    contact: {
      title: 'CONTACTO',
      subtitle: '¿HABLAMOS?',
      description: 'Actualmente en búsqueda de mi primera experiencia profesional. Abierto a prácticas, proyectos freelance y colaboraciones.',
      form: {
        name: 'Nombre',
        company: 'Empresa',
        phone: 'Teléfono',
        email: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar',
        sending: 'Enviando...',
        requiredError: 'Por favor completa nombre, correo, teléfono y mensaje.',
        prefillSubject: 'Deseo contactarte',
        prefillMessage: 'Deseo contactarte. Estoy interesado en contactarte sobre oportunidades relacionadas con Ingeniería de Software.'
      },
      email: 'EMAIL',
      linkedin: 'LINKEDIN',
      phone: 'TELÉFONO',
      github: 'GITHUB',
      footer: '© 2026 — Pasto, Nariño, Colombia'
    }
  },
  en: {
    nav: {
      about: 'ABOUT ME',
      services: 'SERVICES',
      projects: 'PROJECTS',
      testimonials: 'TESTIMONIALS',
      contact: 'CONTACT'
    },
    hero: {
      available: 'AVAILABLE FOR OPPORTUNITIES',
      subtitle: 'Software Engineering Student',
      description: 'at Universidad Cooperativa de Colombia. Passionate about building digital experiences with technologies and creativity.',
      location: 'PASTO, COLOMBIA',
      contact: 'CONTACT',
      projects: 'VIEW PROJECTS'
    },
    about: {
      title: 'ABOUT ME',
      text: 'Technical support and information systems developer',
      description: 'I\'m passionate about creating innovative technological solutions that generate positive impact. I have experience in full stack development, working with agile methodologies and modern technologies.',
      yearsLabel: 'Software Experience',
      projectsLabel: 'Completed projects',
      technologiesLabel: 'Technologies mastered'
    },
    services: {
      title: 'SERVICES',
      list: [
        {
          title: 'Frontend Web Development',
          tags: ['REACT', 'NEXT.JS', 'TAILWIND', 'TYPESCRIPT', 'FRAMER MOTION']
        },
        {
          title: 'Backend Development & APIs',
          tags: ['EXPRESS', 'FASTAPI', 'REST API', 'MongoDB', 'IA']
        },
        {
          title: 'UI/UX Design',
          tags: ['FIGMA', 'DESIGN SYSTEMS', 'WIREFRAMING', 'PROTOTYPING', 'FRAMER']
        },
        {
          title: 'Web Application Development',
          tags: ['REACT', 'NODE.JS', 'VITE', 'DOCKER', 'CI/CD']
        },
        {
          title: 'Technical Support & Systems',
          tags: ['BASH', 'LINUX', 'NETWORKS', 'CYBERSECURITY', 'VIRTUALIZATION']
        },
        {
          title: 'Software Consulting',
          tags: ['SCRUM', 'AGILE', 'GIT FLOW', 'DOCUMENTATION', 'CLEAN CODE']
        }
      ]
    },
    skills: {
      title: 'SKILLS'
    },
    stack: {
      title: 'TECH STACK',
      description: 'The tools and technologies I work with day to day to build modern and scalable digital products.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      database: 'DATABASE',
      tools: 'TOOLS'
    },
    projects: {
      title: 'PROJECTS',
      university: 'UNIVERSITY PROJECT',
      items: [
        {
          number: '01',
          name: 'EMOIA',
          description: 'Web platform that analyzes user behavior through interaction patterns to detect possible cases of anxiety or depression, facilitating early intervention.',
          tags: ['REACT', 'NODE.JS', 'MONGODB', 'PYTHON'],
          link: 'https://github.com/Alcstr/proyectos-estructuras'
        },
        {
          number: '02',
          name: 'ANDES_SOUND',
          description: 'Music player developed with modern web technologies. Allows managing and playing playlists with an intuitive and responsive interface.',
          tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
          link: 'https://github.com/andresc1108/andes_sound.git'
        }
      ]
    },
    experience: {
      title: 'EXPERIENCE',
      current: 'PRESENT',
      items: [
        {
          year: '2024',
          position: 'University Projects',
          company: 'Software Developer — Universidad Cooperativa de Colombia',
          description: 'Development of academic projects applying agile methodologies, teamwork and modern technologies such as React, Node.js and MongoDB. Participation in real impact projects like EMOIA and ANDES_SOUND.',
          status: 'LOOKING FOR MY FIRST PROFESSIONAL EXPERIENCE'
        }
      ]
    },
    education: {
      title: 'EDUCATION',
      items: [
        {
          years: '2024 — Present',
          degree: 'Software Engineering',
          institution: 'Universidad Cooperativa de Colombia',
          location: '5th Semester'
        },
        {
          years: '2023 — 2024',
          degree: 'Technical Support and Information Systems',
          institution: 'INESUR Institute'
        },
        {
          years: '2011 — 2021',
          degree: 'Technical High School',
          institution: 'Industrial Technical College',
          location: 'Pasto'
        }
      ]
    },
    testimonials: {
      title: 'TESTIMONIALS',
      items: [
        {
          quote: 'Desarrolló un excelente reproductor de música, fácil de usar y intuitivo!',
          name: 'Gabriela Cuastumal',
          role: 'Usuario activo-andes sound'
        },
        {
          quote: 'La mejor app de música que he usado. Interfaz hermosa y fluida, me encanta la experiencia de usuario!',
          name: 'Carlos Martínez',
          role: 'Músico profesional'
        },
        {
          quote: 'Su app ha ayudado a la mejora con mis pacientes, gracias!!',
          name: 'Ruth Rosero',
          role: 'Psicóloga/usuaria activa-emoia'
        }
      ]
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'LET\'S TALK?',
      description: 'Currently looking for my first professional experience. Open to internships, freelance projects and collaborations.',
      form: {
        name: 'Name',
        company: 'Company',
        phone: 'Phone',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        requiredError: 'Please fill name, email, phone and message.',
        prefillSubject: 'I want to contact you',
        prefillMessage: 'I want to contact you. I am interested in opportunities related to Software Engineering.'
      },
      email: 'EMAIL',
      linkedin: 'LINKEDIN',
      phone: 'PHONE',
      github: 'GITHUB',
      footer: '© 2026 — Pasto, Nariño, Colombia'
    }
  },
  pt: {
    nav: {
      about: 'SOBRE MIM',
      services: 'SERVIÇOS',
      projects: 'PROJETOS',
      testimonials: 'DEPOIMENTOS',
      contact: 'CONTATO'
    },
    hero: {
      available: 'DISPONÍVEL PARA OPORTUNIDADES',
      subtitle: 'Estudante de Engenharia de Software',
      description: 'na Universidad Cooperativa de Colombia. Apaixonado por construir experiências digitais com tecnologias e criatividade.',
      location: 'PASTO, COLÔMBIA',
      contact: 'CONTATAR',
      projects: 'VER PROJETOS'
    },
    about: {
      title: 'SOBRE MIM',
      text: 'Técnico em desenvolvimento e suporte de informação',
      description: 'Sou apaixonado por criar soluções tecnológicas inovadoras que geram impacto positivo. Tenho experiência em desenvolvimento full stack, trabalhando com metodologias ágeis e tecnologias modernas.',
      yearsLabel: 'Experiência em Software',
      projectsLabel: 'Projetos concluídos',
      technologiesLabel: 'Tecnologias dominadas'
    },
    services: {
      title: 'SERVIÇOS',
      list: [
        {
          title: 'Desenvolvimento Web Frontend',
          tags: ['REACT', 'NEXT.JS', 'TAILWIND', 'TYPESCRIPT', 'FRAMER MOTION']
        },
        {
          title: 'Desenvolvimento Backend & APIs',
          tags: ['EXPRESS', 'FASTAPI', 'REST API', 'MongoDB', 'IA']
        },
        {
          title: 'Design UI/UX',
          tags: ['FIGMA', 'DESIGN SYSTEMS', 'WIREFRAMING', 'PROTOTIPAGEM', 'FRAMER']
        },
        {
          title: 'Desenvolvimento de Aplicações Web',
          tags: ['REACT', 'NODE.JS', 'VITE', 'DOCKER', 'CI/CD']
        },
        {
          title: 'Suporte Técnico & Sistemas',
          tags: ['BASH', 'LINUX', 'REDES', 'CIBERSEGURANÇA', 'VIRTUALIZAÇÃO']
        },
        {
          title: 'Consultoria de Software',
          tags: ['SCRUM', 'AGILE', 'GIT FLOW', 'DOCUMENTAÇÃO', 'CLEAN CODE']
        }
      ]
    },
    skills: {
      title: 'HABILIDADES'
    },
    stack: {
      title: 'STACK TECH',
      description: 'As ferramentas e tecnologias com as quais trabalho diariamente para construir produtos digitais modernos e escaláveis.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      database: 'BANCO DE DADOS',
      tools: 'FERRAMENTAS'
    },
    projects: {
      title: 'PROJETOS',
      university: 'PROJETO UNIVERSITÁRIO',
      items: [
        {
          number: '01',
          name: 'EMOIA',
          description: 'Plataforma web que analisa o comportamento dos usuários através de padrões de interação para detectar possíveis casos de ansiedade ou depressão, facilitando uma intervenção precoce.',
          tags: ['REACT', 'NODE.JS', 'MONGODB', 'PYTHON'],
          link: 'https://github.com/Alcstr/proyectos-estructuras'
        },
        {
          number: '02',
          name: 'ANDES_SOUND',
          description: 'Reprodutor de música desenvolvido com tecnologias web modernas. Permite gerenciar e reproduzir listas de reprodução com interface intuitiva e responsiva.',
          tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
          link: 'https://github.com/andresc1108/andes_sound.git'
        }
      ]
    },
    experience: {
      title: 'EXPERIÊNCIA',
      current: 'PRESENTE',
      items: [
        {
          year: '2024',
          position: 'Projetos Universitários',
          company: 'Desenvolvedor de Software — Universidad Cooperativa de Colombia',
          description: 'Desenvolvimento de projetos acadêmicos aplicando metodologias ágeis, trabalho em equipe e tecnologias modernas como React, Node.js e MongoDB. Participação em projetos com impacto real como EMOIA e ANDES_SOUND.',
          status: 'EM BUSCA DA MINHA PRIMEIRA EXPERIÊNCIA PROFISSIONAL'
        }
      ]
    },
    education: {
      title: 'EDUCAÇÃO',
      items: [
        {
          years: '2024 — Presente',
          degree: 'Engenharia de Software',
          institution: 'Universidad Cooperativa de Colombia',
          location: '5º Semestre'
        },
        {
          years: '2022 — 2024',
          degree: 'Técnico em Assistência e Suporte de Informação',
          institution: 'Instituto INESUR'
        },
        {
          years: '2011 — 2021',
          degree: 'Ensino Médio Técnico',
          institution: 'Colégio Técnico Industrial',
          location: 'Pasto'
        }
      ]
    },
    testimonials: {
      title: 'DEPOIMENTOS',
      items: [
        {
          quote: 'Desarrolló un excelente reproductor de música, fácil de usar y intuitivo!',
          name: 'Gabriela Cuastumal',
          role: 'Usuario activo-andes sound'
        },
        {
          quote: 'La mejor app de música que he usado. Interfaz hermosa y fluida, me encanta la experiencia de usuario!',
          name: 'Carlos Martínez',
          role: 'Músico profesional'
        },
        {
          quote: 'Su app ha ayudado a la mejora con mis pacientes, gracias!!',
          name: 'Ruth Rosero',
          role: 'Psicóloga/usuaria activa-emoia'
        }
      ]
    },
    contact: {
      title: 'CONTATO',
      subtitle: 'VAMOS CONVERSAR?',
      description: 'Atualmente em busca da minha primeira experiência profissional. Aberto a estágios, projetos freelance e colaborações.',
      form: {
        name: 'Nome',
        company: 'Empresa',
        phone: 'Telefone',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar',
        sending: 'Enviando...',
        requiredError: 'Por favor preencha nome, email, telefone e mensagem.',
        prefillSubject: 'Desejo contatar você',
        prefillMessage: 'Desejo contatar você. Estou interessado em oportunidades relacionadas à Engenharia de Software.'
      },
      email: 'EMAIL',
      linkedin: 'LINKEDIN',
      phone: 'TELEFONE',
      github: 'GITHUB',
      footer: '© 2026 — Pasto, Nariño, Colômbia'
    }
  },
  fr: {
    nav: {
      about: 'À PROPOS',
      services: 'SERVICES',
      projects: 'PROJETS',
      testimonials: 'TÉMOIGNAGES',
      contact: 'CONTACT'
    },
    hero: {
      available: 'DISPONIBLE POUR DES OPPORTUNITÉS',
      subtitle: 'Étudiant en Génie Logiciel',
      description: 'à l\'Universidad Cooperativa de Colombia. Passionné par la création d\'expériences numériques avec technologies et créativité.',
      location: 'PASTO, COLOMBIE',
      contact: 'CONTACTER',
      projects: 'VOIR PROJETS'
    },
    about: {
      title: 'À PROPOS DE MOI',
      text: 'Technicien en développement et support informatique',
      description: 'Je suis passionné par la création de solutions technologiques innovantes qui génèrent un impact positif. J\'ai de l\'expérience en développement full stack, travaillant avec des méthodologies agiles et des technologies modernes.',
      yearsLabel: 'Expérience en logiciel',
      projectsLabel: 'Projets complétés',
      technologiesLabel: 'Technologies maîtrisées'
    },
    services: {
      title: 'SERVICES',
      list: [
        {
          title: 'Développement Web Frontend',
          tags: ['REACT', 'NEXT.JS', 'TAILWIND', 'TYPESCRIPT', 'FRAMER MOTION']
        },
        {
          title: 'Développement Backend & APIs',
          tags: ['EXPRESS', 'FASTAPI', 'REST API', 'MongoDB', 'IA']
        },
        {
          title: 'Design UI/UX',
          tags: ['FIGMA', 'DESIGN SYSTEMS', 'WIREFRAMING', 'PROTOTYPAGE', 'FRAMER']
        },
        {
          title: 'Développement d\'Applications Web',
          tags: ['REACT', 'NODE.JS', 'VITE', 'DOCKER', 'CI/CD']
        },
        {
          title: 'Support Technique & Systèmes',
          tags: ['BASH', 'LINUX', 'RÉSEAUX', 'CYBERSÉCURITÉ', 'VIRTUALISATION']
        },
        {
          title: 'Consulting en Logiciel',
          tags: ['SCRUM', 'AGILE', 'GIT FLOW', 'DOCUMENTATION', 'CLEAN CODE']
        }
      ]
    },
    skills: {
      title: 'COMPÉTENCES'
    },
    stack: {
      title: 'STACK TECH',
      description: 'Les outils et technologies avec lesquels je travaille au quotidien pour construire des produits numériques modernes et évolutifs.',
      frontend: 'FRONTEND',
      backend: 'BACKEND',
      database: 'BASE DE DONNÉES',
      tools: 'OUTILS'
    },
    projects: {
      title: 'PROJETS',
      university: 'PROJET UNIVERSITAIRE',
      items: [
        {
          number: '01',
          name: 'EMOIA',
          description: 'Plateforme web qui analyse le comportement des utilisateurs via des modèles d\'interaction pour détecter d\'éventuels cas d\'anxiété ou de dépression, facilitant une intervention précoce.',
          tags: ['REACT', 'NODE.JS', 'MONGODB', 'PYTHON'],
          link: 'https://github.com/Alcstr/proyectos-estructuras'
        },
        {
          number: '02',
          name: 'ANDES_SOUND',
          description: 'Lecteur de musique développé avec des technologies web modernes. Permet de gérer et de lire des listes de lecture avec une interface intuitive et responsive.',
          tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
          link: 'https://github.com/andresc1108/andes_sound.git'
        }
      ]
    },
    experience: {
      title: 'EXPÉRIENCE',
      current: 'PRÉSENT',
      items: [
        {
          year: '2024',
          position: 'Projets Universitaires',
          company: 'Développeur de Logiciels — Universidad Cooperativa de Colombia',
          description: 'Développement de projets académiques en appliquant des méthodologies agiles, le travail d\'équipe et des technologies modernes comme React, Node.js et MongoDB. Participation à des projets à impact réel comme EMOIA et ANDES_SOUND.',
          status: 'À LA RECHERCHE DE MA PREMIÈRE EXPÉRIENCE PROFESSIONNELLE'
        }
      ]
    },
    education: {
      title: 'ÉDUCATION',
      items: [
        {
          years: '2024 — Présent',
          degree: 'Génie Logiciel',
          institution: 'Universidad Cooperativa de Colombia',
          location: '5ème Semestre'
        },
        {
          years: '2022 — 2024',
          degree: 'Technicien en Assistance et Support Informatique',
          institution: 'Institut INESUR'
        },
        {
          years: '2011 — 2021',
          degree: 'Baccalauréat Technique',
          institution: 'Collège Technique Industriel',
          location: 'Pasto'
        }
      ]
    },
    testimonials: {
      title: 'TÉMOIGNAGES',
      items: [
        {
          quote: 'Desarrolló un excelente reproductor de música, fácil de usar y intuitivo!',
          name: 'Gabriela Cuastumal',
          role: 'Usuario activo-andes sound'
        },
        {
          quote: 'La mejor app de música que he usado. Interfaz hermosa y fluida, me encanta la experiencia de usuario!',
          name: 'Carlos Martínez',
          role: 'Músico profesional'
        },
        {
          quote: 'Su app ha ayudado a la mejora con mis pacientes, gracias!!',
          name: 'Ruth Rosero',
          role: 'Psicóloga/usuaria activa-emoia'
        }
      ]
    },
    contact: {
      title: 'CONTACT',
      subtitle: 'ON PARLE?',
      description: 'Actuellement à la recherche de ma première expérience professionnelle. Ouvert aux stages, projets freelance et collaborations.',
      form: {
        name: 'Nom',
        company: 'Entreprise',
        phone: 'Téléphone',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer',
        sending: 'Envoi...',
        requiredError: 'Veuillez renseigner nom, email, téléphone et message.',
        prefillSubject: 'Je souhaite vous contacter',
        prefillMessage: 'Je souhaite vous contacter. Je suis intéressé par des opportunités liées au Génie Logiciel.'
      },
      email: 'EMAIL',
      linkedin: 'LINKEDIN',
      phone: 'TÉLÉPHONE',
      github: 'GITHUB',
      footer: '© 2026 — Pasto, Nariño, Colombie'
    }
  }
};

const languageNames = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
  fr: 'FR'
};

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<Language>('es');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div
          className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} showLangMenu={showLangMenu} setShowLangMenu={setShowLangMenu} />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <StackSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

// Navigation Component
function Navigation({ mobileMenuOpen, setMobileMenuOpen, showLangMenu, setShowLangMenu }: any) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.05em' }}
        >
          ADCR
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: t.nav.about, href: '#about' },
            { label: t.nav.services, href: '#services' },
            { label: t.nav.projects, href: '#projects' },
            { label: t.nav.testimonials, href: '#testimonials' },
            { label: t.nav.contact, href: '#contact' }
          ].map(item => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="text-sm tracking-wider hover:text-blue-500 transition-colors"
              style={{ fontWeight: 600 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          {/* Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              style={{ fontWeight: 700 }}
            >
              <Globe size={18} />
              <span className="text-xs">{languageNames[language]}</span>
              <ChevronDown size={14} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute top-full mt-2 right-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-hidden min-w-[120px]`}
                >
                  {Object.entries(languageNames).map(([lang, name]) => (
                    <motion.button
                      key={lang}
                      whileHover={{ backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)' }}
                      onClick={() => {
                        setLanguage(lang as Language);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm ${language === lang ? 'text-blue-500' : ''}`}
                      style={{ fontWeight: 600 }}
                    >
                      {name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg ${theme === 'dark' ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' : 'bg-gray-800 text-white hover:bg-gray-700'} transition-colors`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} overflow-hidden`}
          >
            <div className="px-6 py-4 space-y-3">
              {[
                { label: t.nav.about, href: '#about' },
                { label: t.nav.services, href: '#services' },
                { label: t.nav.projects, href: '#projects' },
                { label: t.nav.testimonials, href: '#testimonials' },
                { label: t.nav.contact, href: '#contact' }
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm hover:text-blue-500 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await fetch(cvFile as unknown as string);
        if (!res.ok) throw new Error('PDF not available');
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Andres_CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (err) {
        try {
          window.open(cvFile as unknown as string, '_blank');
        } catch (e) {
          alert('No se pudo descargar el CV. Por favor reemplaza src/assets/cv andres criollo.pdf con tu archivo PDF.');
        }
      }
    })();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
            <span className="text-xs text-blue-500 tracking-wider" style={{ fontWeight: 700 }}>{t.hero.available}</span>
          </div>

          <h1 className="mb-6">
            <div className="text-5xl md:text-7xl lg:text-8xl tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
              ANDRÉS DAVID
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-blue-500" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.04em' }}>
              CRIOLLO
            </div>
          </h1>

          <p className={`text-lg md:text-xl mb-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>
            {t.hero.subtitle} <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>{t.hero.description}</span>
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin size={16} className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} />
            <span className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} tracking-wider`} style={{ fontWeight: 700 }}>{t.hero.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontWeight: 700 }}
            >
              {t.hero.contact}
              <ExternalLink size={16} />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto px-8 py-3 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} rounded-lg transition-colors flex items-center justify-center`}
              style={{ fontWeight: 700 }}
            >
              {t.hero.projects}
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full md:w-auto px-8 py-3 ${theme === 'dark' ? 'border border-blue-500 hover:bg-blue-500/10' : 'border border-blue-500 hover:bg-blue-500/10'} rounded-lg transition-colors flex items-center justify-center gap-2 text-blue-500`}
              style={{ fontWeight: 700 }}
            >
              {language === 'es' ? 'Descargar CV' : language === 'en' ? 'Download CV' : language === 'pt' ? 'Baixar CV' : 'Télécharger CV'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className={`aspect-square ${theme === 'dark' ? 'bg-gradient-to-br from-red-900 via-gray-900 to-black' : 'bg-gradient-to-br from-red-300 via-gray-300 to-gray-100'} rounded-2xl overflow-hidden border-2 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} group-hover:border-blue-500 transition-all duration-300`}
              style={{ boxShadow: theme === 'dark' ? '0 0 30px 8px rgba(255, 255, 255, 0.18)' : '0 0 30px 8px rgba(0, 0, 0, 0.18)' }}
>
              {/* AQUÍ PUEDES CAMBIAR TU IMAGEN DE PERFIL */}
              {/* Reemplaza el div de abajo con: <img src="URL_DE_TU_IMAGEN" alt="Andrés David Criollo" className="w-full h-full object-cover" /> */}
              <img 
              src={fotoMia}
               alt="Andrés David Criollo" 
               className="w-full h-full object-cover" 
/>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`absolute -bottom-4 -right-4 px-6 py-3 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg text-sm shadow-xl`}
              style={{ fontWeight: 700 }}
            >
              {t.about.text}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.8 }}>
              {t.about.description}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '2+', label: t.about.yearsLabel, icon: Zap },
                { value: '2+', label: t.about.projectsLabel, icon: Target },
                { value: '8+', label: t.about.technologiesLabel, icon: Award }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl transition-all border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'}`}
                >
                  <stat.icon size={24} className="mb-3 text-blue-500" />
                  <div className="text-3xl mb-1" style={{ fontWeight: 900 }}>{stat.value}</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const serviceIcons = [Code2, Database, Palette, Briefcase, Wrench, Users];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.services.title}
        </motion.h2>

        <div className={`p-8 md:p-12 border-2 ${theme === 'dark' ? 'border-blue-500/30 hover:border-blue-500/50' : 'border-blue-500/50 hover:border-blue-500/70'} rounded-2xl transition-all`}>
          {t.services.list.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.05)' }}
                className={`py-6 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} last:border-b-0 rounded-lg px-4 transition-all`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Icon size={28} className="text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl md:text-2xl" style={{ fontWeight: 700 }}>{service.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/30 text-blue-700'} rounded border ${theme === 'dark' ? 'border-blue-500/30' : 'border-blue-500/50'}`}
                        style={{ fontWeight: 700 }}
                      >
                        {tag}
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

// Skills Section
function SkillsSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
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

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.skills.title}
        </motion.h2>

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
              <div className="mb-2" style={{ fontWeight: 700 }}>{skill.name}</div>
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

// Stack Section
function StackSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const stack = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
    backend: ['Node.js', 'Python', 'Java', 'REST APIs'],
    database: ['MongoDB', 'SQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman']
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.stack.title}
        </motion.h2>

        <p className={`text-lg mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl`} style={{ fontWeight: 500 }}>
          {t.stack.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(stack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-800 bg-white/5' : 'border-gray-200 bg-black/5'}`}
            >
              <h3 className="text-xs text-blue-500 tracking-wider mb-4" style={{ fontWeight: 800 }}>
                {t.stack[category as keyof typeof t.stack]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
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

// Projects Section
function ProjectsSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const projectIcons = [Brain, Music];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => {
            const Icon = projectIcons[index];
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
                    <span className="text-xs text-blue-500" style={{ fontWeight: 800 }}>{project.number}</span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`} style={{ fontWeight: 700 }}>{t.projects.university}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={40} className="text-blue-500" />
                    <h3 className="text-3xl group-hover:text-blue-500 transition-colors" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>{project.name}</h3>
                  </div>

                  <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.7 }}>
                    {project.description}
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

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-sm text-blue-500 flex items-center gap-2 group/link"
                    style={{ fontWeight: 700 }}
                  >
                    {language === 'es' ? 'Ver proyecto' : language === 'en' ? 'View project' : language === 'pt' ? 'Ver projeto' : 'Voir projet'}
                    <ExternalLink size={14} className="group-hover/link:rotate-45 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.experience.title}
        </motion.h2>

        {t.experience.items.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className={`mb-8 p-8 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} transition-all`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={20} className="text-blue-500" />
              <span className="text-xs text-blue-500" style={{ fontWeight: 800 }}>{exp.year} — {t.experience.current}</span>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Briefcase size={28} className="text-blue-500 mt-1" />
              <h3 className="text-2xl" style={{ fontWeight: 800 }}>{exp.position}</h3>
            </div>

            <p className={`mb-4 ml-11 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{exp.company}</p>
            <p className={`text-sm mb-4 ml-11 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 500, lineHeight: 1.7 }}>{exp.description}</p>
            <p className={`text-xs ml-11 px-4 py-2 inline-block rounded-lg ${theme === 'dark' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'bg-blue-500/20 text-blue-700 border border-blue-500/50'}`} style={{ fontWeight: 700 }}>{exp.status}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const icons = [GraduationCap, BookOpen, Award];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.education.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.education.items.map((edu, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-xl border ${theme === 'dark' ? 'border-gray-800 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-500'} transition-all group`}
              >
                <Icon size={40} className="mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <div className="text-xs text-blue-500 mb-3" style={{ fontWeight: 800 }}>{edu.years}</div>
                <h3 className="text-lg mb-2" style={{ fontWeight: 800 }}>{edu.degree}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{edu.institution}</p>
                {edu.location && (
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={12} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} />
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`} style={{ fontWeight: 600 }}>{edu.location}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.testimonials.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((testimonial, index) => (
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
                {testimonial.quote}
              </p>

              <div className="mt-3">
                <motion.div whileHover={{ scale: 1.02 }} style={{ fontWeight: 700 }}>{testimonial.name}</motion.div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`} style={{ fontWeight: 600 }}>{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function InfoCard({ onPrefill }: { onPrefill: (data: Partial<Record<string, string>>) => void }) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleDownload = (e: any) => {
    e.preventDefault();
    // Prefill form with subject & message localized
    onPrefill({ subject: t.contact.form.prefillSubject, message: t.contact.form.prefillMessage });

    // Try to fetch the PDF first to provide a nicer error if missing
    (async () => {
      try {
        const res = await fetch(cvFile as unknown as string);
        if (!res.ok) throw new Error('PDF not available');
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Andres_CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (err) {
        // graceful fallback: open in new tab (may show built-in PDF error) or show alert
        try {
          window.open(cvFile as unknown as string, '_blank');
        } catch (e) {
          // eslint-disable-next-line no-alert
          alert('No se pudo descargar el CV. Por favor reemplaza src/assets/Andres_CV.pdf con tu archivo PDF.');
        }
      }
    })();
  };

  const handlePrefill = (e: any) => {
    e.preventDefault();
    onPrefill({ subject: t.contact.form.prefillSubject, message: t.contact.form.prefillMessage });
    // Scroll to form and focus
    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('input[name="name"]');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
    }, 100);
  };

  return (
    <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30'}`}>
      <div className="flex items-start gap-4">
        <Activity size={32} className="text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="w-full">
          <h4 className="text-base font-bold mb-2">{language === 'es' ? 'Estudiante de Ingeniería de Software' : language === 'en' ? 'Software Engineering Student' : language === 'pt' ? 'Estudante de Engenharia de Software' : 'Étudiant en Génie Logiciel'}</h4>
          <p className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700'} style={{ fontWeight: 500, lineHeight: 1.6 }}>{language === 'es' ? 'En búsqueda de mi primera experiencia profesional. Interesado en oportunidades relacionadas con desarrollo de software, prácticas y proyectos que me permitan crecer en el área tecnológica.' : language === 'en' ? 'Looking for my first professional experience. Interested in software development opportunities, internships, and projects that allow me to grow in the tech field.' : language === 'pt' ? 'Em busca da minha primeira experiência profissional. Interessado em oportunidades de desenvolvimento de software, estágios e projetos que me permitam crescer na área tecnológica.' : 'À la recherche de ma première expérience professionnelle. Intéressé par les opportunités de développement logiciel, les stages et les projets me permettant de progresser dans le domaine technologique.'}</p>

          <div className="mt-4 flex gap-2">
            <button onClick={handlePrefill} className="px-3 py-2 bg-blue-500 text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors">{language === 'es' ? 'Contáctame' : language === 'en' ? 'Contact me' : language === 'pt' ? 'Contato' : 'Contactez-moi'}</button>
            <button onClick={handleDownload} className="px-3 py-2 border border-blue-500 text-blue-500 rounded-full text-xs font-bold hover:bg-blue-500/10 transition-colors">{language === 'es' ? 'Descargar CV' : language === 'en' ? 'Download CV' : language === 'pt' ? 'Baixar CV' : 'Télécharger CV'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ form, setForm }: { form: any; setForm: any }) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const submitViaForm = (data: Record<string, string>) => {
    const f = document.createElement('form');
    f.action = 'https://formsubmit.co/criolloandres2003@gmail.com';
    f.method = 'POST';
    f.target = '_blank';

    Object.entries(data).forEach(([k, v]) => {
      const i = document.createElement('input');
      i.type = 'hidden';
      i.name = k;
      i.value = v;
      f.appendChild(i);
    });

    const subj = document.createElement('input');
    subj.type = 'hidden';
    subj.name = '_subject';
    subj.value = `Nuevo mensaje desde portfolio: ${data.subject || 'Contacto'}`;
    f.appendChild(subj);

    document.body.appendChild(f);
    f.submit();
    f.remove();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    // Validation: require name, email, phone, message
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus(t.contact.form.requiredError);
      setSending(false);
      return;
    }

    try {
      submitViaForm({
        name: form.name,
        company: form.company,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        message: form.message
      });

      setStatus(language === 'es' ? 'Enviado. Gracias — revisa tu correo (o la pestaña nueva).' : t.contact.form.send + ' OK');
      setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus(language === 'es' ? 'Ocurrió un error al enviar. Intenta de nuevo.' : 'Error sending message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5 border border-blue-500/20' : 'bg-white border border-gray-200'}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder={t.contact.form.name} className={`w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
          <input name="company" value={form.company} onChange={handleChange} placeholder={t.contact.form.company} className={`w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" value={form.phone} onChange={handleChange} placeholder={t.contact.form.phone} className={`w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
          <input name="email" value={form.email} onChange={handleChange} placeholder={t.contact.form.email} className={`w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
        </div>

        <input name="subject" value={form.subject} onChange={handleChange} placeholder={t.contact.form.subject} className={`w-full px-4 py-3 rounded-full border ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />

        <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contact.form.message} rows={4} className={`w-full px-4 py-3 rounded-xl border resize-none ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />

        <div>
          <button type="submit" disabled={sending} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-bold transition-colors">
            {sending ? t.contact.form.sending : t.contact.form.send}
          </button>
          {status && <div className="mt-3 text-sm text-gray-300">{status}</div>}
        </div>
      </form>
    </div>
  );
}
function ContactSection() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Lifted form state so InfoCard can prefill it
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', subject: '', message: '' });

  const prefillForm = (data: Partial<Record<string, string>>) => {
    setForm(prev => ({ ...prev, ...data }));
    // focus first input
    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('input[name="name"]');
      if (el) el.focus();
    }, 50);
  };

  const contactInfo = [
    { label: t.contact.linkedin, value: 'Andrés David Criollo', icon: Linkedin, link: 'https://www.linkedin.com/in/andr%C3%A9s-david-criollo-rosero-84a452337' },
    { label: t.contact.github, value: 'andresc1108', icon: Github, link: 'https://github.com/andresc1108' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tighter mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.contact.title}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-blue-500 mb-12 tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          {t.contact.subtitle}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} transition-all group`}
              >
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} mb-2`} style={{ fontWeight: 800 }}>{item.label}</div>
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-lg hover:text-blue-500 transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <item.icon size={24} className="group-hover:scale-110 transition-transform text-blue-500" />
                  {item.value}
                </motion.a>
              </motion.div>
            ))}

            <InfoCard onPrefill={prefillForm} />
          </div>

          <div>
            <ContactForm form={form} setForm={setForm} />
          </div>
        </div>

        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="tracking-tighter text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, letterSpacing: '-0.05em' }}>ANDRÉS CRIOLLO</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`} style={{ fontWeight: 600 }}>{t.contact.footer}</div>
        </div>
      </div>
    </section>
  );
}
