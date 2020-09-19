import React from 'react'
import Login from './Login'
import 'firebase/auth'
import config from './config'
import firebase from 'firebase/app'
class VideoChatContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      isLoading: true
    }
  }

    componentDidMount = async () => {
      firebase.initializeApp(config)

      firebase.auth().onAuthStateChanged(user => {
        this.setState({
          user,
          isLoading: false
        })
      })
    }

    doLogin=async (email, password) => {
      try {
        this.setState({ isLoading: true })
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        const errorCode = error.code
        if (errorCode === 'auth/user-not-found') {
          // register the user
          this.doRegister(email, password)
        } else {
          const errorMessage = error.message
          this.setState({
            errorMessage
          })
        }
      } finally {
        this.setState({
          isLoading: false
        })
      }
    }

    doRegister=async (email, password) => {
      try {
        this.setState({ isLoading: true })
        await firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch (error) {
        const errorMessage = error.message
        this.setState({
          errorMessage
        })
      } finally {
        this.setState({
          isLoading: false
        })
      }
    }

    doLogout=async () => {
      try {
        this.setState({ isLoading: true })
        await firebase.auth().signOut()
      } catch (error) {
        console.error(error)
      } finally {
        this.setState({
          isLoading: false
        })
      }
    }

    render () {
      return <div className='bg-light vh-100'>
        {this.state.isLoading
          ? <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          : <div className='container'>
            {this.state.user
              ? <div>
                <div className='mt-5 alert alert-success'>Hi, welcome to my app!</div>
                <button onClick={this.doLogout} className='btn-secondary'>Logout</button>
              </div>
              : <Login
                doLogin={this.doLogin}
                errorMessage={this.state.errorMessage}
              />
            }
          </div>}

      </div>
    }
}

export default VideoChatContainer
