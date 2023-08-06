import React from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector } from 'react-redux';
import styles from './events.module.scss';

const Events = () => {

  const events = useSelector(store => store.events);
  const filterWord = useSelector(store => store.filter);
  console.log(events);
  console.log(filterWord);

let result;

  if(filterWord) {
    result = events.filter(item => item.title.toLowerCase() === filterWord.toLowerCase());
    // return filteredEvents
  } else {
    result = events;
  }

  // console.log(events)

  return (
    <div >
       <Buttons/>
         <div className={styles.events}>   
      {result?.length ? result.map(event => (
        <EventCard event={event} key={event.id}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div>
   
  )
}

export default Events
