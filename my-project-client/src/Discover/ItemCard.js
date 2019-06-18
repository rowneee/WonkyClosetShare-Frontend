  import React from 'react';
import { Card, Image, Icon, Modal, Header } from 'semantic-ui-react'
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
    .then(r => r.json())
    .then((data) => {
      console.log('data', data);
      this.props.borrowItem(data.id)
      // this.props.addNotification(data.id)
    })
  }

  acceptBorrow = itemId => {
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
        status: "Borrowed"
      })
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

  render() {
    console.log("itemmmm", this.props.item);
    if (this.state.details === false) {
      return (
    <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true} style={{padding: "18px", color: "blue"}}>
      <Card onClick={this.toggleDetails} >
        <Image src={this.props.item.img_url} wrapped ui={false} style={{objectFit:"cover"}}/>
        <Card.Content>
          <Card.Header>{this.props.item.brand}</Card.Header>
          <Card.Meta>OwNeR: {this.props.item.owner.username}</Card.Meta>
          <Card.Description>
            AbOuT dIs IteM: {this.props.item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='eye' />
            StAtUs: {this.props.item.status}
          </a>
        </Card.Content>
      </Card>
    </Animated>
  )}
  else if (this.state.details === true) {
    return (
      <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
        <Card >

          <Card.Content>
              <h4><b>{this.props.item.name}</b></h4>
              <div>
                <AddToCloset
                  item={this.props.item}
                  isBorrowed={this.props.isBorrowed}
                  requestToBorrowItem={this.requestToBorrowItem}
                  handleClick={this.props.handleClick}
                  addNotification={this.props.addNotification}
                  turnOffDetails={this.turnOffDetails}
                  acceptBorrow={this.acceptBorrow}
                />
              <Modal trigger={<Button onClick={this.showModal} onClose={this.turnOffDetails}>MoRe DeTaIlZ</Button>}>
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
                <Button onClick={this.turnOffDetails} >FliP baCK</Button>
              </div>
            <Card.Header>{this.props.item.name}</Card.Header>
          <Card.Meta>{this.props.item.brand}</Card.Meta>
        <Card.Description>
          {this.props.item.description}
        </Card.Description>
        </Card.Content>
      </Card>
      </Animated>
      )
    }
  }
}

export default ItemCard
