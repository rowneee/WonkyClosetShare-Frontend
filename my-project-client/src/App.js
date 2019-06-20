import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sky from 'react-sky';
// import Sky from './sky'

import { login, autoLogin, itemsFetch } from './Actions/userActions'

import NavBar from './Nav/NavBar'
import HomePage from './Home/HomePage'
import MyProfile from './Profile/MyProfile'
import Notifications from './Notifications'
import Login from './Components/auth/Login'
import SignUp from './Components/auth/signup'
import Logout from './Components/auth/logout'
import DiscoverPage from './Discover/DiscoverPage'
import { Container} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import requireAuth from './Components/auth/require_auth';
import noRequireAuth from './Components/auth/no_require_auth';
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
    currentUser: {},
    pendingItems: [],
    status: ""
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    //make another action creator to dispatch item
    //make accessible through the store


    console.log(token, )
    if (!!token && !this.props.isLoggedIn) {
      fetch('http://localhost:3000/api/v1/auto_login', {
        headers: {
          Authorization: `${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        // dispatch the logged in user
        // data or data.user {id: 1, name: 'hi'}
        this.setState({currentUser: data}, () => {
          this.fetchItems(this.state.currentUser)
          this.getNotifications(this.state.currentUser)
        })
        this.props.autoLogin(data)
        // if the item's owner_id matches the currentUser id then add to myItems

        // this.props.history.push()
        // dispatch to redux, that sets the current user in the redux store
        // then other components can get that data from the store (in mapStateToProps)
      })
    }
    // else {
    // console.log("else", data);
    //   this.setState({currentUser: data.user})
    // //   //it the localstorage has the token
    // //   //set state to current user
    // }
  }

  // addNotification = (itemId) => {
  //   const requestedItems = this.state.borrowedItems.filter(item=> item.id===itemId)
  //   this.setState({pendingItems: requestedItems})
  // }

  resetState = () => {
    this.setState({
    items: [],
    tops: [],
    bottoms: [],
    shoes: [],
    accessories: [],
    myItems: [],
    borrowedItems: [],
    borrowed: false,
    currentUser: {},
    pendingItems: [],
    status: ""})
  }

  handleSubmitNewItem = item => {
  console.log("da item", item)
    this.setState({myItems: [...this.state.myItems, item], items: [...this.state.items, item] })
  }

  getNotifications = currentUser => {
    console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt');
    const token = localStorage.getItem('token')
    console.log("uza id", currentUser.id);
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/pending_items`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `${token}`
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log("get noti*****************************", data);
      // debugger
      this.setState({pendingItems: data})
      console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');

    })
  }

  receiveAcceptedItem = itemObj => {
    const updatedCloset = this.state.pendingItems.filter(item=> item.id===itemObj.id)

    this.setState({borrowedItems: updatedCloset, status: "Borrowed"})
  }

  borrowItem = (itemId, borrowerId) => {
    // const itemsWithRemove = this.state.items.filter(item => item.id !== itemId)
    const updatedItems = this.state.borrowedItems.filter(item=> item.id===itemId)

    this.setState({borrowedItems: updatedItems})
  }

  returnItem = (itemId) => {
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

  fetchItems = (currentUser) => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3000/api/v1/items", {
      headers: {
        Authorization: `${token}`
      }
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        items: data,
        myItems: data.filter(item => item.owner_id === currentUser.id),
        tops: data.filter(item => item.category === "Tops"),
        bottoms: data.filter(item => item.category === "Bottoms"),
        shoes: data.filter(item => item.category === "Shoes"),
        accessories: data.filter(item => item.category === "Accessories")
      })
    })
  }

  render() {
    console.log("pending", this.state.pendingItems);
    console.log("current user", this.state.currentUser);
    const isBorrowed = this.state.items.filter(item => item.borrowed)
    return (
      <div>
          <Sky
            images={{
              0: "https://scubasanmateo.com/images/cotton-clipart-animated-10.png",
              1: "http://gifgifs.com/animations/clothing/mens-clothes/Warm_pants.gif",
              2: "https://bankkita.com/images1280_/orange-clipart-shoes-3.jpg"
            }}
            how={130}
            time={40}
            size={'50px'}
            background={'#99ccff'}
            background-position={'fixed'}
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
                addNotification={this.addNotification}
                currentUser={this.state.currentUser}
                status={this.state.status}
                />}
              />
            <Route exact path="/profile" render={(props)=> <MyProfile {...props}
                items={this.state.items}
                borrowedItems={this.state.borrowedItems}
                myItems={this.state.myItems}
                accessories={this.state.accessories}
                tops={this.state.tops}
                bottoms={this.state.bottoms}
                shoes={this.state.shoes}
                isBorrowed={isBorrowed}
                currentUser={this.state.currentUser}
                handleSubmitNewItem={this.handleSubmitNewItem}

                />}
              />
            <Route exact path="/notifications" render={(props)=> <Notifications {...props}
              pendingItems={this.state.pendingItems}
              receiveAcceptedItem={this.receiveAcceptedItem}
              />}
            />
            <Route exact path="/logout" render={(props)=> <Logout {...props}
              resetState={this.resetState}
              />}
            />
            </div>
            <div>
              <Route exact path="/login" render={props => <Login {...props} fetchItems={this.fetchItems} getNotifications={this.getNotifications}/>} />
              <Route exact path="/signup" component={SignUp} />
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.user,
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps, { autoLogin })(App))
