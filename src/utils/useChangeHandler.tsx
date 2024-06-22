import {useAppDispatch} from '../store';
import {PayloadAction} from '@reduxjs/toolkit';

export const useChangeHandler = (
  action: (value: string) => PayloadAction<string>,
) => {
  const dispatch = useAppDispatch();
  return (newValue: string) => {
    dispatch(action(newValue));
  };
};
