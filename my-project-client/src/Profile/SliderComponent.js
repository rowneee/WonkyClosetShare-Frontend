import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class SliderComponent extends React.Component {

  render() {
    console.log("i've reached!!", this.props);
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
         goToPrevSlide={()=>this.props.goToPrevSlide()}
        />

        <RightArrow
         goToNextSlide={()=>this.props.goToNextSlide(this.props.accessories)}
        />
    </div>
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.props.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.props.tops.map((item, i) => (
                <Slide key={i} item={item} />
              ))
            }
        </div>
        <LeftArrow
         goToPrevSlide={()=>this.props.goToPrevSlide()}
        />

        <RightArrow
         goToNextSlide={()=>this.props.goToNextSlide(this.props.tops)}
        />
      </div>
        <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.props.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.props.bottoms.map((item, i) => (
                <Slide key={i} item={item} />
              ))
            }
        </div>
        <LeftArrow
         goToPrevSlide={()=>this.props.goToPrevSlide()}
        />

        <RightArrow
         goToNextSlide={()=>this.props.goToNextSlide(this.props.bottoms)}
        />
      </div>
       <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.props.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.props.shoes.map((item, i) => (
                <Slide key={i} item={item} />
              ))
            }
        </div>
        <LeftArrow
         goToPrevSlide={()=>this.props.goToPrevSlide()}
        />
        <RightArrow
         goToNextSlide={()=>this.props.goToNextSlide(this.props.shoes)}
        />
      </div>
      </div>
    )
  }
}

export default SliderComponent
