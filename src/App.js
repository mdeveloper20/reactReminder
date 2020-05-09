import React from 'react'
import './App.css'
import UsersList from './UsersList/UsersList'

function App () {
  return (
    <div className='app'>
      <h1>React <b>AutoComplete</b> From API</h1>
      <h3>Using React-Select Package</h3>

      <UsersList/>

    </div>
  )
}

export default App
