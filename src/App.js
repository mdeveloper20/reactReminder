import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {inc_async,decrease,increase} from './redux/counter';
import FuncApp from './FuncApp';

class App extends React.Component{


  
  render() {

  
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FuncApp
          value={this.props.counter}
          onIncrement={() => this.props.increase()}
          onDecrement={() => this.props.decrease()}
          onIncrementAsync={() => this.props.inc_async()} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    counter: state.value
  }
}
const mapDispatchToProps={increase,decrease,inc_async}

export default connect(mapStateToProps,mapDispatchToProps)(App);
