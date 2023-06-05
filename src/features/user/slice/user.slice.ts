import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthParams } from 'types';

type TUserSlice = IAuthParams & {
  isUserLoggedIn: boolean;
};

const initialState: TUserSlice = {
  idInstance: null,
  apiTokenInstance: null,
  isUserLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IAuthParams>) {
      if (!!action.payload.apiTokenInstance && !!action.payload.idInstance) {
        state.apiTokenInstance = action.payload.apiTokenInstance;
        state.idInstance = action.payload.idInstance;
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
  },
});

export const { reducer } = userSlice;
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
