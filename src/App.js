import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import Events from './components/Events/Events';
import Form from './components/Form/Form';
import EventCard from './components/Events/EventCard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Events/>}/>
              <Route path='newEvent' element={<Form/>}/>
              <Route path='card' element={<EventCard/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
