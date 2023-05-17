import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice.ts';
import localeSlice from './localeSlice.ts';
import responceSlice from './responceSlice.ts';

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    response: responceSlice,
    localeInfo: localeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
