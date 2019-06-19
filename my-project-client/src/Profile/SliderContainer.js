import React, { Component } from 'react'
import SliderComponent from './SliderComponent'
import {Container} from 'semantic-ui-react'
import {Animated} from "react-animated-css"

export default class SliderContainer extends Component {

 render() {
   return (
    <div>
      <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={true}>
        <SliderComponent
          category={this.props.accessories}
        />
      </Animated>
      <Animated animationIn="slideInRight" animationOut="slideOutRight" isVisible={true}>
        <SliderComponent
          category={this.props.tops}
        />
      </Animated>
      <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={true}>
        <SliderComponent
          category={this.props.bottoms}
        />
      </Animated>
      <Animated animationIn="slideInRight" animationOut="slideOutRight" isVisible={true}>
        <SliderComponent
          category={this.props.shoes}
        />
      </Animated>
   </div>
   );
 }
}
