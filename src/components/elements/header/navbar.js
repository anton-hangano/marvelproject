import React, { Component } from 'react';
import logo from './marvel-logo.png';
import lupa from './lupa.svg'
import Search from './search';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="barra"> 
            <img src={logo} className="logo"/> 
            <div className="barraSeparadora">|</div> 
            <img src={lupa} className="lupa"/> 

            <Search/> 
        </nav>
    )
  }
}

export default Navbar;