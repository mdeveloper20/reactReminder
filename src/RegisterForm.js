import React from 'react'
import { useFormik } from 'formik'
import CustomSelect from './CustomSelect'
const options = [
  { value: 'developer', label: 'Software Developer' },
  { value: 'chef', label: 'Chef' },
  { value: 'enginner', label: 'Enginner' },
  { value: 'painter', label: 'Painter' }

]
export function RegisterForm () {

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    }

    if(!values.job){
      errors.job='Required'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      job: ''
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }

  })

  return (<div>
    <h1>Register </h1>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email Address</label>

      <input
        id="email"
        name="email"
        type="email"
        className='input'
        onChange={formik.handleChange}
        value={formik.values.email}/>
      {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      <label htmlFor="job">Option</label>

      <CustomSelect
        className='input'
        onChange={value=>formik.setFieldValue('job',value.value)}
        value={formik.values.job}
        options={options}
        />
      {formik.errors.job ? <div className='error'>{formik.errors.job}</div> : null}

      <button type="submit">Register</button>

    </form>
  </div>)
}
