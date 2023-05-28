import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);   // object for alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null); }, 1500);   // timeout for alert
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#273668';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }

  }



  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <Routes>
        <Route path="about" element={<About mode={mode} toggleMode={toggleMode}  />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} toggleMode={toggleMode} />} />
        </Routes>

      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
