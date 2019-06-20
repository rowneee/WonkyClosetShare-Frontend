  import React from 'react';
import { Image, Icon, Modal, Header } from 'semantic-ui-react'
import AddToCloset from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Discover/AddtoCloset.js'
import {Animated} from "react-animated-css"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ItemCard extends React.Component{

  state = {
    details: false,
    openModal: false
  }

  // handleDelete = songId => {
  //   this.props.handleRemove(songId)
  // }

  requestToBorrowItem = (itemId) => {
    console.log(itemId, this.props.currentUser.id)
    const token = localStorage.getItem('token')
    // e.preventDefault()
    // 1) make sure that some id is correct (rails console find(some_id))
    const API = `http://localhost:3000/api/v1/items/${itemId}`
    // this.setState({activePlaylist: playlistId})
    //add song to playlist backend
    fetch(API , {
      method: 'PATCH',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        status: "Pending",
        borrower_id: this.props.currentUser.id
      })
    })
    .then(r => r.json())
    .then((data) => {
      console.log('data', data);
      this.props.borrowItem(data.id, this.props.currentUser.id)
      // this.props.addNotification(data.id)
    })
  }

  acceptBorrow = itemId => {
    const token = localStorage.getItem('token')
    const API = `http://localhost:3000/api/v1/items/${itemId}`
    // this.setState({activePlaylist: playlistId})
    //add song to playlist backend
    fetch(API , {
      method: 'PATCH',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        status: "Borrowed"
      })
    })
    .then(r=>r.json())
    .then(data => {
      console.log("hiiii", data);
      this.props.receiveAcceptedItem(data)
    })
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

  toggleDetails = () => {
    this.setState({details: true})
  }

  turnOffDetails = () => {
    this.setState({details: false})
  }

  showModal = () => {
    this.setState({openModal: true})
  }
  closeModal = () => {
    this.setState({openModal: false})
  }

  render() {
    console.log("itemmmm", this.props.item);
    if (this.state.details === false) {
      return (
    <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
      <div className="item-card" onClick={this.toggleDetails} >
        <div className="item-card-topbar">
          <div className="item-card-topbar-button">
            <p className="button-x">
              x
            </p>
          </div>
          <div className="item-card-topbar-button2">
            <p className="button-2">
              -
            </p>
          </div>
        </div>
        <Image className="item-card-image" src={this.props.item.img_url} />
        <div className="item-card-content">
          <div className="item-card-header">{this.props.item.brand}</div>
          <div className="item-card-info">OwNeR: {this.props.item.owner.username}</div>
          <div className="item-card-info">
            AbOuT dIs IteM: {this.props.item.description}
          </div>
        </div>
        <div className="item-card-info card-info" extra>
          <a>
            <Icon name='eye' />
            StAtUs: {this.props.item.status}
          </a>
        </div>
      </div>
    </Animated>
  )}
  else if (this.state.details === true) {
    return (
      <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
        <div className="item-card" >
          <div className="item-card-content">
              <center>
              <h4><b>{this.props.item.name}</b></h4>
              <div className="borrow-button">
                <AddToCloset
                  item={this.props.item}
                  isBorrowed={this.props.isBorrowed}
                  requestToBorrowItem={this.requestToBorrowItem}
                  handleClick={this.props.handleClick}
                  addNotification={this.props.addNotification}
                  turnOffDetails={this.turnOffDetails}
                  acceptBorrow={this.acceptBorrow}
                  closeModal={this.closeModal}
                  currentUser={this.props.currentUser}
                />
                <br />
              <Modal trigger={<Button onClick={this.showModal} variant="outlined"
              color="primary">MoRe DeTaIlZ</Button>}>
                  <Modal.Header>{this.props.item.brand}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src={this.props.item.img_url} />
                    <Modal.Description>
                      <p>SiZe: {this.props.item.size}</p>
                      <p>CoLoR: {this.props.item.color}</p>
                      <p>AbOuT: {this.props.item.description}</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              <br />
              <br />
                <Button onClick={this.turnOffDetails} variant="outlined"
                color="primary">FliP baCK</Button>
              </div>
        </center>
      </div>
      </div>
      </Animated>
      )
    }
  }
}

export default ItemCard

// <div className="item-card-header">{this.props.item.name}</div>
// <div className="item-card-info">{this.props.item.brand}</div>
// <div className="item-card-info">
// {this.props.item.description}
// </div>
