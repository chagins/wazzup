import { configureStore } from '@reduxjs/toolkit';
import { userModel } from 'features/user';
import { msgModel } from 'features/messages';
import { apiSlice } from 'features/api';

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    messages: msgModel.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
