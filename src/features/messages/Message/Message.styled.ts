import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(() => ({
  flex: '0 0 auto',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '2px 36px',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'inline-block',
  padding: '6px 7px 8px 9px',
  fontSize: '100%',
  backgroundColor: theme.palette.background.paperMessage,
  borderRadius: '7.5px',
}));
