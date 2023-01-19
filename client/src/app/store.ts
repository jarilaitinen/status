import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import packageReducer from './slices/packageSlice';

export const store = configureStore({
  reducer: {
    packages: packageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
