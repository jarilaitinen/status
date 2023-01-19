import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import Home from './pages/Home'
import Single from './pages/Single'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Single />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
