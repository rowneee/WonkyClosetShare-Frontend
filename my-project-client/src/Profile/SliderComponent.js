import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class SliderComponent extends React.Component {
  state = {
    currentIndex: 0,
    translateValue: 0
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

  // currentIndex={this.state.currentIndex}
  // translateValue={this.state.translateValue}
  // goToPrevSlide={this.goToPrevSlide}
  // goToNextSlide={this.goToNextSlide}
  // items={this.props.items}
  // borrowedItems={this.props.borrowedItems}
  // myItems={this.props.myItems}
  // accessories={this.props.accessories}
  // tops={this.props.tops}
  // bottoms={this.props.bottoms}
  // shoes={this.props.shoes}
  render() {
    return (
      <div>
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.props.category.map((item, i) => (
                  <Slide key={i} item={item} />
                ))
              }
          </div>
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
           goToNextSlide={()=>this.goToNextSlide(this.props.category)}
          />
      </div>
      </div>
    )
  }
}

export default SliderComponent
