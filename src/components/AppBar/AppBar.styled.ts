import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { APP_BAR_HEIGHT } from 'const';

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: APP_BAR_HEIGHT,
}));
