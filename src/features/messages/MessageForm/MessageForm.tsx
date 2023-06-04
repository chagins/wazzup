import React from 'react';
import { SendMessage } from '../SendMessage';
import { MessageList } from '../MessageList';
import { StyledBox } from './MessageForm.styled';

export const MessageForm = () => {
  return (
    <StyledBox>
      <MessageList />
      <SendMessage />
    </StyledBox>
  );
};
