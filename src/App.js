import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Service from './Components/Service'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
