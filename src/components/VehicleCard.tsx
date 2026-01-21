import Image, { ImageProps } from 'next/image';
import { Users, Check, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

interface VehicleCardProps {
  name: string;
  seats: string;
  features: string[];
  image: ImageProps['src'];
}

export function VehicleCard({ name, seats, features, image }: VehicleCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
      <div className="relative h-44 sm:h-52 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={image} 
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      
      <div className="p-5 sm:p-6 space-y-4 sm:space-y-5 flex flex-col flex-1">
        <div>
          <h3 className="text-xl sm:text-2xl text-blue-900 mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
            <span className="text-base sm:text-lg">{seats}</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 pt-2 border-t border-gray-100 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700">
              <Check className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}