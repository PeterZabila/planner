import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
// import { nanoid } from 'nanoid';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker-input';
import { addEvent } from '../../reducers/events';
import "react-time-picker-input/dist/components/TimeInput.css"
import './form.scss'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import goback from '../../images/goback.svg';
// import { storage } from "firebase";
// import { ref, uploadBytes } from "firebase?storage";


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null)
    const [time, setTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
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
        console.log(formData)
        dispatch(addEvent({...formData, startDate, time}));
        // navigate('/')
    }
    const handleChange = (e) => {
      
      if(e.target.value !== '') {
        setFormData({...formData, [e.target.name]: e.target.value || e.target.files})
        console.log(e.target.value)
      } else {
        return;
      }
       
    }

    // const uploadImage = () => {
    //   if (imageUpload === null) return;
    //   const imageRef = ref(storage, `images/${imageUpload.name + nanoid()}`)
    //   uploadBytes(imageRef, imageUpload).then(() => {
    //     alert("Image uploaded!")
    //   })
    // }

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
            <DatePicker 
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
        <div className='input'>
          <label className='label' htmlFor='time'>Select time</label><br/>
              <TimePicker
                className='input-field'
                onChange={(newValue)=> setTime(String(newValue))}
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
