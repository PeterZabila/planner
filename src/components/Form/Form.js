import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker-input';
import { addEvent } from '../../reducers/events';
import "react-time-picker-input/dist/components/TimeInput.css"
import './form.scss'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import goback from '../../images/goback.svg';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null)
    const [time, setTime] = useState(Date());
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const initialState = {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: 'Art',
      picture: '',
      priority: 'low'
    }

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEvent({...formData, date, time}));
        // navigate('/')
    }
    const handleChange = (e) => {
      
      if(e.target.value !== '') {
        setFormData({...formData, [e.target.name]: e.target.value || e.target.files})
      } else {
        return;
      }
    }

  return (
    <div className='event-form-wrapper'>
      <div>
        <Link to="/">
         
          <button className="goback"><img src={goback} alt=""/></button>
        </Link>
        
      </div>
      <form className='event-form' onSubmit={handleSubmit}>
        <div className='input'>
          <label className='label' htmlFor='Title'>Title</label><br/>
          <input name="title" id='Title' className='input-field' onChange={handleChange}/>
        </div>
        <div className='input'>
        <label className='label' htmlFor='Description'>Description</label><br/>
        <textarea name="description" id='Description' className='input-field'onChange={handleChange}/>
        </div>

        <div className='input'>
          <label className='label' htmlFor='date'>Select date</label><br/>
            <input
              id="date"
                type="date"
                className='input-field'
                onChange={(e) => setDate(e.target.value)}
                ref={dateInputRef}
                pattern="\d{2}.m{2}.y{4}"
              min="2023-08-09"
            />
        </div>
             
        <div className='input'>
          <label className='label' htmlFor='time'>Select time</label><br/>
              <TimePicker
                className='input-field'
                onChange={setTime}
                value={time}
                name='time'
              />
        <br/>
        </div>    
        <div className='input'>
          <label className='label' htmlFor='location'>Location</label><br/>
          <input name="location" id='Title' className='input-field'onChange={handleChange}/>
        </div>       
        <div className='input'>
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
        <div className='input'>
          <label className='label' htmlFor='picture'>Add picture</label><br/>
          <input name="picture" id='picture' className='input-field' type="file" onChange={handleChange}/>
        </div>     
        <div className='input'>
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

export default Form
