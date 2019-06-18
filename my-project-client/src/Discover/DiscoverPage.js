import React, {Component, Fragment} from 'react'
import AllItems from './AllItems'
import ItemCard from './ItemCard'
import { Card } from 'semantic-ui-react'
import {Animated} from "react-animated-css"


class DiscoverPage extends Component {

  // state = {
  //     error: false,
  //     hasMore: true,
  //     isLoading: false,
  //     users: [],
  //   };
  //
  //   // Binds our scroll event handler
  //   window.onscroll = () => {
  //     const {
  //       loadUsers,
  //       state: {
  //         error,
  //         isLoading,
  //         hasMore,
  //       },
  //     } = this;
  //
  //     // Bails early if:
  //     // * there's an error
  //     // * it's already loading
  //     // * there's nothing left to load
  //     if (error || isLoading || !hasMore) return;
  //
  //     // Checks that the page has scrolled to the bottom
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop
  //       === document.documentElement.offsetHeight
  //     ) {
  //       loadUsers();
  //     }
  //   };
  // }
  //
  // componentWillMount() {
  //   // Loads some users on initial load
  //   this.loadUsers();
  // }
  //
  // loadUsers = () => {
  //   this.setState({ isLoading: true }, () => {
  //     request
  //       .get('https://randomuser.me/api/?results=10')
  //       .then((results) => {
  //         // Creates a massaged array of user data
  //         const nextUsers = results.body.results.map(user => ({
  //           email: user.email,
  //           name: Object.values(user.name).join(' '),
  //           photo: user.picture.medium,
  //           username: user.login.username,
  //           uuid: user.login.uuid,
  //         }));
  //
  //         // Merges the next users into our existing users
  //         this.setState({
  //           // Note: Depending on the API you're using, this value may
  //           // be returned as part of the payload to indicate that there
  //           // is no additional data to be loaded
  //           hasMore: (this.state.users.length < 100),
  //           isLoading: false,
  //           users: [
  //             ...this.state.users,
  //             ...nextUsers,
  //           ],
  //         });
  //       })
  //       .catch((err) => {
  //         this.setState({
  //           error: err.message,
  //           isLoading: false,
  //          });
  //       })
  //   });
  // }

  handleClick = (itemId) => {
    this.props.borrowItem(itemId)
  }

  render() {
    return (
      <div className="container">
        <center>
          <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <div className="my-closet-title">
                DISCOVER
            </div>
          </Animated>
        </center>
        <div className="ui five column grid">
          <div className="row card-row">
            <Card.Group>
            {this.props.items.map(item => {
              return <ItemCard
                item={item}
                key={item.id}
                id={item.id}
                borrowItem={()=>this.borrowItem}
                isBorrowed={this.props.isBorrowed}
                handleClick={this.handleClick}
                addNotification={this.props.addNotification}
                currentUser={this.props.currentUser}
                />
            })}
          </Card.Group>
          </div>
        </div>
      </div>

    )
  }

}

export default DiscoverPage
