import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import SliderContainer from './SliderContainer'
import MyItems from './MyItems'
import NewItemForm from './NewItemForm'

class MyProfile extends React.Component {

  openWidget = () => {

  }

  render() {
    console.log("profile", this.props);
    return (
      <div>
        <SliderContainer
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
