import React from 'react';
import { StyledInputBase, StyledPaper } from './SendMessage.styled';

export const SendMessage = () => {
  return (
    <StyledPaper elevation={0}>
      <StyledInputBase placeholder="Введите сообщение" autoFocus multiline />
    </StyledPaper>
  );
};
