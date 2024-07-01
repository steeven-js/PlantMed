import {ReviewType} from './ReviewType';

export type PlantMedType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  isBestSeller: boolean;
  potTypes: string[];
  sizes: string[];
  size: string;
  colors: string[];
  color: string;
  description: string;
  habitat: string;
  propriete: string;
  usageInterne: string;
  usageExterne: string;
  precaution: string;
  sources: string[];
  symptoms: string;
  is_best_seller: boolean;
  is_featured: boolean;
  categories: string;
  oldPrice?: number;
  quantity?: number;
  reviews: ReviewType[];
  types: string[];
  promotion: string;
  plantTypes: string[];
  isNew: boolean;
  isTop: boolean;
  is_premium: boolean;
};
