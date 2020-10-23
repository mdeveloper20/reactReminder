import React, {useState} from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import { useAnimation } from 'framer-motion'


function App () {

  const controls = useAnimation()
  const [selectedMode, setSelectedMode] = useState('closed')

  return (
    <div className='app'>
      <Sidebar controls={controls} setSelectedMode={setSelectedMode}/>
      <Home controls={controls} selectedMode={selectedMode} />
    </div>
  )
}

export default App
