import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type FilterState = {
  selectedRatings: number[];
  selectedColors: string[];
  selectedPotTypes: string[];
  selectedPlantTypes: string[];
  selectedCategories: string[];
};

const initialState: FilterState = {
  selectedColors: [],
  selectedRatings: [],
  selectedPotTypes: [],
  selectedPlantTypes: [],
  selectedCategories: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedColors: (state, action: PayloadAction<string[]>) => {
      state.selectedColors = action.payload;
    },
    setSelectedRatings: (state, action: PayloadAction<number[]>) => {
      state.selectedRatings = action.payload;
    },
    setSelectedPotTypes: (state, action: PayloadAction<string[]>) => {
      state.selectedPotTypes = action.payload;
    },
    setSelectedPlantTypes: (state, action: PayloadAction<string[]>) => {
      state.selectedPlantTypes = action.payload;
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
    resetFilters: state => {
      state.selectedColors = [];
      state.selectedRatings = [];
      state.selectedPotTypes = [];
      state.selectedPlantTypes = [];
      state.selectedCategories = [];
    },
  },
});

export const {
  resetFilters,
  setSelectedColors,
  setSelectedRatings,
  setSelectedPotTypes,
  setSelectedPlantTypes,
  setSelectedCategories,
} = filterSlice.actions;
