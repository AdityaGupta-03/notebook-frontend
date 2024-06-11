import React from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import notesState from './context/Notes/notesState.js';

function App() {
  return (
    <>
      <notesState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </BrowserRouter>
      </notesState>
    </>

  );
}

export default App;
