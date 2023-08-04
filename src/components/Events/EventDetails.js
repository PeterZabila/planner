import React from 'react';
import { useSelector } from 'react-redux';
import styles from './eventDetails.module.scss';
import { useParams } from 'react-router-dom';
import img from '../../images/default.png'

const EventDetail = () => {
  const {id} = useParams();
  console.log(id)
  const events = useSelector((state) => state.events);
  const event = events.find(item => String(item.id) === String(id))
  const { title, date, time, description, category, location, priority, picture = img } = event;

  console.log(date)
  return (
 
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
          <h3>{title}</h3>
      </div>

      <div className={styles.imageContainer}>
        <img src={picture} alt=''/>
      </div>

      <div className={styles.cardDetails}>
                <div className={styles.cardContentItem}>{category}</div>
                <div className={styles.cardContentItem}>{priority}</div>
                <div className={styles.cardContentItem}>{location}</div>
                <div className={styles.cardContentItem}>
                  {date} at {time}
                </div>
      </div>
            <div className={styles.description}>
                  <p>{description}</p>
            </div>

            <div className={styles.buttonsGroup}>
              <button className={styles.btnEdit}>Edit</button>
              <button className={styles.btnDelete}>Delete event</button>
            </div>
          
          
    </div>
  )
}

export default EventDetail
