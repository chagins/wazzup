import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 0,
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.defaultGray,
  '&:before': {
    zIndex: -1,
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    height: '127px',
    width: '100%',
    backgroundColor: theme.palette.background.panel,
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    padding: '19px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '0',
  },
}));
