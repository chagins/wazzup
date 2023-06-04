import React from 'react';
import { Typography } from '@mui/material';
import { StyledBox, StyledPaper } from './Message.styled';

export const Message = () => {
  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="message">{`Message\nMessage`}</Typography>
      </StyledPaper>
    </StyledBox>
  );
};
