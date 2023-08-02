import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import back from '../images/back.jpg'

const SharedLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet style={{backgroundImage: `url(${back})`}}/>
    </div>
  )
}

export default SharedLayout
