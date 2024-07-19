import './App.css';
import propTypes from 'prop-types'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
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
  const toggleMode = () => {
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
   <>
    <Navbar title="Text Utils" aboutText = "about us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"></TextForm>
        {/* <About></About> */}
    </div>
    
   </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string
}

Navbar.defaultProps ={
  title:"Enter title"
}
export default App;
