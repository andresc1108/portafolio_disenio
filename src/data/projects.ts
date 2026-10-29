// ─────────────────────────────────────────────────────────────
//  PROYECTOS
//  El número (01, 02...) se pone solo según el orden de la lista.
//  link: repositorio · demo (opcional): enlace a la app funcionando
// ─────────────────────────────────────────────────────────────
import { Eye, Music } from 'lucide-react';
import type { Text } from '../i18n';

const universityProject = { es: 'PROYECTO UNIVERSITARIO', en: 'UNIVERSITY PROJECT', pt: 'PROJETO UNIVERSITÁRIO', fr: 'PROJET UNIVERSITAIRE' };

export const projects: { name: string; icon: typeof Eye; badge: Text; description: Text; tags: string[]; link: string; demo?: string }[] = [
  {
    name: 'KAWSAY_LENS',
    icon: Eye,
    badge: universityProject,
    description: {
      es: 'Sistema de análisis ocular en tiempo real con inteligencia artificial. Usa la cámara web y MediaPipe para detectar fatiga visual, ojo seco, asimetría y otras condiciones, guarda el historial en la nube y genera reportes en PDF.',
      en: 'Real-time eye analysis system powered by artificial intelligence. It uses the webcam and MediaPipe to detect eye strain, dry eye, asymmetry and other conditions, stores the history in the cloud and generates PDF reports.',
      pt: 'Sistema de análise ocular em tempo real com inteligência artificial. Usa a webcam e o MediaPipe para detectar fadiga visual, olho seco, assimetria e outras condições, salva o histórico na nuvem e gera relatórios em PDF.',
      fr: "Système d'analyse oculaire en temps réel basé sur l'intelligence artificielle. Il utilise la webcam et MediaPipe pour détecter la fatigue visuelle, la sécheresse oculaire, l'asymétrie et d'autres troubles, enregistre l'historique dans le cloud et génère des rapports PDF."
    },
    tags: ['NEXT.JS', 'TYPESCRIPT', 'MEDIAPIPE', 'FIREBASE', 'SPRING BOOT'],
    link: 'https://github.com/andresc1108/kawsay_lens_frontend',
    demo: 'https://kawsaylens.vercel.app'
  },
  {
    name: 'ANDES_SOUND',
    icon: Music,
    badge: universityProject,
    description: {
      es: 'Reproductor de música desarrollado con tecnologías web modernas. Permite gestionar y reproducir listas de reproducción con una interfaz intuitiva y responsiva.',
      en: 'Music player developed with modern web technologies. Allows managing and playing playlists with an intuitive and responsive interface.',
      pt: 'Reprodutor de música desenvolvido com tecnologias web modernas. Permite gerenciar e reproduzir listas de reprodução com interface intuitiva e responsiva.',
      fr: 'Lecteur de musique développé avec des technologies web modernes. Permet de gérer et de lire des listes de lecture avec une interface intuitive et responsive.'
    },
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    link: 'https://github.com/andresc1108/andes_sound',
    demo: 'https://andessound.vercel.app'
  }
];
