import React from 'react'
import ItemBox from './ItemBox'
import { Card, Image, Item, Container } from 'semantic-ui-react'

class SampleClothes extends React.Component {

  render() {
    // var rand = this.props.items[Math.floor(Math.random() * this.props.items.length)];
    return(
      <div>
        {this.props.items.length > 0
          ? <>
          <Item.Group divided>
            <Container>
            <Item>
              <Item.Image src={this.props.items[Math.floor(Math.random() * this.props.items.length)].img_url} className="home-items"/>
            </Item>
            </Container>
            <Container>
            <Item>
              <Item.Image src={this.props.items[Math.floor(Math.random() * this.props.items.length)].img_url} className="home-items"/>
            </Item>
          </Container>

          </Item.Group>
            </>
          : null
        }
      </div>
    )
  }

}

export default SampleClothes
