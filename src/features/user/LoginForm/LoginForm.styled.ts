import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '10px 20px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid gray',
  borderRadius: theme.shape.borderRadius,
  '& > form': {
    maxWidth: '650px',
    width: '100%',
  },
}));

export const StyledSubmit = styled(LoadingButton)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const StyledBoxSubmit = styled(Box)(() => ({
  display: 'flex',
  columnGap: '10px',
  alignItems: 'center',
}));
