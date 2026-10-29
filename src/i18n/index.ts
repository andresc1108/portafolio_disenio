import { createContext, useContext } from 'react';

export type Language = 'es' | 'en' | 'pt' | 'fr';

export const languages: Record<Language, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
  fr: 'FR'
};

// Un texto puede ser:
//  - un string simple: se muestra igual en todos los idiomas (nombres, tecnologías, links)
//  - un objeto con sus idiomas: { es: '...', en: '...', pt: '...', fr: '...' }
// Si falta algún idioma, se muestra el español.
export type Text = string | ({ es: string } & Partial<Record<Language, string>>);

export function translate(text: Text, language: Language): string {
  if (typeof text === 'string') return text;
  return text[language] ?? text.es;
}

export const LanguageContext = createContext({
  language: 'es' as Language,
  setLanguage: (_lang: Language) => {}
});

// Uso en componentes: const t = useT();  t(servicio.title)
export function useT() {
  const { language } = useContext(LanguageContext);
  return (text: Text) => translate(text, language);
}
