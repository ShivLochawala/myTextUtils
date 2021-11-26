import './App.css';
import About from './Components/About';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [colorMode, setColorMode] = useState('grey');
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleColorMode = (e) => {
    setColorMode(e.target.value);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = colorMode;
      // showAlert('Dark Mode Enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert('Light Mode Enabled','success');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="myTextUtils" aboutText="About Us" mode={mode} toggleColorMode={toggleColorMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
