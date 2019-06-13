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
        this.setState({current_user: data})
        console.log("ive reached", data)
        this.props.autoLogin(data)
        this.fetchItems(this.state.current_user)
        // if the item's owner_id matches the current_user id then add to myItems

        // this.props.history.push()
        // dispatch to redux, that sets the current user in the redux store
        // then other components can get that data from the store (in mapStateToProps)
      })
    }
    // else {
    // console.log("else", data);
    //   this.setState({current_user: data.user})
    // //   //it the localstorage has the token
    // //   //set state to current user
    // }
  }

  borrowItem = (itemId) => {
    console.log("whatAMI", itemId);
    const itemsWithRemove = this.state.items.filter(item => item.id !== itemId)
    const updatedItems = this.state.borrowedItems.filter(item=> item.id===itemId)
    this.setState({items: itemsWithRemove, borrowedItems: updatedItems})
  }

  returnItem = (itemId) => {
    console.log("return item??", itemId);
    const removedFromMyCloset = this.state.borrowedItems.filter(item=>item.id!==itemId)
    const updatedItems = this.state.items.filter(item=>item.id===itemId)
    this.setState({items: updatedItems, borrowedItems: removedFromMyCloset})
  }

  handleChosenItem = (itemId) => {
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

  fetchItems = (current_user) => {
    console.log("im da user", current_user);
    console.log("user id type:", typeof(current_user.id));
    const token = localStorage.getItem('token')
    fetch("http://localhost:3000/api/v1/items", {
      headers: {
        Authorization: `${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("fdgfe", data)
      this.setState({
        items: data,
        myItems: data.filter(item => item.owner_id === current_user.id),
        tops: data.filter(item => item.category === "Tops"),
        bottoms: data.filter(item => item.category === "Bottoms"),
        shoes: data.filter(item => item.category === "Shoes"),
        accessories: data.filter(item => item.category === "Accessories")
      })
    })
  }

  render() {
    console.log("im here", this.state);
    const isBorrowed = this.state.items.filter(item => item.borrowed)
    return (
      <div>
        <Sky
          images={{
            0: "https://scubasanmateo.com/images/cotton-clipart-animated-10.png",
            1: "http://gifgifs.com/animations/clothing/mens-clothes/Warm_pants.gif",
            2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS_mAUOzLcsEBugXhHixyvcJn16LRvsYOYCmY7JfHzuzVi1dhCA"
          }}
          how={130}
          time={40}
          size={'50px'}
          background={'blue'}
        />

      <div className="container">
          <NavBar isLoggedIn={this.props.isLoggedIn}/>
            <div>
              <Route exact path="/" render={(props)=> <HomePage {...props}
                items={this.state.items}
                />}
              />
            <Route exact path="/discover" render={(props)=> <DiscoverPage {...props}
                items={this.state.items}
                borrowItem={this.borrowItem}
                isBorrowed={this.isBorrowed}
                onChosenItem={this.handleChosenItem}
                />}
              />
            <Route exact path="/profile" render={(props)=> <MyProfile {...props}
                items={this.state.items}
                borrowedItems={this.borrowedItems}
                myItems={this.state.myItems}
                accessories={this.state.accessories}
                tops={this.state.tops}
                bottoms={this.state.bottoms}
                shoes={this.state.shoes}
                isBorrowed={isBorrowed}
                />}
              />
            </div>
            <div>
              <Route exact path="/login" render={props => <Login {...props} fetchItems={this.fetchItems}/>} />
              <Route exact path="/signup" component={SignUp} />
            </div>
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
