import React, { ReactNode } from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import { StyledToolbar } from './AppBar.styled';

type TAppBarProps = {
  afterSlot: ReactNode;
  beforeSlot: ReactNode;
};

export const AppBar = ({ afterSlot, beforeSlot }: TAppBarProps) => {
  return (
    <MuiAppBar position="static">
      <StyledToolbar>
        {beforeSlot}
        {afterSlot}
      </StyledToolbar>
    </MuiAppBar>
  );
};
