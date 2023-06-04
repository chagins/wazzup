import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginForm } from 'features/user';
import { StyledContainer, StyledBox } from './AppLayout.styled';

export const AppLayout = () => {
  const isUserLoggedIn = false;
  return (
    <StyledBox>
      <StyledContainer maxWidth="xl">{isUserLoggedIn ? <Outlet /> : <LoginForm />}</StyledContainer>
    </StyledBox>
  );
};
