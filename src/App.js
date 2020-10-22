import React, { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.js'
import Home from './Home.js'

function App () {
  return (
    <div className='app'>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App
