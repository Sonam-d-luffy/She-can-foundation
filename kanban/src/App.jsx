import React from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About';
import Donate from './Pages/Donate';
import Join from './Pages/Join';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/donate' element={<Donate/>} />
      <Route path='/join' element={<Join/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
