import React from 'react'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/database'
import config from './config'

class Connector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      database: null,
      isConnected: false,
      myId: '',
      receiverId: '',
      message: '',
      messages: []
    }
  }

    componentDidMount = async () => {
      firebase.initializeApp(config)

      this.setState({
        database: firebase.database()
      })
    }

    shouldComponentUpdate (nextProps, nextState) {
      if (this.state.database !== nextState.database) {
        return false
      }

      return true
    }

    connect = async () => {
      try {
        const { database, myId } = this.state

        await database.ref('/notifs/' + myId).remove()

        await database.ref('/notifs/' + myId).on('value', snapshot => {
          if (snapshot.exists()) {
            const notif = snapshot.val()
            this.setState({
              messages: [...this.state.messages, notif]
            })
          }
        })
        this.setState({
          isConnected: true
        })
      } catch (e) {
        console.error(e)
      }
    }

    sendMessage = async () => {
      try {
        const { database, receiverId, message, myId } = this.state
        await database.ref('/notifs/' + receiverId).set({
          message,
          from: myId
        })
        this.setState({
          message: ''
        })
      } catch (e) {
        console.error(e)
      }
    }

    renderMessage=(value, key) => {
      return <div key={key}>
        <h4>Message from {value.from}: {value.message}</h4>
      </div>
    }

    render () {
      return <div>
        {this.state.isConnected ? <div>
          <h3>Send a message:</h3>
          <input placeholder='to' value={this.state.receiverId} onChange={(e) => this.setState({ receiverId: e.target.value })} />
          <input placeholder='your message' value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />
          <button onClick={this.sendMessage}>Send</button>

          <div>
                Received messages: {this.state.messages.map(this.renderMessage)}
          </div>
        </div>
          : <div>
            <h3>What is your ID:</h3>
            <input value={this.state.myId} onChange={(e) => this.setState({ myId: e.target.value })} />
            <button onClick={this.connect}>Connect</button>

          </div>}
      </div>
    }
}

export default Connector
