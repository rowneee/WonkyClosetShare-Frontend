import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

class AddToCloset extends React.Component {

  render() {
    console.log("ATC", this.props);
    if (this.props.isBorrowed) {
      return (
        <Button content='Remove'
          onClick={()=>{}}
          />
      )
    } else if (!this.props.isBorrowed) {
      return(
        <div>
        {this.props.items.map(item => {
          return <Button
          key = {item.id}
          text={item.name}
          addItemToCloset={this.addItemToCloset}
          onClick={()=>this.props.addItemToCloset(item.id)}
          />
        })}
        </div>
      )
    }
  }
}


export default AddToCloset
