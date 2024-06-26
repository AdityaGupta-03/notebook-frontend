import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotesState from "./context/Notes/NotesState";
import Alert from './components/Alert.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Alert msg={"This is Amazing course"}/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>

  );
}

export default App;
