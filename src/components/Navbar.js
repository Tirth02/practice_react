import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item active">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      {/* <form className="form-inline my-2 my-lg-0 d-flex flex-row">
        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode}Mode`}</label>
      </div>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={() =>{props.toggleMode('primary')}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
        <div className="bg-secondary rounded mx-2" onClick={() =>{props.toggleMode('secondary')}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
        <div className="bg-danger rounded mx-2" onClick={() =>{props.toggleMode('danger')}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
        <div className="bg-success rounded mx-2" onClick={() =>{props.toggleMode('success')}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
        <div className="bg-warning rounded mx-2" onClick={() =>{props.toggleMode('warning')}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
        <div className="bg-dark rounded mx-2" onClick={() =>{props.toggleMode('dark')}} style={{height:"30px",width:"30px",cursor:"pointer",border:"1px solid white"}}></div>
        <div className="bg-light rounded mx-2" onClick={() =>{props.toggleMode('light')}} style={{height:"30px",width:"30px",cursor:"pointer",border:"1px solid black"}}></div>
      </div> */}
    </div>
  </nav>
  )
}

export default Navbar
