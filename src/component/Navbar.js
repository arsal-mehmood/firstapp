import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar shadow-lg navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <a href='/' className="navbar-brand">{props.title}</a>
      {/* <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        
      </ul>
    </div> */}
                  <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckDefault">Mode</label>
            </div>
 
    </div>
  </nav>
  )
}


Navbar.propTypes= {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: 'hello'
}