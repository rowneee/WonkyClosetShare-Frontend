import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import reduxThunk from 'redux-thunk';

import reducers from './reducers/reducers';
import rootReducer from './reducers/reducers.js'
import usersReducer from './reducers/usersReducer'

import {login,logout,signup} from './Actions/Actions'
import loginAction from './Actions/Actions'
import singOutAction from './Actions/Actions'
import { AUTHENTICATED } from './Actions/Actions';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}
//
// const AppCont = (appProps) => {
//   return (
//       <Switch>
//         <Route exact path="/" render={(props)=><HomePage {...props} items={this.state.items}/>}/>
//         <Route path="/discover" render={(props)=><DiscoverPage {...props} items={this.state.items}/>}/>
//         <Route path="/profile" render={(props)=><MyProfile {...props} items={this.state.items}/>}/>
//         <Route path="/login" component={noRequireAuth(Login)} />
//         <Route path="/signup" component={noRequireAuth(SignUp)} />
//       </Switch>
//   )
// }
//
// const AppCont =  withRouter(connect(state, props)(App));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
