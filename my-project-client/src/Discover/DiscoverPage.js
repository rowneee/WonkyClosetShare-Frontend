import React from 'react'
import AllItems from './AllItems'
import ItemCard from './ItemCard'
import { Card } from 'semantic-ui-react'

class DiscoverPage extends React.Component {

  handleClick = (itemId) => {
    this.props.onChosenItem(itemId)
  }

  render() {
    console.log("Disc", this.props);
    return (
      <div className="container">
        <div className="ui five column grid">
          <div className="row card-row">
            {this.props.items.map(item => {
              return <ItemCard
                item={item}
                key={item.id}
                id={item.id}
                borrowItem={()=>this.borrowItem}
                isBorrowed={this.props.isBorrowed}
                handleClick={this.handleClick}
                addItemToCloset={this.props.addItemToCloset}
                />
            })}
          </div>
        </div>
      </div>

    )
  }

}

export default DiscoverPage
