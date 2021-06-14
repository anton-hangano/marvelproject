import React, { Component } from 'react';
import logo from './marvel-logo.png';
import lupa from './lupa.svg';
import Search from './search';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="barra"> 
            <img src={logo} className="logo" alt="logo-marvel"/> 
            <div className="barraSeparadora">|</div> 
            <img src={lupa} className="lupa" alt="lupa"/> 
            <Search/> 
        </nav>
    )
  }
}

export default Navbar;