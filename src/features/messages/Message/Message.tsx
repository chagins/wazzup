import React from 'react';
import { Typography } from '@mui/material';
import { StyledBox, StyledPaper } from './Message.styled';

type TMessageProps = {
  text: string;
};

export const Message = ({ text }: TMessageProps) => {
  return (
    <StyledBox>
      <StyledPaper>
        <Typography variant="message">{text}</Typography>
      </StyledPaper>
    </StyledBox>
  );
};
