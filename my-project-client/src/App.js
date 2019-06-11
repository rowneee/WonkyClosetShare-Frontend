import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sky from 'react-sky';

import { login, autoLogin, itemsFetch } from './Actions/userActions'

import NavBar from './Nav/NavBar'
import HomePage from './Home/HomePage'
import MyProfile from './Profile/MyProfile'
import Login from './Components/auth/Login'
import SignUp from './Components/auth/signup'
// import SignOut from './Components/auth/signout'
import DiscoverPage from './Discover/DiscoverPage'
import { Container} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
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
    accessories: [],
    myItems: [],
    borrowedItems: [],
    borrowed: false,
    current_user: {}
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    //make another action creator to dispatch item
    //make accessible through the store


    if (!!token && !this.isLoggedIn) {
      fetch('http://localhost:3000/api/v1/auto_login', {
        headers: {
          Authorization: `${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        // dispatch the logged in user
        // data or data.user {id: 1, name: 'hi'}
        console.log("ive reached", data)
        this.props.autoLogin(data)
        this.fetchItems()
        // this.props.history.push()
        // dispatch to redux, that sets the current user in the redux store
        // then other components can get that data from the store (in mapStateToProps)
      })
    }
    // else {
    //
    //   // this.setState({current_user: data.user})
    //   //it the localstorage has the token
    //   //set state to current user
    // }
  }

  // borrowItem = (ItemId) => {
  //   console.log("whatAMI", itemId);
  //   const updatedItems = this.state.items.map(item => {
  //     if (item.id === itemId) {
  //       return {
  //         items: {...this.state.items, item}
  //       }
  //     } else {
  //       return item
  //     }
  //   })
  //   this.setState({items: updatedItems})
  // }

  handleChosenCard = (itemId, userId) => {
    this.setState(prevState => {
      return {
        items: prevState.items.map(item => {
          if (item.id === itemId) {
            return {...item, borrowed: true}
          } else {
            return item
          }
        })
      }
    })
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  fetchItems = () => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3000/api/v1/items", {
      headers: {
        Authorization: `${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("fdgfe", data)
      this.setState({items: data})
    })
  }

  // componentDidUpdate() {
  //   fetch("http://localhost:3000/api/v1/items", {
    //       headers: {
    //         Authorization: `${token}`
    //       }
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //       setState
  // }

  render() {
    console.log("im here", this.props);
    const isBorrowed = this.state.items.filter(item => item.borrowed)
    return (
      <div className="ui centered container">
        <Sky
          images={{
            0: "https://scubasanmateo.com/images/cotton-clipart-animated-10.png",
            1: "http://gifgifs.com/animations/clothing/mens-clothes/Warm_pants.gif",
            2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS_mAUOzLcsEBugXhHixyvcJn16LRvsYOYCmY7JfHzuzVi1dhCA"
          }}
          how={130}
          time={40}
          size={'100px'}
          background={'blue'}
        />

        <div className="ui segment">
          <NavBar isLoggedIn={this.props.isLoggedIn}/>

          {this.props.isLoggedIn
            ?
            <div>
              <Route path="/" render={(props)=> <HomePage {...props}
                items={this.state.items}
                />}
              />
              <Route path="/discover" render={(props)=> <DiscoverPage {...props}
                items={this.state.items}
                borrowItem={this.borrowItem}
                isBorrowed={isBorrowed}
                onChosenCard={this.handleChosenCard}
                />}
              />
              <Route path="/profile" render={(props)=> <MyProfile {...props}
                items={this.state.items}
                isBorrowed={isBorrowed}
                />}
              />
            </div>
            :
            <div>
              <Route path="/login" render={props => <Login {...props} fetchItems={this.fetchItems}/>} />
              <Route path="/signup" component={SignUp} />
            </div>
            }
        </div>
      </div>
    )
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
