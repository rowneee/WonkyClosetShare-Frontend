import React from 'react'
// import ItemCard from '../Discover/ItemCard'

class Notifications extends React.Component {

  // componentDidMount() {
  //   const token = localStorage.getItem('token')
  //   fetch(`http://localhost:3000/api/v1/users/${userId}/pending_items`, {
  //     headers: {
  //       Authorization: `${token}`
  //     }
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     console.log("noti data", data)
  //     // this.setState(pendingItems: )
  //   })
  // }

  render() {
    return(
      <>
      {this.props.pendingItems}
      </>
    )
  }

}

export default Notifications
