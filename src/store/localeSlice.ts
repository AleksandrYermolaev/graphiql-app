import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialLocale } from 'helpers/getInitialLocale';

export interface LocaleStateInterface {
  locale: string;
}
const initialState: LocaleStateInterface = {
  locale: getInitialLocale(),
};

export const LocaleSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setStoreLocale(state, action: PayloadAction<string>) {
      state.locale = '' + action.payload;
    },
  },
});

export default LocaleSlice.reducer;
