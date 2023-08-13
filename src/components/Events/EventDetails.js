import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeEvent } from '../../reducers/events';
import styles from './eventDetails.module.scss';
import { useParams, Link, useNavigate } from 'react-router-dom';
import img from '../../images/default.png';
import goback from '../../images/goback.svg';

const EventDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events);
  const event = events.find(item => String(item.id) === String(id))
  const { title, date, time, description, category, location, priority, picture = img } = event;

  const dateToString = (date.split('-'))
  dateToString.shift();
  const formattedDataOutput = dateToString.join('.')

  const handleDelete = (id) => {
    console.log(id)
    dispatch(removeEvent(id));

    navigate('/')
  }

  return (
    <div>
      <div>
        <Link to="/">
          <button className={styles.goback}><img src={goback} alt=""/></button>
        </Link>
        
      </div>
      <div className={styles.cardContainer}>
      <div>
          <h3 className={styles.cardTitle}>{title}</h3>
      </div>

      <div className={styles.imageContainer}>
        <img alt=''/>
        {/* <img src={picture ? picture : img} alt=''/> */}
      </div>

      <div className={styles.cardDetails}>
                <div className={styles.cardContentItem}>{category}</div>
                <div className={styles.cardContentItem}>{priority}</div>
                <div className={styles.cardContentItem}>{location}</div>
                <div className={styles.cardContentItem}>
                  {formattedDataOutput} at {time}
                </div>
      </div>
            <div className={styles.description}>
                  <p>{description}</p>
            </div>

            <div className={styles.buttonsGroup}>
              <Link to={`/${id}/edit`}>
                  <button className={styles.btnEdit}>Edit</button>
              </Link>
              
              <button className={styles.btnDelete} onClick={() => handleDelete(id)}>Delete event</button>
            </div>    
    </div>
    </div>
  )
}

export default EventDetail
