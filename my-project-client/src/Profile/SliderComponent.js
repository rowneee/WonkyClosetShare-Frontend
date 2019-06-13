import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class SliderComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.props.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.props.accessories.map((item, i) => (
                  <Slide key={i} item={item} />
                ))
              }
          </div>
          <LeftArrow
           goToPrevSlide={()=>this.goToPrevSlide(this.props.currentIndex, this.props.translateValue)}
          />

          <RightArrow
           goToNextSlide={()=>this.goToNextSlide(this.props.accessories, this.props.currentIndex, this.props.translateValue)}
          />
      </div>
      </div>
    )
  }
}

export default SliderComponent
