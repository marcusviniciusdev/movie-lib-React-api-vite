import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'

//componentes


function App() {


  return (
    <>
    <Navbar />  
      <Outlet />
    </>
  )
}

export default App
