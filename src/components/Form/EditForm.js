import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker-input';
import { updateEvent } from '../../reducers/events';
import "react-time-picker-input/dist/components/TimeInput.css"
import './form.scss'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const EditForm = () => {
    const {id} = useParams();
    const events = useSelector((state) => state.events);
    const event = events.find(item => String(item.id) === String(id))
    const { title, date, description, category, location, priority, picture } = event;
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [time, setTime] = useState(new Date());
    const [d, setD] = useState('');
    const dateInputRef = useRef(null);

    const [formData, setFormData] = useState(event);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEvent({...formData, d, time}));
        // navigate('/')
    }
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value || e.target.files})
    }

  return (
    <div className='event-form-wrapper'>
      <form className='event-form' onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor='Title'>Title</label><br/>
          <input name="title" value={title} id='Title' className='input-field'onChange={handleChange}/>
        </div>
        <div>
        <label className='label' htmlFor='Description'>Description</label><br/>
        <textarea name="description" value={description} id='Description' className='input-field'onChange={handleChange}/>
        </div>
        
        <div className='input'>
          <label className='label' htmlFor='date'>Select date</label><br/>
            <input
              id="date"
                type="date"
                className='input-field'
                onChange={(e) => setD(e.target.value)}
                ref={dateInputRef}
                pattern="\d{2}.m{2}.y{4}"
              min="2023-08-09"
            />
        </div>
          
        <div>
          <label className='label' htmlFor='time'>Select time</label><br/>
              <TimePicker
              id="time"
                className='input-field'
                onChange={(newValue)=> setTime(String(newValue))}
                value={time}
                name='time'
              />
        <br/>
        </div>

        <div>
          <label className='label' htmlFor='location'>Location</label><br/>
          <input value={location} name="location" id='Title' className='input-field'onChange={handleChange}/>
        </div>
        
        <div>
          <label className='label' htmlFor='picture'>Category</label><br/>
          <select value={category} name='category' className='input-field' onChange={handleChange}>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
            <option value="Music">Music</option>
            <option value="Sport">Sport</option>
            <option value="Party">Party</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
          </select>
        </div>
        
        <div>
          <label className='label' htmlFor='picture'>Add picture</label><br/>
          <input name="picture" id='picture' className='input-field' type="file" onChange={handleChange}/>
        </div>
       
        <div>
            <label className='label' htmlFor='prority'>Priority</label><br/>
                <select name='priority' value={priority} className='input-field' onChange={handleChange}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
        </div>

      
      </form>
      <button type="submit" onClick={handleSubmit}>Add event</button>
    </div>
  )
}

export default EditForm;
