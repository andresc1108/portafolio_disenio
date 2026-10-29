// Textos fijos de la interfaz (menú, títulos de sección, botones, formulario).
// Casi nunca cambian. El contenido que sí actualizas está en src/data/.

export const ui = {
  nav: {
    about: { es: 'SOBRE MÍ', en: 'ABOUT ME', pt: 'SOBRE MIM', fr: 'À PROPOS' },
    services: { es: 'SERVICIOS', en: 'SERVICES', pt: 'SERVIÇOS', fr: 'SERVICES' },
    projects: { es: 'PROYECTOS', en: 'PROJECTS', pt: 'PROJETOS', fr: 'PROJETS' },
    testimonials: { es: 'TESTIMONIOS', en: 'TESTIMONIALS', pt: 'DEPOIMENTOS', fr: 'TÉMOIGNAGES' },
    contact: { es: 'CONTACTO', en: 'CONTACT', pt: 'CONTATO', fr: 'CONTACT' }
  },
  hero: {
    available: { es: 'DISPONIBLE PARA OPORTUNIDADES', en: 'AVAILABLE FOR OPPORTUNITIES', pt: 'DISPONÍVEL PARA OPORTUNIDADES', fr: 'DISPONIBLE POUR DES OPPORTUNITÉS' },
    contact: { es: 'CONTACTAR', en: 'CONTACT', pt: 'CONTATAR', fr: 'CONTACTER' },
    projects: { es: 'VER PROYECTOS', en: 'VIEW PROJECTS', pt: 'VER PROJETOS', fr: 'VOIR PROJETS' }
  },
  downloadCV: { es: 'Descargar CV', en: 'Download CV', pt: 'Baixar CV', fr: 'Télécharger CV' },
  about: {
    title: { es: 'SOBRE MÍ', en: 'ABOUT ME', pt: 'SOBRE MIM', fr: 'À PROPOS DE MOI' }
  },
  services: {
    title: { es: 'SERVICIOS', en: 'SERVICES', pt: 'SERVIÇOS', fr: 'SERVICES' }
  },
  skills: {
    title: { es: 'HABILIDADES', en: 'SKILLS', pt: 'HABILIDADES', fr: 'COMPÉTENCES' }
  },
  stack: {
    title: { es: 'STACK TECH', en: 'TECH STACK', pt: 'STACK TECH', fr: 'STACK TECH' },
    description: {
      es: 'Las herramientas y tecnologías con las que trabajo día a día para construir productos digitales modernos y escalables.',
      en: 'The tools and technologies I work with day to day to build modern and scalable digital products.',
      pt: 'As ferramentas e tecnologias com as quais trabalho diariamente para construir produtos digitais modernos e escaláveis.',
      fr: 'Les outils et technologies avec lesquels je travaille au quotidien pour construire des produits numériques modernes et évolutifs.'
    }
  },
  projects: {
    title: { es: 'PROYECTOS', en: 'PROJECTS', pt: 'PROJETOS', fr: 'PROJETS' },
    viewProject: { es: 'Ver proyecto', en: 'View project', pt: 'Ver projeto', fr: 'Voir projet' },
    viewDemo: { es: 'Ver demo', en: 'Live demo', pt: 'Ver demo', fr: 'Voir la démo' }
  },
  experience: {
    title: { es: 'EXPERIENCIA', en: 'EXPERIENCE', pt: 'EXPERIÊNCIA', fr: 'EXPÉRIENCE' },
    present: { es: 'PRESENTE', en: 'PRESENT', pt: 'PRESENTE', fr: 'PRÉSENT' }
  },
  education: {
    title: { es: 'EDUCACIÓN', en: 'EDUCATION', pt: 'EDUCAÇÃO', fr: 'ÉDUCATION' },
    present: { es: 'Presente', en: 'Present', pt: 'Presente', fr: 'Présent' }
  },
  testimonials: {
    title: { es: 'TESTIMONIOS', en: 'TESTIMONIALS', pt: 'DEPOIMENTOS', fr: 'TÉMOIGNAGES' }
  },
  contact: {
    title: { es: 'CONTACTO', en: 'CONTACT', pt: 'CONTATO', fr: 'CONTACT' },
    subtitle: { es: '¿HABLAMOS?', en: "LET'S TALK?", pt: 'VAMOS CONVERSAR?', fr: 'ON PARLE?' },
    contactMe: { es: 'Contáctame', en: 'Contact me', pt: 'Contato', fr: 'Contactez-moi' },
    form: {
      name: { es: 'Nombre', en: 'Name', pt: 'Nome', fr: 'Nom' },
      company: { es: 'Empresa', en: 'Company', pt: 'Empresa', fr: 'Entreprise' },
      phone: { es: 'Teléfono', en: 'Phone', pt: 'Telefone', fr: 'Téléphone' },
      email: { es: 'Correo', en: 'Email', pt: 'Email', fr: 'Email' },
      subject: { es: 'Asunto', en: 'Subject', pt: 'Assunto', fr: 'Sujet' },
      message: { es: 'Mensaje', en: 'Message', pt: 'Mensagem', fr: 'Message' },
      send: { es: 'Enviar', en: 'Send', pt: 'Enviar', fr: 'Envoyer' },
      sending: { es: 'Enviando...', en: 'Sending...', pt: 'Enviando...', fr: 'Envoi...' },
      sent: {
        es: 'Enviado. Gracias — revisa tu correo (o la pestaña nueva).',
        en: 'Sent. Thank you — check your email (or the new tab).',
        pt: 'Enviado. Obrigado — verifique seu email (ou a nova aba).',
        fr: 'Envoyé. Merci — vérifiez votre email (ou le nouvel onglet).'
      },
      error: {
        es: 'Ocurrió un error al enviar. Intenta de nuevo.',
        en: 'An error occurred while sending. Please try again.',
        pt: 'Ocorreu um erro ao enviar. Tente novamente.',
        fr: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
      },
      requiredError: {
        es: 'Por favor completa nombre, correo, teléfono y mensaje.',
        en: 'Please fill name, email, phone and message.',
        pt: 'Por favor preencha nome, email, telefone e mensagem.',
        fr: 'Veuillez renseigner nom, email, téléphone et message.'
      },
      prefillSubject: { es: 'Deseo contactarte', en: 'I want to contact you', pt: 'Desejo contatar você', fr: 'Je souhaite vous contacter' },
      prefillMessage: {
        es: 'Deseo contactarte. Estoy interesado en contactarte sobre oportunidades relacionadas con Ingeniería de Software.',
        en: 'I want to contact you. I am interested in opportunities related to Software Engineering.',
        pt: 'Desejo contatar você. Estou interessado em oportunidades relacionadas à Engenharia de Software.',
        fr: 'Je souhaite vous contacter. Je suis intéressé par des opportunités liées au Génie Logiciel.'
      }
    }
  }
};
