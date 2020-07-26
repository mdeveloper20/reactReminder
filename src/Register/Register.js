import React, { useState } from 'react'
import Creatable from 'react-select/creatable'
import './register.css'

const roles = [
  { label: 'admin', value: 1 },
  { label: 'student', value: 2 },
  { label: 'tutor', value: 3 },
  { label: 'guardian', value: 4 }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  })
}

const Register = props => {
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [age, setAge] = useState('')
  const [roleValue, setRoleValue] = useState('')
  const [tagValue, setTagValue] = useState('')
  const [tagInputValue, setTagInputValue] = useState('')

  const handleChange = (field, newValue) => {
    switch (field) {
      case 'tags':
        setTagValue(newValue)
        break
      case 'roles':
        setRoleValue(newValue)
        break
      default:
        break
    }
  }

  const handleKeyDown = (event) => {
    if (!tagInputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setTagValue([...tagValue, createOption(tagInputValue)])

        setTagInputValue('')

        event.preventDefault()
    }
  }

  const createOption = (label) => ({
    label,
    value: label
  })

  const handleInputChange = (inputValue) => {
    setTagInputValue(inputValue)
  }

  const onSubmit = () => {
    setTagValue([])
    setRoleValue([])
    setName('')
    setFamily('')
    setAge('')
    setTagInputValue('')
  }
  return (
    <div className='container'>
      <h3>Add User</h3>
      <div className='register-form'>
        <div className='input'>
          <label>Name</label>
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='input'>
          <label>Family</label>
          <input type='text' value={family} onChange={(event) => setFamily(event.target.value)} />
        </div>
        <div className='input'>
          <label>Age</label>
          <input type='text' value={age} onChange={(event) => setAge(event.target.value)} />
        </div>
        <div className='input'>
          <label>Role(s)</label>
          <Creatable
            isClearable
            isMulti
            onChange={(value) => handleChange('roles', value)}
            options={roles}
            value={roleValue}
            styles={customStyles}
          />
        </div>
        <div className='input'>
          <label>Tag(s)</label>
          <Creatable
            components={{
              DropdownIndicator: null
            }}
            inputValue={tagInputValue}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={(value) => handleChange('tags', value)}
            placeholder="Type something and press enter..."
            onKeyDown={handleKeyDown}
            onInputChange={handleInputChange}
            value={tagValue}

          />
        </div>
        <div className='buttons'>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>

  )
}

export default Register
