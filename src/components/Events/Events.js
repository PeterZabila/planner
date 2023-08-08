import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector, useDispatch } from 'react-redux';
// import { setFilter, setSort, setCategory } from '../../reducers/filter';
import styles from './events.module.scss';
import goback from '../../images/goback.svg';

const Events = () => {
  const events = useSelector(store => store.events);
  const filterWord = useSelector(store => store.filter.search);
  const [allEvents, setAllEvents] = useState(events);
  const [filter, setFilter] = useState(filterWord)



  const handleClear = (e) => {
    e.preventDefault();
    setFilter('')
    setAllEvents("")
  }
  // const sortFilter = useSelector(store => store.filter.sort);
  // const categoryFilter = useSelector(store => store.filter.category);
let result;
  if(filterWord) {
    result = allEvents.filter(item => (item.title.toLowerCase()).includes(filterWord.toLowerCase()));
  // } if(categoryFilter) {
  //   result = events.filter(item => item.category.toLowerCase() === categoryFilter.toLowerCase());
  // } if (sortFilter) {
  //   switch(sortFilter) {
  //     case "by name":
  //       result = events.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0)
  //       break
  //     default:
  //       return result;
  //   }
  }
  else {
    result = events;
  }

  // useEffect(() => {
  //   setAllEvents(result)
  // }, [filter])

  return (
    <div >
       <Buttons/>
       {/* <button className='goback' onClick={handleClear}><img src={goback}/></button> */}
         <div className={styles.events}>   
      {result?.length ? result.map(event => (
        <EventCard event={event} key={event.id}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div> 
  )
}

export default Events
