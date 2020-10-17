import React from 'react'
import { useFormik } from 'formik'

export function RegisterForm () {
  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (values.email.length < 4) {
      errors.email = 'Must be 5 characters or more'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    } else if (values.password === '12345678') {
      errors.password = 'Must not be 12345678 !!!'
    }

    if (!values.repassword) {
      errors.repassword = 'Required'
    } else if (values.repassword !== values.password) {
      errors.repassword = 'Second password doesn\'t match'
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
      repassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
      {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}/>
      {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

      <label htmlFor="repassword">Password again</label>
      <input
        id="repassword"
        name="repassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repassword}/>
      {formik.touched.repassword && formik.errors.repassword ? <div className='error'>{formik.errors.repassword}</div> : null}

      <button type="submit">Register</button>

    </form>
  </div>)
}
