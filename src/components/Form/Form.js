import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
// import TimePicker from 'react-time-picker-input';
import { addEvent } from '../../reducers/events';
import "react-time-picker-input/dist/components/TimeInput.css"
import './form.css'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';



const Form = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [time, setTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const initialState = {
      title: '',
      description: '',
      date: new Date().toLocaleDateString(),
      time: '',
      location: '',
      category: 'Art',
      picture: '',
      priority: 'low'
    }

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(addEvent(formData));
        // navigate('/')
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div className='event-form'>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='Title'>Title</label><br/>
        <input name="title" id='Title' className='input-field'onChange={handleChange}/><br/>
        <label className='label' htmlFor='Description'>Description</label><br/>
        <textarea name="description" id='Description' className='input-field'onChange={handleChange}/><br/>

        <label className='label' htmlFor='date'>Select date</label><br/>
    
        <DatePicker 
            // selected={startDate} 
            className='input-field'
            onChange={(date) => setStartDate(date.toLocaleDateString())} 
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            isClearable
            name='date'
            value={startDate}
        />
        <br/>

        {/* <label className='label' htmlFor='time'>Select time</label><br/>
              <TimePicker
                className='input-field'
                onChange={(newValue)=> setTime(String(newValue))}
                value={time}
                name='time'
                className='input-field'
              />
        <br/> */}

        <label className='label' htmlFor='location'>Location</label><br/>
        <input name="location" id='Title' className='input-field'onChange={handleChange}/><br/>


        <label className='label' htmlFor='picture'>Category</label><br/>
        <select name='category' className='input-field' onChange={handleChange}>
          <option value="Art">Art</option>
          <option value="Business">Business</option>
          <option value="Music">Music</option>
          <option value="Sport">Sport</option>
        </select><br/>

        <label className='label' htmlFor='picture'>Add picture</label><br/>
        <input name="picture" id='picture' className='input-field' type="file" onChange={handleChange}/><br/>

        <label className='label' htmlFor='prority'>Priority</label><br/>
        <select name='priority' className='input-field' onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select><br/>

      <button type="submit" >Add event</button>
      </form>
    </div>
  )
}

export default Form
