import React from 'react';
import { MessageForm, MessageList } from 'features/messages';
import { AppBar } from 'components/AppBar';
import { Login } from 'features/user';
import { StyledBox } from './MainPage.styled';

export const MainPage = () => {
  return (
    <StyledBox>
      <AppBar actionSlot={<Login />} />
      <MessageList />
      <MessageForm />
    </StyledBox>
  );
};
