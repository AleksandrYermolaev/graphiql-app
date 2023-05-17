import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface ParamsType {
  variables: string;
  headers: string;
}
const initialState: ParamsType = {
  variables: '',
  headers: '',
};

export const requestParamsSlice = createSlice({
  name: 'requestParams',
  initialState,
  reducers: {
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const { setHeaders, setVariables } = requestParamsSlice.actions;
export const selectVariables = (state: RootState) => state.requestParams.variables;
export const selectHeaders = (state: RootState) => state.requestParams.headers;
export default requestParamsSlice.reducer;
