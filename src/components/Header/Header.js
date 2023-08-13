import React from 'react';
import { Link } from "react-router-dom";
import './header.scss'
import Search from '../Search/Search';
import Lang from '../Lang/Lang';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='header'>
      <Link to="/">
        <div className='header-title'>
          Event Planner
        </div>
      </Link>
      <Search/>
      <Lang/>
    </div>
    </div>
    
  )
}

export default Header
