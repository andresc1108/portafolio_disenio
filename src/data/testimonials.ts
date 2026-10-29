// ─────────────────────────────────────────────────────────────
//  TESTIMONIOS
//  quote y role pueden ir en un solo idioma ('...') o en los 4 ({ es, en, pt, fr }).
// ─────────────────────────────────────────────────────────────
import type { Text } from '../i18n';

export const testimonials: { quote: Text; name: string; role: Text }[] = [
  {
    quote: 'Desarrolló un excelente reproductor de música, fácil de usar y intuitivo!',
    name: 'Gabriela Cuastumal',
    role: 'Usuario activo-andes sound'
  },
  {
    quote: 'La mejor app de música que he usado. Interfaz hermosa y fluida, me encanta la experiencia de usuario!',
    name: 'Carlos Martínez',
    role: 'Músico profesional'
  }
];
