import React from 'react'
import './App.css'
import VideoChatContainer from './VideoChatContainer'

function App () {
  return (
    <div className='app'>
      <h1>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <VideoChatContainer/>
    </div>
  )
}

export default App
