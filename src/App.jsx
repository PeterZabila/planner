import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import Events from './components/Events/Events';
import Form from './components/Form/Form';
import EditForm from './components/Form/EditForm';
import EventCard from './components/Events/EventCard'
import EventDetails from './components/Events/EventDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Events/>}/>
              <Route path='/:id' element={<EventDetails/>}/>
              <Route path='newEvent' element={<Form/>}/>
              <Route path='/:id/edit' element={<EditForm/>}/>
              <Route path='card' element={<EventCard/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
