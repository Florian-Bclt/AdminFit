import React from 'react';
import "./Menu.css";
import Logo from '../img/logo1.png';
import { FaDelicious, 
         FaUser,
         FaSignOutAlt, 
         FaWarehouse
        } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <menu>
      <img src={Logo} alt=''/>

        <ul id='mainMenu'>
            <Link to='/home' className='link'><i className='icon'><FaDelicious /></i></Link>
            <Link to='/structure' className='link'><i className='icon'><FaWarehouse /></i></Link>
            <Link to='/profile' className='link'><i className='icon'><FaUser /></i></Link>
            <Link to='/' className='link'><i className='icon'><FaSignOutAlt /></i></Link>
        </ul>
    </menu>
  )
}


export default Menu;