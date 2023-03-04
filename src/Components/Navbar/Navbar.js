import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../../Media/Images/nimap-logo-31-1537772611.png'
const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <li><NavLink activeClassName='active' className='navlink' to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='active' className='navlink' to='/contact'>Contact</NavLink></li>
        <li><NavLink activeClassName='active' className='navlink' to='/about'>About</NavLink></li>
        <li><NavLink activeClassName='active' className='navlink' to='/service'>Services</NavLink></li>
        <div className='search'>
          Search Bar
        </div>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
