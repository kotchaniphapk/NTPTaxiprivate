'use client';

import { VehicleCard } from './VehicleCard';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { FaLine, FaWhatsapp, FaTiktok } from "react-icons/fa6";

export function VehiclesSection() {
  const { t } = useTranslation();
  
  const vehicles = [
    {
      name: t('vehiclesSection.vehicles.sedan.name'),
      seats: t('vehiclesSection.vehicles.sedan.seats'),
      features: t('vehiclesSection.vehicles.sedan.features', { returnObjects: true }) as string[],
      imageQuery: 'toyota camry sedan',
      image: "/sedan.jpg",
    },
    {
      name: t('vehiclesSection.vehicles.suv.name'),
      seats: t('vehiclesSection.vehicles.suv.seats'),
      features: t('vehiclesSection.vehicles.suv.features', { returnObjects: true }) as string[],
      imageQuery: 'luxury car interior',
      image: "/suv.jpg"
    },
    {
      name: t('vehiclesSection.vehicles.alphard.name'),
      seats: t('vehiclesSection.vehicles.alphard.seats'),
      features: t('vehiclesSection.vehicles.alphard.features', { returnObjects: true }) as string[],
      imageQuery: 'luxury van interior',
      image: "/alp.jpg"
    },
    {
      name: t('vehiclesSection.vehicles.van.name'),
      seats: t('vehiclesSection.vehicles.van.seats'),
      features: t('vehiclesSection.vehicles.van.features', { returnObjects: true }) as string[],
      imageQuery: 'hiace van interior',
      image: "/van.jpg"
    }
  ];

  return (
    <section id="vehicles" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="vehicles" className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-4">{t('vehiclesSection.title')}</h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg">{t('vehiclesSection.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-yellow-200">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 mb-3 sm:mb-4 font-bold">
                {t('vehiclesSection.ctaTitle', 'พร้อมให้บริการทุกวัน')}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-2">
                {t('vehiclesSection.ctaSubtitle', 'ติดต่อเราวันนี้เพื่อจองรถของคุณ')}
              </p>
              <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Contact Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <Button 
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://line.me/ti/p/oo8YTANb1r" target="_blank" rel="noopener noreferrer">
                  <FaLine className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.line')}</span>
                  <span className="sm:hidden">LINE</span>
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="tel:+66614837772">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.call')}</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://wa.me/message/O2WMNZYDNUGFF1" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.whatsapp')}</span>
                  <span className="sm:hidden">WA</span>
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://www.tiktok.com/@taxiprivatetravel24hours?_r=1&_t=ZS-93EVHNevO8i" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.tiktok')}</span>
                  <span className="sm:hidden">WC</span>
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-yellow-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-blue-900">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">+66 614837772</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2 text-blue-900">
                  <MessageCircle className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">LINE: Teelake2541</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}