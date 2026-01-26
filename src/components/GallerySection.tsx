'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: 'pattaya.jpg',
      alt: t('gallerySection.images.image1.alt'),
      location: t('gallerySection.images.image1.location'),
      customer: t('gallerySection.images.image1.customer')
    },
    {
      id: 2,
      src: 'khokood.jpg',
      alt: t('gallerySection.images.image2.alt'),
      location: t('gallerySection.images.image2.location'),
      customer: t('gallerySection.images.image2.customer')
    },
    {
      id: 3,
      src: 'khochang.jpg',
      alt: t('gallerySection.images.image3.alt'),
      location: t('gallerySection.images.image3.location'),
      customer: t('gallerySection.images.image3.customer')
    },
    {
      id: 5,
      src: 'khaoyai.jpg',
      alt: t('gallerySection.images.image5.alt'),
      location: t('gallerySection.images.image5.location'),
      customer: t('gallerySection.images.image5.customer')
    },
    {
      id: 4,
      src: 'huahin.jpg',
      alt: t('gallerySection.images.image4.alt'),
      location: t('gallerySection.images.image4.location'),
      customer: t('gallerySection.images.image4.customer')
    },
    {
      id: 6,
      src: 'kanchana.jpg',
      alt: t('gallerySection.images.image6.alt'),
      location: t('gallerySection.images.image6.location'),
      customer: t('gallerySection.images.image6.customer')
    },
    {
      id: 7,
      src: 'onedaytrip.jpg',
      alt: t('gallerySection.images.image7.alt'),
      location: t('gallerySection.images.image7.location'),
      customer: t('gallerySection.images.image7.customer')
    },
    {
      id: 8,
      src: 'ayuttaya.jpg',
      alt: t('gallerySection.images.image8.alt'),
      location: t('gallerySection.images.image8.location'),
      customer: t('gallerySection.images.image8.customer')
    },

    {
      id: 9,
      src: 'pattaya2.jpg',
      alt: t('gallerySection.images.image9.alt'),
      location: t('gallerySection.images.image9.location'),
      customer: t('gallerySection.images.image9.customer')
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="gallery" className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-4">{t('gallerySection.title')}</h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p id="reviews"  className="mt-3 text-blue-900 text-base sm:text-lg">
            {t('reviewsSection.averageRating')} <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>{' '}
            <Link href="https://www.facebook.com/profile.php?id=61558652704864" className="text-blue-900 underline">{t('reviewsSection.viewMore')}</Link>
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay with location info */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/95 via-blue-800/50 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white text-lg sm:text-xl mb-1">{image.location}</h3>
                      <p className="text-gray-300 text-sm">{image.customer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                className="absolute top-4 right-4 z-60 text-white hover:text-yellow-400 transition-colors text-3xl bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-lg">
            {t('gallerySection.ctaPrefix')} <span className="text-blue-900">1,000+</span> {t('gallerySection.ctaSuffix')}
          </p>
        </div>
      </div>
    </section>
  );
}
