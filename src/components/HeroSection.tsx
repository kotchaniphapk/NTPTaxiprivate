'use client';

import { Button } from './ui/button';
import { Check, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FaLine, FaWhatsapp, FaTiktok } from "react-icons/fa6";

function HeroSection() {
  const { t } = useTranslation();
  
  const popularRoutes = [
    t('heroSection.routes.pattaya'),
    t('heroSection.routes.ayutthaya'),
    t('heroSection.routes.huahin'),
    t('heroSection.routes.khaoyai'),
    t('heroSection.routes.rayong'),
    t('heroSection.routes.airport')
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-16 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-10 z-10 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                {t('heroSection.title1')}<br />{t('heroSection.title2')}
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              {t('heroSection.subtitle')}
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 sm:space-y-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-yellow-400/50">
                  <Check className="w-4 h-4 text-blue-900 font-bold" />
                </div>
                <span className="text-base sm:text-lg text-white">{t('heroSection.feature1')}</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-yellow-400/50">
                  <Check className="w-4 h-4 text-blue-900 font-bold" />
                </div>
                <span className="text-base sm:text-lg text-white">{t('heroSection.feature2')}</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-yellow-400/50">
                  <Check className="w-4 h-4 text-blue-900 font-bold" />
                </div>
                <span className="text-base sm:text-lg text-white">{t('heroSection.feature3')}</span>
              </div>
            </div>

            {/* Contact Buttons 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Button 
                asChild
                className="bg-white/95 hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 transition-all text-sm sm:text-base font-medium backdrop-blur-sm"
              >
                <a href="https://line.me/ti/p/oo8YTANb1r" target="_blank" rel="noopener noreferrer">
                  <FaLine className="w-4 sm:w-5 h-4 sm:h-5" />
                  {t('heroSection.line')}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white/95 hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 transition-all text-sm sm:text-base font-medium backdrop-blur-sm"
              >
                <a href="tel:+66614837772">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  {t('heroSection.call')}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white/95 hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 transition-all text-sm sm:text-base font-medium backdrop-blur-sm"
              >
                <a href="https://wa.me/message/O2WMNZYDNUGFF1" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 sm:w-5 h-4 sm:h-5" />
                  {t('heroSection.whatsapp')}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white/95 hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 transition-all text-sm sm:text-base font-medium backdrop-blur-sm"
              >
                <a href="https://www.tiktok.com/@taxiprivatetravel24hours?_r=1&_t=ZS-93EVHNevO8i" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="w-4 sm:w-5 h-4 sm:h-5" />
                  {t('heroSection.tiktok')}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Circular Hero Image */}
          <div className="relative flex justify-center items-center lg:justify-end order-1 lg:order-2 py-8 lg:py-0">
            {/* Main Circular Image with Badge */}
            <div className="relative">
              {/* Yellow Badge - repositioned */}
              <div className="absolute -left-8 sm:-left-16 top-1/4 sm:top-1/3 z-20">
                <div className="w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/50 border-2 sm:border-4 border-white/90 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-blue-900 text-xl sm:text-3xl uppercase">
                      {t('heroSection.service')}
                    </div>
                    <div className="text-blue-900 text-2xl sm:text-4xl uppercase">
                      {t('heroSection.service24')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Circular Image */}
              <div className="relative z-10">
                <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 sm:border-8 border-yellow-400 shadow-2xl shadow-yellow-400/30 ring-4 ring-yellow-400/20">
                  <Image 
                    src= "/Nattapol-Hero.png"
                    alt="Taxi Driver"
                    className="w-full h-full object-contain"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mt-12 sm:mt-20 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl order-3">
          <h3 className="text-blue-900 text-xl sm:text-2xl mb-4 sm:mb-6 text-center">{t('heroSection.popularRoutes')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {popularRoutes.map((route, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 sm:p-4 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 transition-all shadow-sm hover:shadow-md">
                <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shrink-0 shadow-sm"></div>
                <span className="text-blue-900 text-sm sm:text-base">{route}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Big Message */}
        <div className="mt-12 sm:mt-20 text-center order-4 md:pb-20">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 leading-tight px-4">
            {t('heroSection.cta1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400">{t('heroSection.cta2')}</span>
          </h2>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0C240 80 480 80 720 60C960 40 1200 40 1440 60V120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

export { HeroSection };