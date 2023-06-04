import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
}));
