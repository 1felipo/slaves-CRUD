import React, { useContext } from 'react'

import config from '../../configuration/config'
import ThemeContext from '../../configuration/theme';

import "./Navbar.css"
import "./NavbarBrand.css"
import "./SwitchTheme.css"

interface NavbarPropTypes {
  toggleTheme: ()=>void;
}

const NavbarBrand = () => {
  return (
    <div className="navbarBrand-container">
        <img src={config.faviconURL} alt="slaves CRUD logo"/>
        <h1> Slaves CRUD </h1>
    </div>
  )
}

const SwitchTheme = (props:NavbarPropTypes) => {
  const theme = useContext(ThemeContext)
  return (
    <div className="switchTheme-container" onClick={props.toggleTheme}>
        <span style={{color:theme.inverseColor}}>
          {theme.background==="#ffffff"?"dark?":"light?"}
        </span>
    </div>
  )
}

const Navbar = (props:NavbarPropTypes) => {

  const theme = useContext(ThemeContext)

  return (
    <div className="navbar-container" style={{ background: theme.background, boxShadow: theme.boxShadow}}>
        <div className="navbar-item"><NavbarBrand/></div>
        <div className="navbar-item">
          <SwitchTheme toggleTheme={props.toggleTheme}/>
        </div>
    </div>
  )
}

export default Navbar