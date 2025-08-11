import { createTheme } from '@mui/material/styles';

// Create a light theme instance
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7b1fa2',        // Purple 700
      light: '#ae52d4',       // Purple 300
      dark: '#4a0072',        // Purple 900
      contrastText: '#ffffff' // White
    },
    secondary: {
      main: '#009688',       // Teal 500
      light: '#52c7b8',      // Teal 300
      dark: '#00675b',       // Teal 700
      contrastText: '#ffffff'
    },
    error: {
      main: '#d32f2f',       // Red 700
      light: '#ef5350',      // Red 400
      dark: '#c62828',       // Red 800
      contrastText: '#ffffff'
    },
    warning: {
      main: '#ed6c02',       // Orange 600
      light: '#ff9800',      // Orange 500
      dark: '#e65100',        // Orange 800
      contrastText: '#ffffff'
    },
    info: {
      main: '#0288d1',       // Light Blue 700
      light: '#03a9f4',      // Light Blue 500
      dark: '#01579b',       // Light Blue 900
      contrastText: '#ffffff'
    },
    success: {
      main: '#2e7d32',       // Green 800
      light: '#4caf50',       // Green 500
      dark: '#1b5e20',        // Green 900
      contrastText: '#ffffff'
    },
    background: {
      default: '#f5f5f5',     // Light grey background
      paper: '#ffffff'        // White cards/surfaces
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',    // High emphasis
      secondary: 'rgba(0, 0, 0, 0.6)',    // Medium emphasis
      disabled: 'rgba(0, 0, 0, 0.38)'     // Disabled text
    },
    divider: 'rgba(0, 0, 0, 0.12)'       // Dividers/borders
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.3
    },
    button: {
      textTransform: 'none',  // Buttons won't be uppercase
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8          // Default border radius for cards, buttons, etc.
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
});

export default lightTheme;