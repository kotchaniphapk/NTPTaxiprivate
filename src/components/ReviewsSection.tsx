'use client';

import { ReviewCard } from './ReviewCard';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function ReviewsSection() {
  const { t } = useTranslation();
  
  const reviews = [
    {
      name: t('reviewsSection.reviews.review1.name'),
      rating: 5,
      comment: t('reviewsSection.reviews.review1.comment'),
      date: t('reviewsSection.reviews.review1.date'),
      serviceImage: "/1.png"
    },
    {
      name: t('reviewsSection.reviews.review2.name'),
      rating: 5,
      comment: t('reviewsSection.reviews.review2.comment'),
      date: t('reviewsSection.reviews.review2.date'),
      serviceImage: "/3.png"
    },
    {
      name: t('reviewsSection.reviews.review3.name'),
      rating: 5,
      comment: t('reviewsSection.reviews.review3.comment'),
      date: t('reviewsSection.reviews.review3.date'),
      serviceImage: "/2.png"
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-4">{t('reviewsSection.title')}</h2>
          <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 sm:w-8 h-6 sm:h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mt-3 text-blue-900 text-base sm:text-lg">
            {t('reviewsSection.averageRating')} <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>{' '}
            <Link href="https://www.facebook.com/profile.php?id=61558652704864" className="text-blue-900 underline">{t('reviewsSection.viewMore')}</Link>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
