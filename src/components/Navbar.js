import React from "react";
import { BiChevronLeft } from 'react-icons/bi';
import { FiMic } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../CSSmodule/navbar.css';

const Navbar = () => (
    <header className='header'>
      <nav className='nav'>
         <div>
          <Link to='home'>
           <BiChevronLeft />
          </Link>
        </div>
        <div>
          <img alt='logo' src={Logo}/>
        </div>
        <ul>
          <li><FiMic /></li>
          <li><CiSettings /></li>
        </ul>
      </nav>
    </header>
    );
export default Navbar;