import React, { Component } from 'react'
class Login extends Component {
    state = {
      email: '',
      password: ''
    }

    onChange=(field) => (e) => {
      this.setState({
        [field]: e.target.value
      })
    }

    doAuth=() => {
      const { email, password } = this.state
      this.props.doLogin(email, password)
    }

    render () {
      return (<div className="container pt-5">
        <div>
          <h2>Login</h2>
          <div className='form-group'>
            <label>Email</label>
            <input type='text' className='form-control' value={this.state.email} onChange={this.onChange('email')}/>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' value={this.state.password} onChange={this.onChange('password')}/>
          </div>

          <div className='mt-2 d-flex align-items-center'>
            <button onClick={this.doAuth} className='btn-primary mt-2'>
              Login
            </button>

          </div>
          {this.props.errorMessage ? <div className='mt-2 alert alert-danger' role="alert">
            {this.props.errorMessage}
          </div> : null}

        </div>

      </div>)
    }
}

export default Login
