import {ViewToken} from 'react-native/types';

import type {PotType} from './PotType';
import type {UserType} from './UserType';
import type {PlantType} from './PlantType';
import type {ColorType} from './ColorType';
import type {BannerType} from './BannerType';
import type {HeaderType} from './HeaderType';
import type {ReviewType} from './ReviewType';
import type {ProductType} from './ProductType';
import type {CategoryType} from './CategoryType';
import type {CarouselType} from './CarouselType';
import type {PromocodeType} from './PromocodeType';
import type {PlantmedType} from './PlantmedType';
import type {SymptomType} from './SymptomType';

export type ViewableItemsChanged = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

export type OnboardingTypes = {
  id: number;
  image: any;
  description: string;
  title: string;
};

export type {
  PotType,
  UserType,
  PlantType,
  ColorType,
  HeaderType,
  ReviewType,
  BannerType,
  ProductType,
  SymptomType,
  CarouselType,
  PlantmedType,
  CategoryType,
  PromocodeType,
};
