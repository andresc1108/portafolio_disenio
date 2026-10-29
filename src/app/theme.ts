import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

export const ThemeContext = createContext({
  theme: 'dark' as Theme,
  toggleTheme: () => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}
