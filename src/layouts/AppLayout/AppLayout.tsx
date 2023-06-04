import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledBox } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <StyledBox>
      <StyledContainer maxWidth="xl">
        <Outlet />
      </StyledContainer>
    </StyledBox>
  );
};
