import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'

export default function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}
