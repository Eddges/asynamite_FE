import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import Funcs from './Reducers/Funcs';
import User from './Reducers/User';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  func : Funcs,
  usr : User,
  
})

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
    ,
  document.getElementById('root')
);

