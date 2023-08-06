import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Buttons from '../Buttons/Buttons'
import { useSelector } from 'react-redux';
import styles from './events.module.scss';
import firebase from '../../firebase';


const Events = () => {
  const events = useSelector(store => store.events);
  const filterWord = useSelector(store => store.filter);
  console.log(events);
  console.log(filterWord);

let result;

  if(filterWord) {
    result = events.filter(item => item.title.toLowerCase() === filterWord.toLowerCase());
  } else {
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
