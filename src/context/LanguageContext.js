'use client';

import { createContext, useContext, useState } from 'react';
import translationMessages from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es'); // Español por defecto

  const changeLanguage = (newLocale) => {
    if (translationMessages[newLocale]) {
      setLocale(newLocale);
    }
  };

  const t = (key) => {
    if (!key) return '';
    
    const keys = key.split('.');
    let message = translationMessages[locale];
    
    // Si la clave empieza con 'app', removemos ese prefijo ya que ya está incluido en la estructura
    if (keys[0] === 'app') {
      keys.shift();
    }
    
    for (const k of keys) {
      message = message?.[k];
      if (!message) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return message;
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
