import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class ItemCard extends React.Component{

  state = {
    details: false
  }

  // handleDelete = songId => {
  //   this.props.handleRemove(songId)
  // }

  // setCloset = (playlistId) => {
  //   const API = 'http://localhost:3000/api/'
  //   console.log(playlistId);
  //   // this.setState({activePlaylist: playlistId})
  //   //add song to playlist backend
  //   fetch(API , {
  //     method: 'POST',
  //     headers:{
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       song_id: this.props.item.id,
  //       playlist_id: playlistId
  //     })
  //   })
  //   .then(r => r.json())
  //   .then((data) => {
  //     console.log('data', data);
  //     this.props.addToPlaylist(data.playlist_id, data.song)
  //     // fetch('http://localhost:3000/api/playlists')
  //   })
  // }

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

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  render() {
    console.log(this.props);
    if (this.state.details === false) {
      return (
    <div className="ui column item-card" >
      <Card onClick={this.toggleDetails}>
        <Image src={this.props.item.img_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{this.props.item.name}</Card.Header>
              <Card.Description>
            {this.props.item.description}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )}
  else if (this.state.details === true) {
    return (
      <Card onClick={this.toggleDetails} handleClick={this.props.handleClick}>
        <Card.Content className="cardBack">
          <Image floated='right' size='mini' src={this.props.item.img_url} />
          <Card.Header>{this.props.item.name}</Card.Header>
          <Card.Meta>{this.props.item.artist}</Card.Meta>
          <Card.Description>
            Borrow this item?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
       </Card>
      )
    }
  }
}

export default ItemCard
