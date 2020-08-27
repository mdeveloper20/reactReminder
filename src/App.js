import React, { useState } from 'react'
import './App.css'
import AnimatedNumber from 'react-animated-number'

function App () {
  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <h1>React Animated Number Tutorial</h1>

      <AnimatedNumber
        value={counter}
        style={
          {
            fontSize: 200
          }
        }
        formatValue={n => n.toFixed(0)}
        frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
      />
      <div className='likes'>Likes for this video</div>

      <div className='area'>
        <button onClick={() => setCounter(counter - 50)} className='button' >Decrease</button>
        <button onClick={() => setCounter(counter + 50)} className='button green'>Increase</button>
      </div>

    </div>
  )
}

export default App
