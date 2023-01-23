import { createTheme } from '@mui/material';

const font =  "'Quicksand', sans-serif"

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: { main: '#15c630' },
    otherColor: { main: '#999' },
  },
});

export default theme;