'use client';

import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { FaLine, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OneDayTripSection() {
  const { t } = useTranslation();

  const trips = [
    {
      title: t('oneDayTripSection.trips.bangkok.title'),
      description: t('oneDayTripSection.trips.bangkok.description'),
      duration: t('oneDayTripSection.trips.bangkok.duration'),
      price: t('oneDayTripSection.trips.bangkok.price'),
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/18/9a/caption.jpg?w=500&h=400&s=1",
      features: t('oneDayTripSection.trips.bangkok.features', { returnObjects: true }) as string[]
    },
    {
      title: t('oneDayTripSection.trips.pattaya.title'),
      description: t('oneDayTripSection.trips.pattaya.description'),
      duration: t('oneDayTripSection.trips.pattaya.duration'),
      price: t('oneDayTripSection.trips.pattaya.price'),
      image: "https://cms.dmpcdn.com/travel/2021/06/17/5edc81c0-cf43-11eb-9afb-9362eaf326d2_original.jpg",
      features: t('oneDayTripSection.trips.pattaya.features', { returnObjects: true }) as string[]
    },
    {
      title: t('oneDayTripSection.trips.ayutthaya.title'),
      description: t('oneDayTripSection.trips.ayutthaya.description'),
      duration: t('oneDayTripSection.trips.ayutthaya.duration'),
      price: t('oneDayTripSection.trips.ayutthaya.price'),
      image: "https://www.drivehub.com/blog/wp-content/uploads/2024/02/01-AY-1024x576.jpg",
      features: t('oneDayTripSection.trips.ayutthaya.features', { returnObjects: true }) as string[]
    }
  ];

  
  const moreRoots = t('moreRoots.trips', { returnObjects: true }) as string[];
  return (
    <section id="onedaytrip" className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-2">{t('oneDayTripSection.title')}</h2>
          <div className="w-12 sm:w-16 h-1 bg-yellow-400 mx-auto mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">{t('oneDayTripSection.subtitle')}</p>
        </div>
        {/* Pickup & Drop-off Services */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl text-blue-900 mb-6 text-center font-medium">{t('oneDayTripSection.pickupTitle')}</h3>
          <div className="sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl order-3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {Object.values(moreRoots).map((route: string, index: number) => (
                <div key={index} className="flex items-center gap-2 bg-linear-to-r from-gray-50 to-white rounded-xl p-2 sm:p-3 hover:bg-linear-to-r hover:from-yellow-50 hover:to-amber-50 transition-all shadow-sm hover:shadow-md">
                  <div className="w-2 h-2 bg-linear-to-br from-yellow-400 to-amber-500 rounded-full shrink-0 shadow-sm"></div>
                  <span className="text-blue-900 text-sm sm:text-base">{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* One Day Trips */}
        <div className="mt-10">
          <h3 className="text-2xl sm:text-3xl text-blue-900 mb-6 text-center font-medium">{t('oneDayTripSection.tripTitle')}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {trips.map((trip, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                {/* Trip Image */}
                <div className="h-40 sm:h-48 overflow-hidden">
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">{trip.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">{trip.description}</p>

                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-yellow-400" />
                        <span>{trip.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-0.5 mb-3">
                      {trip.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-gray-200">
          <div className="bg-linear-to-br from-blue-50 via-yellow-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-yellow-200">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 mb-2 sm:mb-3 font-bold">
                {t('oneDayTripSection.ctaTitle')}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-1">
                {t('oneDayTripSection.ctaSubtitle')}
              </p>
              <div className="w-12 sm:w-16 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            {/* Contact Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto">
              <Button
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-3 sm:px-4 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://line.me/ti/p/oo8YTANb1r" target="_blank" rel="noopener noreferrer">
                  <FaLine className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.line')}</span>
                  <span className="sm:hidden">LINE</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-3 sm:px-4 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="tel:+66614837772">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.call')}</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-3 sm:px-4 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://wa.me/message/O2WMNZYDNUGFF1" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.whatsapp')}</span>
                  <span className="sm:hidden">WA</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-white hover:bg-yellow-400 text-blue-900 px-3 sm:px-4 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm sm:text-base border border-gray-200 hover:border-yellow-400"
              >
                <a href="https://www.tiktok.com/@taxiprivatetravel24hours?_r=1&_t=ZS-93EVHNevO8i" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden sm:inline">{t('heroSection.tiktok')}</span>
                  <span className="sm:hidden">WC</span>
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-yellow-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base">
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
