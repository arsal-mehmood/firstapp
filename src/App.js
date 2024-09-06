import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import React, { useState} from 'react';
// import {
  // BrowserRouter as Router,

  // Routes,
  // Route

// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [text, setTextMode] = useState('dark');
  const [progress, setProgress] = useState(100); 
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    
    setProgress(100);

    
    let intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(intervalId);
           
          return 0;
        }
        return prevProgress - 1;
      });
    }, 10);

    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextMode('light');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark Mode has been enabled', 'light');
    } else {
      setMode('light');
      setTextMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'light');
    }
  };

  return (
    <>
     {/* <Router> */}
        <Navbar title="TrchRock" mode={mode} togglemode={toggleMode} text={text} />
        <div className='container my-5'>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={ */}
              <TextForm showAlert={showAlert} title="Enter The Text To Analyze" mode={mode} togglemode={toggleMode} textColor={text} />
              {/* } /> */}
          {/* </Routes> */}
        </div>
        <Alert alert={alert} progress={progress} />
      {/* </Router> */}
    </>
  );
}

export default App;
