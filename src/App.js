import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import Events from './components/Events/Events';
import Form from './components/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Events/>}/>
              <Route path='newEvent' element={<Form/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
