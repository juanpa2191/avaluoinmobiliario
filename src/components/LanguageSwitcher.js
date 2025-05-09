'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  const handleToggle = () => {
    changeLanguage(locale === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      style={{
        backgroundColor: locale === 'es' ? '#3B82F6' : '#9CA3AF'
      }}
    >
      <span className="sr-only">
        {locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
      </span>
      <span
        className={`
          ${locale === 'es' ? 'translate-x-6' : 'translate-x-1'}
          inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out
        `}
      />
      <span className={`
        absolute text-xs font-medium text-white
        ${locale === 'es' ? 'left-1.5' : 'right-1.5'}
      `}>
        {locale.toUpperCase()}
      </span>
    </button>
  );
}
