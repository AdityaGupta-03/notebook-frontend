import React from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotesState from "./context/Notes/NotesState.js";

function App() {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>

  );
}

export default App;
