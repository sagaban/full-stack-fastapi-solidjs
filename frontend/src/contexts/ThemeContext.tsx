import { createContext, createSignal, useContext, type JSXElement } from 'solid-js';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: () => Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>();

export function ThemeProvider(props: { children: JSXElement }) {
  // Get initial theme from localStorage or default to 'dark'
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved && (saved === 'light' || saved === 'dark')) {
        return saved;
      }
    }
    return 'dark';
  };

  const [theme, setThemeSignal] = createSignal<Theme>(getInitialTheme());

  const setTheme = (newTheme: Theme) => {
    setThemeSignal(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      // Update data-theme attribute on html element for Panda CSS
      // document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.setAttribute('style', `color-scheme: ${newTheme}`);
    }
  };

  const toggleTheme = () => {
    setTheme(theme() === 'dark' ? 'light' : 'dark');
  };

  // Initialize theme on mount
  if (typeof window !== 'undefined') {
    // document.documentElement.setAttribute('data-theme', theme());
    document.documentElement.setAttribute('style', `color-scheme: ${theme()}`);
  }

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
