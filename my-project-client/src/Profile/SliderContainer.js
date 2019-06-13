import React, { Component } from 'react'
import SliderComponent from './SliderComponent'
import {Container} from 'semantic-ui-react'

export default class SliderContainer extends Component {

  state = {
    currentIndex: 0,
    translateValue: 0,
  }

  goToPrevSlide = () => {
   if(this.state.currentIndex === 0)
     return;

   this.setState(prevState => ({
     currentIndex: prevState.currentIndex - 1,
     translateValue: prevState.translateValue + this.slideWidth()
   }))
 }

 goToNextSlide = (array) => {
   // Exiting the method early if we are at the end of the images array.
   // We also want to reset currentIndex and translateValue, so we return
   // to the first image in the array.
   if(this.state.currentIndex === array.length - 1) {
     return this.setState({
       currentIndex: 0,
       translateValue: 0
     })
   }

   // This will not run if we met the if condition above
   this.setState(prevState => ({
     currentIndex: prevState.currentIndex + 1,
     translateValue: prevState.translateValue + -(this.slideWidth())
   }));
 }

 slideWidth = () => {
    console.log(document.querySelector('.slide').clientWidth)
    return document.querySelector('.slide').clientWidth

 }

 render() {
   return (
    <div>
      <SliderComponent
        currentIndex={this.state.currentIndex}
        translateValue={this.state.translateValue}
        goToPrevSlide={this.goToPrevSlide}
        goToNextSlide={this.goToNextSlide}
        items={this.props.items}
        borrowedItems={this.props.borrowedItems}
        myItems={this.props.myItems}
        accessories={this.props.accessories}
        tops={this.props.tops}
        bottoms={this.props.bottoms}
        shoes={this.props.shoes}
      />
   </div>
   );
 }
}
