import {ViewStyle} from 'react-native';
import {PlantType} from './PlantType';

export type HeaderType = {
  search?: boolean;
  style?: ViewStyle;
  logoIcon?: boolean;
  userName?: boolean;
  userImage?: boolean;
  goBackIcon?: boolean;
  basketIcon?: boolean;
  bottomLine?: boolean;
  burgerIcon?: boolean;
  userAvatar?: boolean;
  onGoBack?: () => void;
  title?: string | null;
  products?: PlantType[];
  backgroundColor?: string;
};
