import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

class AddToCloset extends React.Component {
  render() {
    console.log("ATC", this.props);
    if (!this.props.isBorrowed) {
      return(
        <div>
        <Button
          key={this.props.item.id}
          text={this.props.item.name}
          onClick={()=>this.props.requestToBorrowItem(this.props.item.id)}
          onClick={this.props.turnOffDetails}
         >
         Request To Borrow
        </Button>
        </div>
      )
    }
  }
}


export default AddToCloset
