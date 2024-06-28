import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {PlantMedType} from '../../types';

type PlantMedWishlistState = {list: PlantMedType[]};

const initialState: PlantMedWishlistState = {
  list: [],
};

export const plantmedWishlistSlice = createSlice({
  name: 'plantmedwishlist',
  initialState,
  reducers: {
    addToPlantMedWishlist: (state, action: PayloadAction<PlantMedType>) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromPlantMedWishlist: (
      state,
      action: PayloadAction<PlantMedType>,
    ) => {
      const inWishlist = state.list.find(item => item.id === action.payload.id);

      if (inWishlist) {
        state.list = state.list.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const {addToPlantMedWishlist, removeFromPlantMedWishlist} =
  plantmedWishlistSlice.actions;
