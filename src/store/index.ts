import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlise.ts';

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
