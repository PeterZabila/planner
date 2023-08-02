import React from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';
import img from '../../images/default.png'

const EventCard = () => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={img} alt=''/>
      </div>
      <div className='card-content'>
              <div className='details'>
                <div className='date-time'>
                  12:00 31.07.2022
                </div>
                <div className='location'>
                  Kyiv
                </div>
              </div>
              <div className='card-title'>
                <h3>Title</h3>
              </div>
              <div className='description'>
                <p>Description of the item successfully created with REACT js library. Description of the item successfully created with REACT js library</p>
              </div>
              <div className='btn'>
                <button>
                    <Link to='card'>
                      More info
                    </Link>
                </button>
              </div>
      </div>
    </div>
  )
}

export default EventCard
