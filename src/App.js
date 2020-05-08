import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersPage from './users/UsersPage';

function App() {
  return (
    <div className="App">
      <div className='title'>React Beautiful DND</div>
      <UsersPage/>
    </div>
  );
}

export default App;
