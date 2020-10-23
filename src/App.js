import React, { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.js'
import Home from './Home.js'

function App () {

  const [selectedMode, setSelectedMode] = useState('open')
  return (
    <div className='app'>
      <Sidebar setSelectedMode={setSelectedMode}/>
      <Home selectedMode={selectedMode}/>
    </div>
  )
}

export default App
