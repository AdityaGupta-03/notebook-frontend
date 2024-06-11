import React from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
