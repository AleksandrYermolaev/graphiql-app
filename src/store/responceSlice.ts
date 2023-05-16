import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from 'services/thunkResponse';

export interface Responce {
  data: string | null;
  error: boolean;
  isLoading: boolean;
}

const initialState: Responce = {
  data: null,
  error: false,
  isLoading: true,
};

const responceSlice = createSlice({
  name: 'Responce',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.error = false;
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getRequest.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default responceSlice.reducer;
