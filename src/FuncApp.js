import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {showNotification,hideNotification} from './redux/notifications';


const FuncApp = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>



function mapStateToProps(state){
  return{
    notifications: state.notifications
  }
}
const mapDispatchToProps={showNotification,hideNotification}

export default connect(mapStateToProps,mapDispatchToProps)(FuncApp);
