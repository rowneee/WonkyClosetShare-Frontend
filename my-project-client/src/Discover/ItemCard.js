  import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import AddToCloset from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Discover/AddtoCloset.js'
import {Animated} from "react-animated-css"

class ItemCard extends React.Component{

  state = {
    details: false
  }

  // handleDelete = songId => {
  //   this.props.handleRemove(songId)
  // }

  requestToBorrowItem = (itemId) => {
    console.log(itemId, this.props.currentUser.id)
    // e.preventDefault()
    // 1) make sure that some id is correct (rails console find(some_id))
    const API = `http://localhost:3000/api/v1/items/${itemId}`
    // this.setState({activePlaylist: playlistId})
    //add song to playlist backend
    fetch(API , {
      method: 'PATCH',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: "Pending",
        borrower_id: this.props.currentUser.id
      })
    })
    // .then(r => r.json())
    // .then((data) => {
    //   console.log('data', data);
    //   this.props.borrowItem(data.id)
    //   // this.props.addNotification(data.id)
    // })
  }

  removeItemFromCloset = (itemId) => {
    fetch(`http://localhost:3000/api/v1/items/${itemId}`, {
      method: "PATCH",
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: "Not Borrowed",
        borrower_id: null
      })
    }).then(r => r.json())
    .then((data) => {
      console.log('return data', data);
      this.props.returnItem(data.id)
    })
  }

  handleClick = () => {

  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render() {
    console.log(this.props);
    if (this.state.details === false) {
      return (
    <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
    <div className="card-list">
      <div class="card" onClick={this.toggleDetails}>
        <img src={this.props.item.img_url} alt="item-image" className="card-image"/>
        <div class="container">
          <h4><b>{this.props.item.name}</b></h4>
          <p>{this.props.item.description}</p>
        </div>
      </div>
    </div>
    </Animated>
  )}
  else if (this.state.details === true) {
    return (
      <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
      <div className="card-list">
          <div class="card" onClick={this.toggleDetails}>
            <div class="container">
              <h4><b>{this.props.item.name}</b></h4>
              <p>Request To Borrow</p>
              <div>
                <AddToCloset
                  item={this.props.item}
                  isBorrowed={this.props.isBorrowed}
                  requestToBorrowItem={this.requestToBorrowItem}
                  handleClick={this.props.handleClick}
                  addNotification={this.props.addNotification}
                />
              </div>
            </div>
          </div>
      </div>
      </Animated>
      )
    }
  }
}

export default ItemCard
