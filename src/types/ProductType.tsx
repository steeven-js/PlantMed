import {ReviewType} from './ReviewType';

export type ProductType = {
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
  categories: string;
  isBestseller: boolean;
  isFeatured: boolean;
  oldPrice?: number;
  quantity?: number;
  reviews: ReviewType[];
  types: string[];
  promotion: string;
  plantTypes: string[];
  isNew: boolean;
  isTop: boolean;
};
