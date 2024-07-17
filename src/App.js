import './App.css';
import propTypes from 'prop-types'
import Navbar from './components/Navbar';
function App() {
  return (
   <>
    <Navbar title="Text Utils" aboutText = "about us"></Navbar>

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
