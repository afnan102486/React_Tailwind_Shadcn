import { createTheme } from '@mui/material/styles';

// Create a dark theme instance
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ae52d4',        // Purple 300
      light: '#d05ce3',       // Purple 200
      dark: '#7b1fa2',        // Purple 700
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#52c7b8',       // Teal 300
      light: '#80e8d0',      // Teal 200
      dark: '#009688',       // Teal 500
      contrastText: '#ffffff'
    },
    error: {
      main: '#ef5350',       // Red 400
      light: '#ff867c',      // Red 300
      dark: '#d32f2f',       // Red 700
      contrastText: '#ffffff'
    },
    warning: {
      main: '#ff9800',       // Orange 500
      light: '#ffb74d',      // Orange 300
      dark: '#ed6c02',       // Orange 600
      contrastText: '#000000'
    },
    info: {
      main: '#03a9f4',       // Light Blue 500
      light: '#67daff',      // Light Blue 300
      dark: '#0288d1',       // Light Blue 700
      contrastText: '#000000'
    },
    success: {
      main: '#4caf50',       // Green 500
      light: '#80e27e',      // Green 300
      dark: '#2e7d32',       // Green 800
      contrastText: '#000000'
    },
    background: {
      default: '#121212',    // Dark mode background
      paper: '#1e1e1e'       // Cards/surfaces
    },
    text: {
      primary: '#ffffff',              // High emphasis
      secondary: 'rgba(255, 255, 255, 0.7)', // Medium emphasis
      disabled: 'rgba(255, 255, 255, 0.5)'   // Disabled text
    },
    divider: 'rgba(255, 255, 255, 0.12)'
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
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
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

export default darkTheme;
