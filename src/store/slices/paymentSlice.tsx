// paymentSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PaymentState {
  cvv: string;
  name: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
}

const initialState: PaymentState = {
  cvv: '',
  name: '',
  address: '',
  expiryDate: '',
  cardNumber: '',
  cardHolderName: '',
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload;
    },
    setExpiryDate: (state, action: PayloadAction<string>) => {
      state.expiryDate = action.payload;
    },
    setCvv: (state, action: PayloadAction<string>) => {
      state.cvv = action.payload;
    },
    setCardHolderName: (state, action: PayloadAction<string>) => {
      state.cardHolderName = action.payload;
    },
  },
});

export const {
  setName,
  setAddress,
  setCardNumber,
  setExpiryDate,
  setCvv,
  setCardHolderName,
} = paymentSlice.actions;

export default paymentSlice.reducer;
