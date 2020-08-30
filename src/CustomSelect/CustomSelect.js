import React, { useState } from 'react'
import classnames from 'classnames'

export default function CustomSelect ({ value, title, options, onChange }) {
  const [isActive, setIsActive] = useState(false)

  const applyChange = (newItemId) => {
    onChange && onChange([...value, newItemId])
  }

  const removeValue = (removedItemId) => {
    onChange && onChange(value.filter(i => i !== removedItemId))
  }

  return <div className="dropdown-container">
    <label>{title}</label>
    <div className="dropdown-input">
      <span onClick={() => setIsActive(!isActive)} className='arrow-down'></span>
      <div className='dropdown-values'>
        {value.length ? value.map(v => <div key={v} className='dropdown-value'> {options[v].label} <span className='dropdown-remove' onClick={() => removeValue(v)}>X</span></div>) : <div onClick={() => setIsActive(!isActive)} className='dropdown-placeholder'>Select an item</div> }
      </div>
    </div>
    <div className={classnames('dropdown-options', { 'dropdown-active': isActive })}>
      {options.filter(i => value.findIndex(v => v === i.id) === -1).map(item =>
        <div onClick={() => applyChange(item.id)} className="dropdown-item" key={item.id}>
          <img src={item.logo}/>
          {item.label}
        </div>
      )}
    </div>
  </div>
}
