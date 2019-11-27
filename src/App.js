import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {showNotification,hideNotification} from './redux/notifications';
import FuncApp from './FuncApp';

class App extends React.Component{


  componentDidMount(){
    setTimeout(() => {
      this.props.showNotification("Hi there!")
    }, 2000);
  
    setTimeout(() => {
      this.props.hideNotification();
    }, 5000);
  }
  render() {

  
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Notification :
          </p>
          {this.props.notifications.active && <p>{this.props.notifications.text}</p>}
        </header>
        <FuncApp/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    notifications: state.notifications
  }
}
const mapDispatchToProps={showNotification,hideNotification}

export default connect(mapStateToProps,mapDispatchToProps)(App);
