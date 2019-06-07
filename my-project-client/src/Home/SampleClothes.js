import React from 'react'
import Item from './Item'

class SampleClothes extends React.Component {

  render() {
    console.log("props", this.props);
    return(
      <div>
        {this.props.items.map(item=>{
          return <Item
            item={item}
            id={item.id}
            key={item.id}
          />
        })}
      </div>
    )
  }

}

export default SampleClothes
