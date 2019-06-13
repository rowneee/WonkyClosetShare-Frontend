import React, { Component } from 'react'
import SliderComponent from './SliderComponent'
import {Container} from 'semantic-ui-react'

export default class SliderContainer extends Component {

 render() {
   return (
    <div>
      <SliderComponent
        category={this.props.accessories}
        accessories={this.props.accessories}
      />
      <SliderComponent
        category={this.props.tops}
        tops={this.props.tops}
      />
      <SliderComponent
        category={this.props.bottoms}
        bottoms={this.props.bottoms}
      />
      <SliderComponent
        category={this.props.shoes}
        shoes={this.props.shoes}
      />
   </div>
   );
 }
}
