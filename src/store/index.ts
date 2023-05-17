import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice.ts';
import localeSlice from './localeSlice.ts';
import requestParamsSlice from './requestParamsSlice.ts';

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    localeInfo: localeSlice,
    requestParams: requestParamsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
