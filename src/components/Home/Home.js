import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Plus from '../../images/plus.svg';

const Home = () => {
  return (
    <div className='home'>
        <div>
            <Link to="newEvent">
                <button>
                    <img src={Plus} alt="Add event" />
                </button>
            </Link>
        
        </div>
    
        <Outlet/>
    </div>
  )
}

export default Home
