import React, { useState } from 'react'
import './App.css'
import Formsy, { addValidationRule } from 'formsy-react'
import MyInput from './Inputs/MyInput'

const errors = {
  isEmail: 'You have to type a valid email',
  maxLength: 'You cannot type more than 25 characters',
  minLength: 'You must type more than 6 characters',
  isAlpha: 'You can only type letters',
  equalsField: 'Password is not match',
  isStrong: 'Your password is not strong'
}
function App () {
  const [canSubmit, setCanSubmit] = useState(false)
  addValidationRule('isStrong', function (values, value) {
    return ['$', '%'].some(v => value && value.indexOf(v) !== -1)
  })

  const disableButton = () => {
    setCanSubmit(false)
  }

  const enableButton = () => {
    setCanSubmit(true)
  }

  const submit = (model) => {
    console.log('model', model)
  }

  return (
    <div className='app'>
      <h1>Form validation in React Js</h1>

      <Formsy className='form' onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton}>
        <MyInput label="Email address" type="text" name="email" validations="maxLength:25,isEmail" validationErrors={errors} placeholder="type your email address..." required />
        <MyInput label="Password" type="password" name="password" validations="minLength:6,isStrong" validationErrors={errors} placeholder="type your password..." required />
        <MyInput label="Password repeat" type="password" name="passwordrepeat" validations="equalsField:password" validationErrors={errors} placeholder="type your password..." required/>

        <button type="submit" disabled={!canSubmit}>
          Register
        </button>
      </Formsy>
    </div>
  )
}

export default App
