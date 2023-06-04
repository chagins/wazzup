import { createTheme } from '@mui/material';
import green from '@mui/material/colors/green';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    panel: string;
    default: string;
    defaultGray: string;
    paperMessage: string;
    messageList: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    message: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    message?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    message: true;
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
      defaultGray: '#eae6df',
      panel: '#00a884',
      paper: '#f0f2f5',
      paperMessage: '#d9fdd3',
    },
    primary: green,
  },
  typography: {
    fontFamily:
      `'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, 'Oxygen',` +
      `'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    message: {
      whiteSpace: 'break-spaces',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          message: 'p',
        },
      },
    },
  },
});
