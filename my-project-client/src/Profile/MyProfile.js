import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import SliderContainer from './SliderContainer'
import MyItems from './MyItems'
import NewItem from './NewItem'
import {Animated} from "react-animated-css"

class MyProfile extends React.Component {

  sortItems = (category) => {
    return [...this.props.myItems, ...this.props.borrowedItems].filter(item=>item.category===category)
  }

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
          accessories={this.sortItems("Accessories")}
          tops={this.sortItems("Tops")}
          bottoms={this.sortItems("Bottoms")}
          shoes={this.sortItems("Shoes")}
        />
      </div>
    )
  }
}

export default MyProfile
