import React from 'react'
import './App.css'
import 'firebase/database'
import classnames from 'classnames'

export default class VideoChat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userToCall: null,
      username: null
    }
  }

  onLoginClicked = async () => {
    await this.props.onLogin(this.state.username)
    this.setState({
      isLoggedIn: true
    })
  }

  onStartCallClicked = () => {
    this.props.startCall(this.state.username, this.state.userToCall)
  }

  renderVideos = () => {
    return <div className={classnames('videos', { active: this.state.isLoggedIn })}>
      <div>
        <label>{this.state.username}</label>

        <video ref={this.props.setLocalVideoRef} autoPlay playsInline></video>
      </div>
      <div>
        <label>{this.props.connectedUser}</label>
        <video ref={this.props.setRemoteVideoRef} autoPlay playsInline></video>
      </div>

    </div>
  }

  renderForms = () => {
    return this.state.isLoggedIn
      ? <div key='a' className='form'>
        <label>Call to</label>
        <input value={this.state.userToCall} type="text" onChange={e => this.setState({ userToCall: e.target.value })} />
        <button onClick={this.onStartCallClicked} id="call-btn" className="btn btn-primary">Call</button>

      </div>
      : <div key='b' className='form'>
        <label>Type a name</label>
        <input value={this.state.username} type="text" onChange={e => this.setState({ username: e.target.value })} />

        <button onClick={this.onLoginClicked} id="login-btn" className="btn btn-primary">Login</button>

      </div>
  }

  render () {
    return <section id="container">
      {this.props.connectedUser ? null : this.renderForms()}

      {this.renderVideos()}

    </section>
  }
}
