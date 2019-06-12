  import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import AddToCloset from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Discover/AddtoCloset.js'

class ItemCard extends React.Component{

  state = {
    details: false
  }

  // handleDelete = songId => {
  //   this.props.handleRemove(songId)
  // }

  addItemToCloset = itemId => {
    // e.preventDefault()
    const API = 'http://localhost:3000/api/items'
    // this.setState({activePlaylist: playlistId})
    //add song to playlist backend
    fetch(API , {
      method: 'PATCH',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //
      // })
    })
    .then(r => r.json())
    .then((data) => {
      console.log('data', data);
      this.props.borrowItem(data.id)
    })
  }

  // handleRemove = (songId) => {
  //   fetch('http://localhost:3000/api/song_playlists', {
  //     method: "DELETE",
  //     headers:{
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       song_id: songId,
  //     })
  //   }).then(r => r.json())
  //   .then((data) => {
  //     console.log('data song', data);
  //     this.props.removeFromPlaylist(data.song)
  //     // fetch('http://localhost:3000/api/playlists')
  //   })
  // }

  handleClick = () => {

  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render() {
    console.log(this.props);
    if (this.state.details === false) {
      return (
    <div className="card-list">
      <div class="card" onClick={this.toggleDetails}>
        <img src={this.props.item.img_url} alt="item-image" className="card-image"/>
        <div class="container">
          <h4><b>{this.props.item.name}</b></h4>
          <p>{this.props.item.description}</p>
        </div>
      </div>
    </div>
  )}
  else if (this.state.details === true) {
    return (
      <div className="card-list">
        <div class="card" onClick={this.toggleDetails}>
          <div class="container">
            <h4><b>{this.props.item.name}</b></h4>
            <p>Borrow this item?</p>
            <div>
              <AddToCloset
                item={this.props.item}
                isBorrowed={this.props.isBorrowed}
                addItemToCloset={this.addItemToCloset}
                handleClick={this.props.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default ItemCard
