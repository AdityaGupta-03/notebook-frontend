import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotesState from "./context/Notes/NotesState";
import Alert from './components/Alert.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg,type)=>{
    setAlert({msg:msg,type:type});
  }

  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" exact element={<Home showAlert={showAlert}/>} />
            <Route path="/about" exact element={<About showAlert={showAlert}/>} />
            <Route path="/signup" exact element={<Signup showAlert={showAlert}/>} />
            <Route path="/login" exact element={<Login showAlert={showAlert}/>} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>

  );
}

export default App;
