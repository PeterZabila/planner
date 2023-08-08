import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../reducers/filter';
// import { setFilter, setSort, setCategory } from '../../reducers/filter';
import styles from './events.module.scss';
import goback from '../../images/goback.svg';

const Events = () => {
  const dispatch = useDispatch()
  const events = useSelector(store => store.events);
  // console.log(events)
  const [fil, setFil] = useState(useSelector(store => store.filter.search))
  const [allEvents, setAllEvents] = useState(events.filter(item => (item.title.toLowerCase()).includes(fil.toLowerCase())));
  console.log(allEvents)
  
  console.log(fil.length)

  const handleClear = (e) => {
    e.preventDefault();
    setFil('')
    dispatch(setFilter(fil))
    setAllEvents(events)
  }
 
  // useEffect(() => {
  //   setAllEvents(events.filter(item => (item.title.toLowerCase()).includes(fil.toLowerCase())))
  // }, [fil])

  return (
    <div >
       <Buttons/>
       <button className='goback' onClick={handleClear}><img src={goback}/></button>
         <div className={styles.events}>   
      {allEvents?.length ? allEvents.map(event => (
        <EventCard event={event} key={event.id}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div> 
  )
}

export default Events
