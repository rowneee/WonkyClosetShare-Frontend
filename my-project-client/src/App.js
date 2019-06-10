import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sky from 'react-sky';
import myImage from "/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/alex.png"

import { autoLogin } from './Actions/userActions'

import NavBar from './Nav/NavBar'
import HomePage from './Home/HomePage'
import MyProfile from './Profile/MyProfile'
import Login from './Components/auth/Login'
import SignUp from './Components/auth/signup'
// import SignOut from './Components/auth/signout'
import DiscoverPage from './Discover/DiscoverPage'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import requireAuth from './Components/auth/require_auth';
import noRequireAuth from './Components/auth/no_require_auth';
// <Route path="/signout" component={requireAuth(SignOut)} />
// <Route path="/secret" component={requireAuth(SecretPage)} />
class App extends React.Component {

  state = {
    items: [],
    tops: [],
    bottoms: [],
    shoes: [],
    accessories: []
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    fetch('http://localhost:3000/api/v1/items')
    .then(r => r.json())
    .then(items => {
      this.setState({items})
    })

    if (!!token && !this.isLoggedIn) {
      fetch('http://localhost:3000/api/v1/auto_login', {
        headers: {
          Authorization: `${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log("ive reached", data)
        // this.props.history.push()
        // dispatch to redux, that sets the current user in the redux store
        // then other components can get that data from the store (in mapStateToProps)
      })
    }

      // .then(if (token && !this.props.user) {
      //   fetch('http://localhost:4000/api/v1/auto_login', {
      //   headers: {
      //     Authorization: `${token}`
      //   }
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log("ive reached", data)
      //   }))
      // }
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  render() {
    console.log("im here", this.props);
    return (
      <div className="ui centered container">
        <Sky
          images={{
            0: "/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/alex.png",
            1: "/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/alex.png",
            2: "/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/alex.png"
          }}
          how={130}
          time={40}
          size={'100px'}
          background={'purple'}
        />

        <div className="ui segment">
          <NavBar />
          <Route exact path="/" render={(props)=><HomePage {...props} items={this.state.items}/>}/>
          <Route path="/discover" render={(props)=><DiscoverPage {...props} items={this.state.items}/>}/>
          <Route path="/profile" render={(props)=><MyProfile {...props} items={this.state.items}/>}/>
          <div>
            <Route path="/login" component={noRequireAuth(Login)} />
            <Route path="/signup" component={noRequireAuth(SignUp)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('WHAT DOES OUR INITIAL STATE NOW LOOK LIKE', state)
  return {
    isLoggedIn: !!state.user.user,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { autoLogin })(App))
