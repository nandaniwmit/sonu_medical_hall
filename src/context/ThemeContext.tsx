import React, { createContext, useContext, useEffect, useState } from 'react';

export type FontStyleOption = 'modern-sora' | 'clean-sans' | 'display-syne' | 'geometric-outfit';

export interface FontOptionConfig {
  id: FontStyleOption;
  label: string;
  subLabel: string;
  headingFont: string;
  bodyFont: string;
  monoFont: string;
}

export const FONT_OPTIONS: FontOptionConfig[] = [
  {
    id: 'modern-sora',
    label: 'Sora + DM Sans',
    subLabel: 'Modern Clinical Precision',
    headingFont: "'Sora', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    monoFont: "'IBM Plex Mono', monospace"
  },
  {
    id: 'clean-sans',
    label: 'Plus Jakarta + DM Sans',
    subLabel: 'Clean Contemporary',
    headingFont: "'Plus Jakarta Sans', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    monoFont: "'JetBrains Mono', monospace"
  },
  {
    id: 'display-syne',
    label: 'Syne + Sora',
    subLabel: 'Bold Display Tech',
    headingFont: "'Syne', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
    monoFont: "'IBM Plex Mono', monospace"
  },
  {
    id: 'geometric-outfit',
    label: 'Outfit + Jakarta',
    subLabel: 'Geometric High-Density',
    headingFont: "'Outfit', sans-serif",
    bodyFont: "'Plus Jakarta Sans', sans-serif",
    monoFont: "'JetBrains Mono', monospace"
  }
];

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  fontStyle: FontStyleOption;
  setFontStyle: (font: FontStyleOption) => void;
  cycleFontStyle: () => void;
  currentFontConfig: FontOptionConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sonu_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // default high density dark
    }
    return 'dark';
  });

  const [fontStyle, setFontStyleState] = useState<FontStyleOption>(() => {
    if (typeof window !== 'undefined') {
      const savedFont = localStorage.getItem('sonu_font_style') as FontStyleOption;
      if (FONT_OPTIONS.some((f) => f.id === savedFont)) return savedFont;
    }
    return 'modern-sora'; // Default new stylish pairing: Sora + DM Sans + IBM Plex Mono
  });

  const currentFontConfig = FONT_OPTIONS.find((f) => f.id === fontStyle) || FONT_OPTIONS[0];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('sonu_theme', theme);
  }, [theme]);

  // Apply font family CSS variables dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-heading', currentFontConfig.headingFont);
    root.style.setProperty('--font-body', currentFontConfig.bodyFont);
    root.style.setProperty('--font-mono', currentFontConfig.monoFont);
    root.setAttribute('data-font-style', fontStyle);
    localStorage.setItem('sonu_font_style', fontStyle);
  }, [fontStyle, currentFontConfig]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setFontStyle = (newFont: FontStyleOption) => {
    setFontStyleState(newFont);
  };

  const cycleFontStyle = () => {
    const currentIndex = FONT_OPTIONS.findIndex((f) => f.id === fontStyle);
    const nextIndex = (currentIndex + 1) % FONT_OPTIONS.length;
    setFontStyleState(FONT_OPTIONS[nextIndex].id);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        setTheme, 
        fontStyle, 
        setFontStyle, 
        cycleFontStyle,
        currentFontConfig 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
