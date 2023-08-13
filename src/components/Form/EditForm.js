import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEvent } from '../../reducers/events';
import './form.scss'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const EditForm = () => {
    const {id} = useParams();
    const events = useSelector((state) => state.events);
    const event = events.find(item => String(item.id) === String(id))
    const { title, date, description, category, location, priority } = event;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null)
    const [time, setTime] = useState(new Date());
    const [d, setD] = useState(date);
    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);

    const [formData, setFormData] = useState(event);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEvent({...formData, d, time, imageUpload}));
        navigate('/')
    }
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value || e.target.files})
    }

  return (
    <div className='event-form-wrapper'>
      <h3 className='title-wrapper'><span className='title-pretext'>Enter new details for</span> {title}</h3>
      <form className='event-form' onSubmit={handleSubmit}>
        <div className='input'>
          <label className='label' htmlFor='Title'>Title</label><br/>
          <input 
          placeholder={title}
              name="title" 
              // value={title} 
              id='Title' 
              className='input-field'
              onChange={handleChange}
          />
        </div>
        <div className='input'>
            <label className='label' htmlFor='description'>Description</label><br/>
            <textarea 
            name="description" 
            placeholder={description}
            // value={description} 
            id='Description' 
            className='input-field'
            onChange={handleChange}/>
        </div>
        
        <div className='input'>
          <label className='label' htmlFor='date'>Select date</label><br/>
            <input
                id="date"
                type="date"
                className='dateTime-input-field'
                onChange={(e) => setD(e.target.value)}
                ref={dateInputRef}
                pattern="\d{2}.m{2}.y{4}"
              min="2023-08-09"
            />
        </div>

        <div className='input'>
          <label className='label' htmlFor='time'>Select time</label><br/>
              <input
                placeholder={time}
                type="time"
                className='dateTime-input-field'
                onChange={(e) => setTime(e.target.value)}
                ref={timeInputRef}
                name='time'
              />
        <br/>
        </div>

        <div className='input'>
          <label className='label' htmlFor='location'>Location</label><br/>
          <input 
            placeholder={location}
            name="location" 
            id='Title' 
            className='input-field'
            onChange={handleChange}/>
        </div>
        
        <div className='input'>
          <label className='label' htmlFor='category'>Category</label><br/>
          <select 
              placeholder={category}
              name='category' 
              className='input-field' 
              onChange={handleChange}
          >
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
          <input name="picture" id='picture' className='input-field' type="file" onChange={e => setImageUpload(e.target.files)}/>
        </div>
       
        <div className='input'>
            <label className='label' htmlFor='prority'>Priority</label><br/>
                <select 
                    name='priority' 
                    placeholder={priority}
                    className='input-field' 
                    onChange={handleChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
        </div>
        <div className='button'>
        <button type="submit" onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm;
