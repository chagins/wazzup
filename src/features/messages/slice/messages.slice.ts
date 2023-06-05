import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TMessagesSlice = {
  chatId: string | null;
  messageHistoryCount: number;
};

const initialState: TMessagesSlice = {
  chatId: null,
  messageHistoryCount: 20,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessagesSettings(state, action: PayloadAction<Pick<TMessagesSlice, 'chatId'>>) {
      state.chatId = action.payload.chatId;
    },
  },
});

export const { reducer } = messagesSlice;
export const { setMessagesSettings } = messagesSlice.actions;
export const getMessagesSettings = (state: RootState) => state.messages;
