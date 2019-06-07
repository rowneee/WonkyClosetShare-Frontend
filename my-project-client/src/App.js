import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Nav/NavBar'
import HomePage from './Home/HomePage'
import SignIn from './Components/auth/signin'
import SignUp from './Components/auth/signup'
// import SignOut from './Components/auth/signout'
import DiscoverPage from './Discover/DiscoverPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './Components/auth/require_auth';
import noRequireAuth from './Components/auth/no_require_auth';
// <Route path="/signout" component={requireAuth(SignOut)} />
// <Route path="/secret" component={requireAuth(SecretPage)} />
class App extends React.Component {
  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }
  render() {
    return (
      <div className="ui centered container">
        <Router>
          <div className="ui segment">
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={noRequireAuth(SignIn)} />
            <Route path="/signup" component={noRequireAuth(SignUp)} />
            <Route path="/secret" component={DiscoverPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
