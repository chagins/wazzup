import { createTheme } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    panel: string;
    default: string;
    defaultGray: string;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1638,
    },
  },
  palette: {
    background: {
      default: '#f0f2f5',
      panel: '#00a884',
      defaultGray: '#eae6df',
    },
  },
});
