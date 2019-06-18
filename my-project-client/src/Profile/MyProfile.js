import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import SliderContainer from './SliderContainer'
import MyItems from './MyItems'
import NewItemForm from './NewItemForm'
import {Animated} from "react-animated-css"

class MyProfile extends React.Component {

  render() {
    console.log("profile", this.props);
    return (
      <div>
        <center>
          <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true}>
            <div className="my-closet-title">
                MY CLOSET
            </div>
          </Animated>
        </center>
        <center>
          <br />
          <br />
          <NewItemForm />
        </center>
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
