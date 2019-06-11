import React from 'react'
import ItemBox from './ItemBox'
import { Card, Image, Item } from 'semantic-ui-react'

class SampleClothes extends React.Component {

  render() {
    // var rand = this.props.items[Math.floor(Math.random() * this.props.items.length)];
    return(
      <div>
        {this.props.items.length > 0
          ? <>
          <Item.Group divided>
            <Item>
              <Item.Image src={this.props.items[Math.floor(Math.random() * this.props.items.length)].img_url} />
            </Item>

            <Item>
              <Item.Image src={this.props.items[Math.floor(Math.random() * this.props.items.length)].img_url} />
            </Item>

          </Item.Group>
            </>
          : null
        }
      </div>
    )
  }

}

export default SampleClothes
