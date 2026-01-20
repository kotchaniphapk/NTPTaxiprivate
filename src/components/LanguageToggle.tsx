'use client';

import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }
  };

  const currentLang = i18n.language || 'th';

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handleClick}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      {currentLang === 'th' ? 'EN' : 'TH'}
    </Button>
  );
}
