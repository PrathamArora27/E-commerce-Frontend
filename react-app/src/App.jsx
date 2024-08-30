import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import {Router,Routes,Route,} from 'react-router-dom';

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
      

    </>
  )
}

export default App
