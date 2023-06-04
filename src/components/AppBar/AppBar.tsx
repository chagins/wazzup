import React, { ReactNode } from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import { StyledToolbar } from './AppBar.styled';

type TAppBarProps = {
  actionSlot: ReactNode;
};

export const AppBar = ({ actionSlot }: TAppBarProps) => {
  return (
    <MuiAppBar position="static">
      <StyledToolbar>{actionSlot}</StyledToolbar>
    </MuiAppBar>
  );
};
