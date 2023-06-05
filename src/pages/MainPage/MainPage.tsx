import React from 'react';
import { MessageForm, MessageList, InputPhoneNumber } from 'features/messages';
import { AppBar } from 'components/AppBar';
import { Login } from 'features/user';
import { StyledBox } from './MainPage.styled';

export const MainPage = () => {
  return (
    <StyledBox>
      <AppBar beforeSlot={<InputPhoneNumber />} afterSlot={<Login />} />
      <MessageList />
      <MessageForm />
    </StyledBox>
  );
};
