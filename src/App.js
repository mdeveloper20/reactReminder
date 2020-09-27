import React from 'react'
import './App.css'
import Connector from './Connector'

function App () {
  return (
    <div className='app'>
      <h1>React Firebase Realtime Database Tutorial</h1>
      <h2>Send realtime messages to other users</h2>
      <Connector/>
    </div>
  )
}

export default App
