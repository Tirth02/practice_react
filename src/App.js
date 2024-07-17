import './App.css';
import propTypes from 'prop-types'
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
   <>
    <Navbar title="Text Utils" aboutText = "about us"></Navbar>
    <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below"></TextForm> */}
        <About></About>
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
