import {
  UtensilsCrossed,
  Sparkles,
  Car,
  type LucideIcon,
} from "lucide-react";
import { TFunction } from "i18next";

export type CategoryType = 'restaurant' | 'spa' | 'taxi' | 'cafe';
export type PackageName = 'bio' | 'single' | 'menupro';
export type PackageCode = '299' | '399' | '599' | '699' | '899' | '999';
export type Language = '1' | '2';

/**
 * Template configuration - รูปแบบง่ายสำหรับเพิ่ม template ใหม่
 * เพียงแค่เพิ่ม object ใหม่ใน templates array ด้านล่าง
 */
export interface TemplateConfig {
  price: number;
  name: string; // ชื่อ template หรือชื่อร้าน
  languages: 1 | 2; // จำนวนภาษา
  type: PackageName; // 'bio' | 'single' | 'menupro'
  category: CategoryType;
  image?: string; // รูปหน้าปกของ template (optional)
  templates: {
    title: string;
    webUrl: string;
    qrImage?: string; // path หรือ URL ของ QR code image
    image?: string; // รูปหน้าปกเฉพาะ template นี้ (optional, priority สูงสุด)
  }[];
}

export interface ExampleItem {
  Nameshop?: string;
  packageName: PackageName;
  package: PackageCode;
  price: number;
  language: Language;
  category: CategoryType;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  url?: string;
  qrcode?: string;
}

/**
 * Category configurations - กำหนดข้อมูลของแต่ละ category
 */
interface CategoryConfig {
  category: CategoryType;
  icon: LucideIcon;
}

const categoryConfigs: Record<CategoryType, CategoryConfig> = {
  spa: {
    category: 'spa',
    icon: Sparkles,
  },
  restaurant: {
    category: 'restaurant',
    icon: UtensilsCrossed,
  },
  cafe: {
    category: 'cafe',
    icon: UtensilsCrossed,
  },
  taxi: {
    category: 'taxi',
    icon: Car,
  },
};

/**
 * Default template URLs for each category (backward compatibility)
 * ใช้สำหรับ TemplatePreviewDialog
 */
export const templateUrls: Record<CategoryType, string> = {
  spa: '',
  restaurant: '',
  cafe: '',
  taxi: '',
};

/**
 * Get category configuration
 */
export function getCategoryConfig(category: CategoryType): CategoryConfig {
  return categoryConfigs[category];
}

/**
 * Get template URL for a specific category
 * Returns the URL from examples if available, otherwise falls back to default templateUrls
 */
export function getTemplateUrl(
  category: CategoryType,
  examples?: ExampleItem[]
): string {
  // Try to find URL from examples first
  if (examples) {
    const example = examples.find((ex) => ex.category === category && ex.url);
    if (example?.url) {
      return example.url;
    }
  }
  // Fall back to default templateUrls
  return templateUrls[category] || "";
}

/**
 * Template configurations - เพิ่ม template ใหม่ได้ง่ายๆ แค่เพิ่ม object ใหม่ใน array นี้
 * 
 * ตัวอย่างการใช้งาน:
 * {
 *   price: 899,
 *   name: "NoeyCafe – Template",
 *   languages: 2,
 *   type: "menupro",
 *   category: "cafe",
 *   templates: [
 *     {
 *       title: "Menu Pro คาเฟ่ (กาแฟ + ขนม + Special)",
 *       webUrl: "https://liceriacafe.vercel.app/",
 *       qrImage: "/qr/noeycafe.png" // หรือ URL
 *     }
 *   ]
 * }
 */
const templateConfigs: TemplateConfig[] = [
  // ============================================
  // เพิ่ม template ใหม่ของคุณที่นี่
  // ============================================
  
  // ตัวอย่าง 1: Menu Pro คาเฟ่ 2 ภาษา
  {
    price: 899,
    name: "NoeyCafe – Template",
    languages: 2,
    type: "menupro",
    category: "cafe",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800", // รูปหน้าปกเฉพาะ template นี้
    templates: [
      {
        title: "Menu Pro คาเฟ่ (กาแฟ + ขนม + Special)",
        webUrl: "https://liceriacafe.vercel.app/",
        qrImage: "/qr1.png", // 
        // image: "https://example.com/specific-image.jpg", // หรือกำหนด image เฉพาะ template นี้
      },
    ],
  },

  // ตัวอย่าง 2: Bio Page ร้านนวด 1 ภาษา
  {
    price: 299,
    name: "BioMassage",
    languages: 1,
    type: "bio",
    category: "spa",
    image: "https://example.com/spa-image.jpg", // รูปหน้าปกเฉพาะ template
    templates: [
      {
        title: "Bio Page ร้านนวด",
        webUrl: "https://biomassage.com",
        qrImage: "/qr1.png",
        // image: "https://example.com/specific-spa-image.jpg", // หรือกำหนด image เฉพาะ template นี้
      },
    ],
  },

  // ตัวอย่าง 3: Single Page ร้านอาหาร 2 ภาษา
  // {
  //   price: 699,
  //   name: "Thai Restaurant",
  //   languages: 2,
  //   type: "single",
  //   category: "restaurant",
  //   templates: [
  //     {
  //       title: "Single Page ร้านอาหาร 2 ภาษา",
  //       webUrl: "https://thairestaurant.com",
  //       qrImage: "/qr/thairestaurant.png",
  //     },
  //   ],
  // },

  // ตัวอย่าง 4: Menu Pro แท็กซี่ 1 ภาษา
  // {
  //   price: 899,
  //   name: "Phuket Taxi",
  //   languages: 1,
  //   type: "menupro",
  //   category: "taxi",
  //   templates: [
  //     {
  //       title: "Menu Pro แท็กซี่",
  //       webUrl: "https://phukettaxi.com",
  //       qrImage: "/qr/phukettaxi.png",
  //     },
  //   ],
  // },

  // หมายเหตุ:
  // - price: 299, 399, 599, 699, 899, 999
  // - languages: 1 หรือ 2
  // - type: "bio", "single", หรือ "menupro"
  // - category: "restaurant", "spa", "taxi", หรือ "cafe"
  // - image: รูปหน้าปกของ template (optional, ถ้าไม่ระบุจะเป็น empty string)
  // - templates: array ของ template ที่มี:
  //   - title: ชื่อ template
  //   - webUrl: URL ของเว็บไซต์
  //   - qrImage: path หรือ URL ของ QR code (optional)
  //   - image: รูปหน้าปกเฉพาะ template นี้ (optional, priority สูงสุด)
];

/**
 * Convert price to package code
 * Maps: 299→299, 399→399, 599→599, 699→699, 899→899, 999→999
 */
function getPackageCode(price: number): PackageCode {
  // Direct mapping based on price
  const priceToCode: Record<number, PackageCode> = {
    299: '299',
    399: '399',
    599: '599',
    699: '699',
    899: '899',
    999: '999',
  };
  
  return priceToCode[price] || '299';
}

/**
 * Convert template configs to ExampleItem array
 */
function convertTemplateConfigsToExamples(
  configs: TemplateConfig[],
  t: TFunction
): ExampleItem[] {
  const examples: ExampleItem[] = [];

  for (const config of configs) {
    const categoryConfig = getCategoryConfig(config.category);
    const language = config.languages.toString() as Language;

    for (const template of config.templates) {
      const packageCode = getPackageCode(config.price);
      
      // Priority: template.image > config.image > empty string (fallback)
      // Note: image จะต้องกำหนดใน template config หรือ template object เท่านั้น
      const image = template.image || config.image || '';
      
      examples.push({
        Nameshop: config.name,
        packageName: config.type,
        package: packageCode,
        price: config.price,
        language,
        category: config.category,
        title: template.title,
        description: t(`examples.packages.${packageCode}.${config.category}.description`) || '',
        image,
        icon: categoryConfig.icon,
        url: template.webUrl,
        qrcode: template.qrImage || '',
      });
    }
  }

  return examples;
}

/**
 * Generate examples array from translations
 * สร้าง examples จาก templateConfigs เท่านั้น
 */
export function generateExamples(t: TFunction): ExampleItem[] {
  return convertTemplateConfigsToExamples(templateConfigs, t);
}

