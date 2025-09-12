import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Menu from './menu.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Portfolio from './portfolio.jsx';
import Admin from './admin.jsx';
import gsap, { Power3 } from 'gsap';

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <BrowserRouter>
    <Menu timeline={tl} ease= {ease}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin" element={< Admin/>} />
        <Route path="*" element={<h1>Page not found!</h1>} /> {/* 404 Page */}
      </Routes>
    <footer className='w-full h-20 bg-gray-900 flex items-center justify-center'>
        <p className='text-white'>© 2023 Top Reh. All rights reserved.</p>
    </footer>
    </BrowserRouter>
  )
}

export default App
