import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  alignSelf: 'flex-end',
}));
