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
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/618082793_122213833352288423_380755825717126917_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2IJI0iKcM_cQ7kNvwFE7oyr&_nc_oc=AdnezAaSoBAJJLn56ILOx8y_xwuZIrGrp-y5auUCtDqX0zKRFXVg99YH82MgquQwfelvmQuUU-GTOT1bSC7gMy9X&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=kIKiV07brQcU7x0ihsmmFQ&oh=00_Afq0MhAwS0PhGrhFgR6b3OS3E4F-Uv2G1Q_pYjxegEMtBw&oe=6975735A',
      alt: t('gallerySection.images.image1.alt'),
      location: t('gallerySection.images.image1.location'),
      customer: t('gallerySection.images.image1.customer')
    },
    {
      id: 2,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/618178138_122213696858288423_2548492354751962633_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LWmOFVYzMmAQ7kNvwFBGMoe&_nc_oc=AdkRh_GV2Todyc-Gcgc2qjewgkXQApmGVMu-fRhZdqBOejN-3WrZKy57JQaPAMXAg55yuoZdYeUoaMU7UE-gWyxJ&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=BGjbZcPdiJ1sVZtfH9-Ipw&oh=00_AfqKgHHLDcNpNQ5SSbx11WDHr8XKw3RQiewnywnPKHuAsA&oe=69753D6B',
      alt: t('gallerySection.images.image2.alt'),
      location: t('gallerySection.images.image2.location'),
      customer: t('gallerySection.images.image2.customer')
    },
    {
      id: 3,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/616942929_122213601908288423_1222779434908189114_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MH2YoLLHA-gQ7kNvwEsf1by&_nc_oc=AdlH2cWJKiazIEuhUwkkc9pYLccIG5E7LgzMuuewRGr3zmer4TPJoZWK7yhqMqr25c4e0Z-PoZCtfcgQVgGa48xH&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=BGjbZcPdiJ1sVZtfH9-Ipw&oh=00_AfpHqSOPq_-WQOEnYWCYm29BexRdVKUP_7RgJjKjenw_-w&oe=69753840',
      alt: t('gallerySection.images.image3.alt'),
      location: t('gallerySection.images.image3.location'),
      customer: t('gallerySection.images.image3.customer')
    },
    {
      id: 5,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/617584913_122213283236288423_5877557381772720127_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Xaz1yQiBBO0Q7kNvwFsM8p5&_nc_oc=Adlz4fvB1hPDv0s5wKnTS0tcZqaEwOuJ9JGgCpurgdOcQKpyVmZzSaiinX-55mdbUAeb2dB1oVunlNKVXGDsuMon&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=U6YP2Y4hi6GKkdEhJZ9AMg&oh=00_Afp8reKiNEDmRGWHJ7ORoYRNpVa41zHT0ZsiqJVnqk1XKA&oe=69756ABA',
      alt: t('gallerySection.images.image5.alt'),
      location: t('gallerySection.images.image5.location'),
      customer: t('gallerySection.images.image5.customer')
    },
    {
      id: 4,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/617059100_122213463416288423_2537788068111374618_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QjvcoZP6ajwQ7kNvwFSUk9T&_nc_oc=AdkXe-y66GbJgXocVISKW77rQL3s201DFW10kBkRMuZV2R8U1jbmjnXYzCZVWCz54-posPJANUVb1FA-OLJFOPr6&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=BGjbZcPdiJ1sVZtfH9-Ipw&oh=00_AfrcltHsI2sb_oV2-u2Pzgrc9VzhFJk0VNp1B9sWeeQ1Jw&oe=69755388',
      alt: t('gallerySection.images.image4.alt'),
      location: t('gallerySection.images.image4.location'),
      customer: t('gallerySection.images.image4.customer')
    },
    {
      id: 6,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/612570820_122212505744288423_8489348718088344454_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ayC-J2CWuMgQ7kNvwHDf60p&_nc_oc=Adn8MpuSVLabW4blSERd3wmPLlebEsjM2ULxzYOoKifQmiUPqFxtSGYVLTWiMeP0ubPgFdygtbrlh7CM2Ph5UURy&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=0dcsEbHQL3ol_JFZ72IdQw&oh=00_AfqOZqq8pj4qXZ8gtgO-89GV2QrKsg6v0HpkOfaTzkY8Cw&oe=69756C3E',
      alt: t('gallerySection.images.image6.alt'),
      location: t('gallerySection.images.image6.location'),
      customer: t('gallerySection.images.image6.customer')
    },
    {
      id: 7,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/607023821_122211402488288423_843223277669789970_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ILKmOtMYePsQ7kNvwEu3r2S&_nc_oc=Adn0ryuKYN06buQO3-P73da3ykoUkGoQGU1UB7PFt7lu4SN_jNJ8m9W4MucQjKroSsyLkSBfu9m-CqWxKk3f0iez&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=3DNnDa-OrHI22JjtsLQxAg&oh=00_AfoJGIEiOAiec5D8FBlHfRgXpWY9lNyz5uSVO455-YQaDg&oe=69756B7A',
      alt: t('gallerySection.images.image7.alt'),
      location: t('gallerySection.images.image7.location'),
      customer: t('gallerySection.images.image7.customer')
    },
    {
      id: 8,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/597595788_122208874220288423_1913543302490743074_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wtuxaBV-u-8Q7kNvwFU2Z4Y&_nc_oc=AdkpmJEd4HfBBxi6ZemSc08Sbvj_dRUunSPn8NjdhJUhigw_imd86ydIGm-TaZD5EUiABQlBoEhcD7H06715mYTe&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=6j6F9NfjiDar4jxsLS6p2A&oh=00_AfqmzOyBgWNHpFNrXHx994IPv2Fb76_JOGAyoeIPzd9yNw&oe=697568D5',
      alt: t('gallerySection.images.image8.alt'),
      location: t('gallerySection.images.image8.location'),
      customer: t('gallerySection.images.image8.customer')
    },

    {
      id: 9,
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/571361974_122203329608288423_4351543478738537805_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YzfMzqgw1rQQ7kNvwEZYvG-&_nc_oc=AdkujwnH6zmGfHvLrCmYnQY3u8HaVjggn1PRVJVDPwvmeQYgSC0FQnm3cdQCAw8XNTC2jSkFmcTSJUQyDa0GlSg3&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=d2r9J-VuECNJYG-6Aj-XAg&oh=00_Afrad63Wr51JLgYgd5j7AUuFNWDwv55v_FHXKvBtjICq2Q&oe=697577B8',
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
