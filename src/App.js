import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import Events from './components/Events/Events';
import Form from './components/Form/Form';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
              <Route path="events" element={<Events/>}/>
              <Route path='newEvent' element={<Form/>}/>
        
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
