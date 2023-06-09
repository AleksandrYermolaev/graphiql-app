import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  token: string | null;
}

const initialState: UserInfo = {
  token: localStorage.getItem('token-ff'),
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setToken } = userSlice.actions;
