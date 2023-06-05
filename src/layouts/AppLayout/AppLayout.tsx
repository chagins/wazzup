import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginForm, userModel } from 'features/user';
import { useAppSelector } from 'hooks';
import { StyledContainer, StyledBox } from './AppLayout.styled';

export const AppLayout = () => {
  const { isUserLoggedIn } = useAppSelector(userModel.selectUser);

  return (
    <StyledBox>
      <StyledContainer maxWidth="xl">{isUserLoggedIn ? <Outlet /> : <LoginForm />}</StyledContainer>
    </StyledBox>
  );
};
