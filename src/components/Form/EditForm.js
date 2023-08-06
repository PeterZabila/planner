import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
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
    const [startDate, setStartDate] = useState(date);
    const initialState = {
      title,
      description,
      date,
      time: '',
      location,
      category,
      picture: '',
      priority
    }

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(updateEvent({...formData, time}));
        // navigate('/')
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div className='event-form-wrapper'>
      <form className='event-form' onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor='Title'>Title</label><br/>
          <input name="title" id='Title' className='input-field'onChange={handleChange}/>
        </div>
        <div>
        <label className='label' htmlFor='Description'>Description</label><br/>
        <textarea name="description" id='Description' className='input-field'onChange={handleChange}/>
        </div>
        <div>
          <label className='label' htmlFor='date'>Select date</label><br/>
            <DatePicker 
                // selected={startDate} 
                id="date"
                className='input-field'
                onChange={(date) => setStartDate(date.toLocaleDateString())} 
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable
                name='date'
                value={startDate}
            />
        </div>
          

        <div>
          <label className='label' htmlFor='time'>Select time</label><br/>
              <TimePicker
              id="time"
                className='input-field'
                onChange={(newValue)=> setTime(String(newValue))}
          
                name='time'
              />
        <br/>
        </div>

        <div>
          <label className='label' htmlFor='location'>Location</label><br/>
          <input name="location" id='Title' className='input-field'onChange={handleChange}/>
        </div>
        
        <div>
          <label className='label' htmlFor='picture'>Category</label><br/>
          <select name='category' className='input-field' onChange={handleChange}>
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
                <select name='priority' className='input-field' onChange={handleChange}>
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
