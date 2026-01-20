'use client';

import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: '', label: t('navbar.home') },
    { id: 'vehicles', label: t('navbar.vehicles') },
    { id: 'onedaytrip', label: t('navbar.onedaytrip') },
    { id: 'gallery', label: t('navbar.gallery') },
    { id: 'reviews', label: t('navbar.reviews') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <button
            onClick={scrollToTop}
            className="text-2xl text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer"
          >
            NTP Taxi Private
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id) {
                  scrollToSection(item.id);
                } else {
                  scrollToTop();
                }
              }}
              className="text-white hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-blue-700 bg-blue-800">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id) {
                    scrollToSection(item.id);
                  } else {
                    scrollToTop();
                  }
                }}
                className="text-white hover:text-yellow-400 transition-colors text-base font-medium text-left py-2 border-b border-blue-700 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}