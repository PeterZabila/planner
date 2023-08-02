import React from 'react';
import EventCard from './EventCard';
import { useSelector } from 'react-redux';

const Events = () => {

  const events = useSelector(store => store.events);
  console.log(events)


  return (
    <div>
      {events?.length ? events.map(event => (
        <EventCard event={event} key={event.name}/>
      )) : (<h3>No events</h3>)}
    </div>
  )
}

export default Events
