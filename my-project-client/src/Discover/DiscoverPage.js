import React from 'react'
import AllItems from './AllItems'
import ItemCard from './ItemCard'

class DiscoverPage extends React.Component {

  render() {
    console.log("Disc", this.state);
    return (
      <div className="ui container">
        <div className="ui five column grid">
          <div className="row card-row">
            {this.props.items.map(item => {
              return <ItemCard
                item={item}
                key={item.id}
                id={item.id}
                handleClick={this.handleClick}
                />
            })}
          </div>
        </div>
      </div>

    )
  }

}

export default DiscoverPage
