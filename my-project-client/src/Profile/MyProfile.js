import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import SliderContainer from './SliderContainer'
import MyItems from './MyItems'
import NewItem from './NewItem'
import {Animated} from "react-animated-css"

class MyProfile extends React.Component {

  render() {
    console.log("profile", this.props);
    return (
      <div>
        <center>
          <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true}>
            <div className="my-closet-title">
                {this.props.currentUser.username}s closet
            </div>
          </Animated>
        </center>
        <center>
          <br />
          <br />
          <NewItem handleSubmitNewItem={this.props.handleSubmitNewItem} />
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
