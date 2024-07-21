import './App.css';
import propTypes from 'prop-types'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  Routes,
  Route,
} from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() =>{
        setAlert(null);
      },2000);
  }

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');   
  // }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (

    <div>
    <Navbar title="Text Utils" aboutText = "about us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
   
    <Routes>
          <Route path="/" index element={<TextForm showAlert={showAlert} mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove extra soaces"/>}/>
          <Route path="/about" element={<About/>}/>
    </Routes> 
        {/* <About></About> */}
    </div>
    </div>
   
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string
}

// Navbar.defaultProps ={
//   title:"Enter title"
// }
export default App;
