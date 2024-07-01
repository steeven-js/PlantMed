import {setTag} from '../slices/tagSlice';
import {logOut} from '../slices/userSlice';
import {setUser} from '../slices/userSlice';
import {setScreen} from '../slices/tabSlice';
import {addToCart} from '../slices/cartSlice';
import {resetCart} from '../slices/cartSlice';
import {setStart} from '../slices/startSlice';
import {setCvv} from '../slices/paymentSlice';
import {modifyItem} from '../slices/cartSlice';
import {setPrenium} from '../slices/userSlice';
import {setName} from '../slices/paymentSlice';
import {setDiscount} from '../slices/cartSlice';
import {setPromoCode} from '../slices/cartSlice';
import {setAddress} from '../slices/paymentSlice';
import {resetFilters} from '../slices/filterSlice';
import {setRememberMe} from '../slices/userSlice';
import {removeFromCart} from '../slices/cartSlice';
import {setCardNumber} from '../slices/paymentSlice';
import {setExpiryDate} from '../slices/paymentSlice';
import {addToWishlist} from '../slices/wishlistSlice';
import {addPromocode} from '../slices/promocodeSlice';
import {setSelectedColors} from '../slices/filterSlice';
import {setSelectedRatings} from '../slices/filterSlice';
import {setCardHolderName} from '../slices/paymentSlice';
import {removePromocode} from '../slices/promocodeSlice';
import {setSelectedPotTypes} from '../slices/filterSlice';
import {setCancelAtPeriodEnd} from '../slices/userSlice';
import {removeFromWishlist} from '../slices/wishlistSlice';
import {setSelectedPlantTypes} from '../slices/filterSlice';
import {setSelectedCategories} from '../slices/filterSlice';
import {setDashboard, setDoctorList} from '../slices/versionSlice';
import {addToPlantMedWishlist} from '../slices/plantmedWishlistSlice';
import {removeFromPlantMedWishlist} from '../slices/plantmedWishlistSlice';

export const actions = {
  setTag,
  logOut,
  setCvv,
  setUser,
  setName,
  setStart,
  setScreen,
  resetCart,
  addToCart,
  modifyItem,
  setAddress,
  setPrenium,
  setDiscount,
  resetFilters,
  setPromoCode,
  setDashboard,
  addPromocode,
  setCardNumber,
  setExpiryDate,
  setDoctorList,
  setRememberMe,
  addToWishlist,
  removeFromCart,
  removePromocode,
  setSelectedColors,
  setCardHolderName,
  removeFromWishlist,
  setSelectedRatings,
  setSelectedPotTypes,
  setCancelAtPeriodEnd,
  setSelectedCategories,
  setSelectedPlantTypes,
  addToPlantMedWishlist,
  removeFromPlantMedWishlist,
};
