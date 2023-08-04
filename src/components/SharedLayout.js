import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const SharedLayout = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default SharedLayout
