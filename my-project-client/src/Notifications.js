import React from 'react'
import ItemCard from './Discover/ItemCard'

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
    console.log("noti props", this.props);
    return(
      <>
      {this.props.pendingItems.map(item=> {
        console.log("notification item", item);
        return <ItemCard
          item={item}
          />
      })}
      </>
    )
  }

}

export default Notifications
