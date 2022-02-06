import React, { useEffect, useState } from 'react'
import './App.css'
import { authorsMockData } from './MockData'

function App () {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3001/authors')
      const jsonResult = await result.json()

      setAuthors(jsonResult)
    }

    fetchData()
  }, [])

  
  const submitAuthor = async () => {
    const myData = {
      avatar: 'https://picsum.photos/id/1014/100/100',
      'avatar-full': 'https://picsum.photos/id/1014/600/600',
      name: 'User 5'
    }

    const result = await fetch('http://localhost:3001/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })

    const resultInJson = await result.json()
    setAuthors(prev => [...prev, resultInJson])
  }

  return (
    <div className='authors__container'>
      <button onClick={submitAuthor}>Submit a new one</button>
      <h2>Authors:</h2>
      {authors.map(author =>
        <div key={author.id} className='authors__item'>
          <img className='authors__image' src={author.avatar}/>
          <h3>{author.name}</h3>
        </div>)}
    </div>
  )
}

export default App
