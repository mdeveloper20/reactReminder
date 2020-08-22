import React, { useState } from 'react'
import classNames from 'classnames'
import './App.css'

function App () {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHeader = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='app'>
      <h3>React Popper JS</h3>

      <div className='box'>
        <p onClick={onClickHeader} className="title">Click me! <i className="arrow-up"></i></p>

        <div className={classNames('description', { 'description-active': isOpen })}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  )
}

export default App
