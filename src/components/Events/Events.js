import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector, useDispatch } from 'react-redux';
// import { setFilter, setSort, setCategory } from '../../reducers/filter';
import styles from './events.module.scss';
// import firebase from '../../firebase';


const Events = () => {
  // const dispatch = useDispatch
  const events = useSelector(store => store.events);
  const filterWord = useSelector(store => store.filter.search);
  const sortFilter = useSelector(store => store.filter.sort);
  const categoryFilter = useSelector(store => store.filter.category);

let result;

  if(filterWord) {
    result = events.filter(item => item.title.toLowerCase() === filterWord.toLowerCase());
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

  // const [allEvents, setAllEvents] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const ref = firebase.firestore().collection("1");

//   const getEvents = () => {
//     setLoading(true);
//     ref.onSnapshot((querySnapshot) => {
//       const items = [];
//       querySnapshot.forEach((doc) => {
//         items.push(doc.data());
//       });
//       setAllEvents(items);
//       console.log(items)
//       setLoading(false);
//     })
//   }

//   useEffect(() => {
//     getEvents()
//   }, [])

// if (loading) {
//   return <h1>Loading...</h1>
// }

  return (
    <div >
       <Buttons/>
         <div className={styles.events}>   
      {result?.length ? result.map(event => (
        <EventCard event={event} key={event.id}/>
      )) : (<h3>No events</h3>)}
    </div>
    </div>


      // <div >
      //   <Buttons/>
      //     <div className={styles.events}>   
      //   {allEvents?.length ? allEvents.map(event => (
      //   <EventCard event={event} key={event.id}/>
      //   )) : (<h3>No events</h3>)}
      //   </div>
      // </div>
   
  )
}

export default Events
