import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

const Form = () => {
    const timeValue = new Date("08/08/2023 08:30 AM");
    const minTime = new Date() + "01:00 AM";
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const initialState = {
        title: '',
        description: '',
        date: new Date(),
        time: '',
        location: '',
        category: 'Art',
        picture: '',
        priority: 'low'
    }
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefult();
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div className='event-form'>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='Title'>Title</label><br/>
        <input name="Title" id='Title'/><br/>
        <label className='label' htmlFor='Description'>Description</label><br/>
        <textarea name="Description" id='Description'/><br/>

        <label className='date' htmlFor='date'>Select date</label><br/>
    
        <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            isClearable
        />
        <br/>

        <label className='time' htmlFor='time'>Select time</label><br/>
        <TimePickerComponent placeholder="Select a time"
            value={timeValue}
            min={minTime}
            format="HH:mm"
            step={60}>
        </TimePickerComponent>
            
      </form>
    </div>
  )
}

export default Form
