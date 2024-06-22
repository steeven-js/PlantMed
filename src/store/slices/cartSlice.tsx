import type {ProductType} from '../../types';
import {showMessage} from 'react-native-flash-message';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  total: 0 as number,
  delivery: 0 as number,
  discount: 0 as number,
  subtotal: 0 as number,
  promoCode: '' as string,
  list: [] as ProductType[],
};

type StateType = typeof initialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: StateType = initialState,
      action: PayloadAction<ProductType>,
    ) => {
      const inCart = state.list.find(item => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item: ProductType) => {
          if (item.id === action.payload.id) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        }, state);
        state.subtotal += Number(action.payload.price);
        state.total +=
          Number(action.payload.price) * (1 - state.discount / 100);
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.subtotal += Number(action.payload.price);
        state.total +=
          Number(action.payload.price) * (1 - state.discount / 100);
        showMessage({
          message: 'Success',
          description: `${action.payload.name} added to cart`,
          type: 'success',
          icon: 'success',
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const inCart = state.list.find(item => item.id === action.payload.id);

      if (inCart) {
        state.list.map(item => {
          if (item.id === action.payload.id && (item.quantity as number) > 1) {
            if (item.quantity) {
              item.quantity -= 1;
            }
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.subtotal -= Number(action.payload.price);
        state.total -=
          Number(action.payload.price) * (1 - state.discount / 100);

        if (state.list.length === 0) {
          state.discount = 0;
          state.promoCode = '';
        }
      }
    },
    modifyItem: (state, action) => {
      const inCart = state.list.find(item => item.id === action.payload.id);

      if (inCart) {
        state.list.map(item => {
          if (item.id === action.payload.id) {
            state.subtotal -= item.price * (item.quantity as number);
            state.total -=
              item.price *
              (item.quantity as number) *
              (1 - state.discount / 100);
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);

        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.subtotal += Number(action.payload.price);
        state.total +=
          Number(action.payload.price) * (1 - state.discount / 100);
      }
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      if (state.list.length === 0) {
        state.discount = 0;
      } else {
        state.discount = action.payload;
      }
      state.total = state.subtotal * (1 - state.discount / 100);
    },
    resetCart: state => {
      state.list = [];
      state.subtotal = 0;
      state.total = 0;
      state.discount = 0;
      state.promoCode = '';
      state.delivery = 0;
    },
    setPromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode = action.payload;
    },
  },
});

export const {
  addToCart,
  resetCart,
  modifyItem,
  setDiscount,
  setPromoCode,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
