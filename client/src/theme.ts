import { createTheme } from '@mui/material';

const font =  "'PT Sans', sans-serif"
const headingFont = "'Russo One', sans-serif"

const theme = createTheme({
  typography: {
    fontFamily: font,
    h1: {
      fontFamily: headingFont,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2.2rem',
    },
    h4: {
      fontSize: '1.9rem',
      fontWeight: 800,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#a2473a',
    },
    secondary: {
      main: '#a9dbc7',
    },
    background: {
      default: '#0e0301',
      paper: '#0e0301',
    },
  },
});

export default theme;