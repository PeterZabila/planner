import React from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector } from 'react-redux';
import styles from './events.module.scss';

const Events = () => {

  const events = useSelector(store => store.events);
  console.log(events)


  return (
    <div >
       <Buttons/>
         <div className={styles.events}>   
      {events?.length ? events.map(event => (
        <EventCard event={event} key={event.name}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div>
   
  )
}

export default Events
