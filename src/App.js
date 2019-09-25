import React from 'react'
// import logo from './logo.svg'
// import Icon from './Icon.svg'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './component/auth/login.js';
import Messanger from './component/conversation/Messanger.js';
import SignUp from './component/auth/SignUp';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import conversation from './reducer/conversation';
import logger from 'redux-logger'

const store = createStore(conversation ,
  //  applyMiddleware(logger)
   )

export default class App extends React.Component {
  render () {
  return (
    <Provider store={store}>
      <Router>
          <Route path='/' exact component={Login} />
          <Route path='/SignUp/' exact component={SignUp} />
          <Route path='/messanger/' component={Messanger} />
      </Router>
     </Provider>
    )
  }
}
