'use client';

import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FinalCTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8 sm:space-y-10">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
            {t('finalCTASection.title1')}<br />
            {t('finalCTASection.title2')}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          {t('finalCTASection.subtitle1')}<br />
          {t('finalCTASection.subtitle2')}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-4">
          <Button 
            asChild
            className="bg-yellow-400 hover:bg-yellow-400 text-blue-900 px-8 sm:px-10 py-6 sm:py-7 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <a href="https://line.me/ti/p/oo8YTANb1r" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
              {t('finalCTASection.messageButton')}
            </a>
          </Button>
          <Button 
            asChild
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 sm:px-10 py-6 sm:py-7 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <a href="tel:+66614837772">
              <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
              {t('finalCTASection.callButton')}
            </a>
          </Button>
        </div>

        <div className="pt-6 sm:pt-10 space-y-4 sm:space-y-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
            <p className="text-gray-200 text-base sm:text-lg">
              <span className="text-yellow-400">{t('finalCTASection.lineIdLabel')}</span> Teelake2541<br />
              <span className="text-yellow-400">{t('finalCTASection.phoneLabel')}</span> +66 614837772<br />
              <span className="text-yellow-400">TikTok:</span> <a href="https://www.tiktok.com/@taxiprivatetravel24hours?_r=1&_t=ZS-93EVHNevO8i" target="_blank" rel="noopener noreferrer">@taxiprivatetravel24hours</a><br />
              <span className="text-yellow-400">Email:</span> Tee08042541@gmail.com
            </p>
            <p className="text-gray-300 text-sm sm:text-base mt-3 sm:mt-4">
              {t('finalCTASection.footerText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}