import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import notifications from './redux/notifications'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const reducers=combineReducers({notifications})
const store=createStore(reducers,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
