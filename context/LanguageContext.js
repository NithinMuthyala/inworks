"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import content from '@/data/content.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  // Persist language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'te')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'te' : 'en';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let result = content[language];
    for (const key of keys) {
      if (result[key] === undefined) return keyPath;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
