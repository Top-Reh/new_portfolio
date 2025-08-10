import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Menu from './menu.jsx';
import Portfolio from './portfolio.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>Page not found!</h1>} /> {/* 404 Page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
