import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Single from './pages/Single'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Single />} />        
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
