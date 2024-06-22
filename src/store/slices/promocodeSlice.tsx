import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {PromocodeType} from '../../types';

type PromocodelistState = {list: PromocodeType[]};

const initialState: PromocodelistState = {
  list: [],
};

export const promocodeSlice = createSlice({
  name: 'promocode',
  initialState,
  reducers: {
    addPromocode: (state, action: PayloadAction<PromocodeType>) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },

    removePromocode: (state, action: PayloadAction<PromocodeType>) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (inWishlist) {
        state.list = state.list.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const {addPromocode, removePromocode} = promocodeSlice.actions;
