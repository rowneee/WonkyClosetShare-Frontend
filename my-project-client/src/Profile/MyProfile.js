import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import Slider from './Slider'
import MyItems from './MyItems'

class MyProfile extends React.Component {

  render() {
    console.log("profile", this.props);
    return (
      <div>
        <Slider
          items={this.props.items}
          borrowedItems={this.props.borrowedItems}
          myItems={this.props.myItems}
          accessories={this.props.accessories}
          tops={this.props.tops}
          bottoms={this.props.bottoms}
          shoes={this.props.shoes}
        />
      </div>
    )
  }
}

export default MyProfile
