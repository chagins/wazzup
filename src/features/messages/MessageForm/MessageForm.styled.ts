import { Box, Paper, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(() => ({
  padding: '0 10px',
  width: '100%',
  display: 'flex',
}));

export const StyledPaper = styled(Paper)(() => ({
  padding: '5px 16px',
  minHeight: '52px',
}));

export const StyledInputBase = styled(InputBase)(() => ({
  width: '100%',
  height: '100%',
  margin: '5px 8px',
  border: '1px',
  padding: '9px 12px',
  fontSize: '0.9375rem',
}));
