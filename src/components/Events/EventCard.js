import React from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';
import img from '../../images/default.png'

const EventCard = ({event}) => {
const { title = "new", time = "12:00", date = "05.03.2023", description = "some description", location = "Lviv", category = "art", priority = "low" } = event;

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={img} alt=''/>
      </div>
      <div className='card-content'>
              <div className='details'>
                <div className='date-time'>
                  {date} : {time}
                </div>
                <div className='location'>
                  {location}
                </div>
              </div>
      <div className='card-info'>
        <div className='card-title'>
                  <h3>{title}</h3>
                </div>
                <div className='description'>
                  <p>{description}</p>
                </div>
                <div className='btn'>
                  <button>
                      <Link to='card'>
                        <span className='text'>More info</span>
                      </Link>
                  </button>
                </div>
        </div>            
      </div>
    </div>
  )
}

export default EventCard
