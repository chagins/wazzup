import React from 'react';
import { MessageForm } from 'features/messages';
import { StyledBox } from './MainPage.styled';

export const MainPage = () => {
  return (
    <StyledBox>
      <MessageForm />
    </StyledBox>
  );
};
