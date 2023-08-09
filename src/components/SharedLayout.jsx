import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const SharedLayout = () => {
  return (

     
      <div className='container'>
        <Header/>
        <Outlet/>
      </div>

  )
}

export default SharedLayout
