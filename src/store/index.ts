import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlise.ts';
import localeSlice from './localeSclice';

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    localeInfo: localeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
