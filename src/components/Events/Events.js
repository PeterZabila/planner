import React, { useEffect, useState, useMemo } from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../reducers/filter';
// import { setFilter, setSort, setCategory } from '../../reducers/filter';
import styles from './events.module.scss';
import goback from '../../images/goback.svg';

const Events = () => {
  const events = useSelector(store => store.events);
  const fil = useSelector(store => store.filter.search);
  const dispatch = useDispatch()

  const allEvs = useMemo(() => {
    return events.filter(item => (item.title.toLowerCase()).includes(fil.toLowerCase()))
  }, [fil, events])


  return (
    <div >
       <Buttons/>
          <button className='goback' onClick={() => dispatch(setFilter(''))}>Back to all events</button>
          <div className={styles.events}>   
            {allEvs?.length ? allEvs.map(event => (
        <EventCard event={event} key={event.id}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div> 
  )
}

export default Events
