import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { StaticImageData } from 'next/image';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  serviceImage?: string | StaticImageData;
}

export function ReviewCard({ name, rating, comment, date, serviceImage }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 min-h-[280px] sm:min-h-[320px] flex flex-col">
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          {/* <ImageWithFallback
            src={avatar}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-yellow-400 shrink-0"
          /> */}
          <div className="flex-1 min-w-0">
            <div className="text-blue-900 font-semibold text-base sm:text-lg mb-2 truncate">{name}</div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(rating)].map((_, index) => (
                <Star key={index} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4 sm:mb-5 flex-1">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic line-clamp-5  overflow-hidden">
            &ldquo;{comment}&rdquo;
          </p>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="text-gray-400 text-xs sm:text-sm">{date}</div>
        </div>
      </div>
    </div>
  );
}
