import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '../i18n/translations';
import { Category } from '../constants';

interface AppContextType {
  // Theme
  isDark: boolean;
  toggleTheme: () => void;
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  // Sidebar
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  // Account Drawer
  accountOpen: boolean;
  setAccountOpen: (open: boolean) => void;
  // Category filter
  selectedCategory: Category | 'all';
  setSelectedCategory: (cat: Category | 'all') => void;
  // Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const t = translations[language];

  return (
    <AppContext.Provider value={{
      isDark,
      toggleTheme,
      language,
      setLanguage,
      t,
      sidebarOpen,
      setSidebarOpen,
      accountOpen,
      setAccountOpen,
      selectedCategory,
      setSelectedCategory,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
