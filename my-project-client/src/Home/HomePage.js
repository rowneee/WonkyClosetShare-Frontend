import React from 'react'
import SampleClothes from './SampleClothes'
import {Animated} from "react-animated-css"

class HomePage extends React.Component {

  render() {
    console.log("HOME", this.props);
    return (
      <div className="home">
        <div className="home-screen-card">
          <div className="home-screen-card-topbar">
            <div className="home-button">
              <p className="home-button-x">
                x
              </p>
            </div>
            <div className="home-button">
              <p className="home-button-o">
              []
              </p>
            </div>
            <div className="home-button">
              <p className="home-button_-">
                -
              </p>
            </div>
            <div className="top-url">
              <p className="top-url-text">
              www.myspace.com/tom - Microsoft Internet Explorer
              </p>
            </div>
          </div>
          <div className="home-screen-card-topbar2">
            <div className="second-button">
              <p className="file">
                File
              </p>
            </div>
            <div className="second-button">
              <p className="edit">
                Edit
              </p>
            </div>
            <div className="second-button">
              <p className="view">
                View
              </p>
            </div>
            <div className="second-button">
              <p className="favorites">
                Favorites
              </p>
            </div>
            <div className="second-button">
              <p className="tools">
                Tools
              </p>
            </div>
            <div className="second-button">
              <p className="help">
                Help
              </p>
            </div>
          </div>
          <div className="home-screen-card-topbar3">
            <div className="second-button">
              <p className="help">
                Address
              </p>
            </div>
            <div className="white-box">
              <p className="myspace-input">
                http://www.myspace.com/tom
              </p>
            </div>
          </div>
          <Animated animationIn="rotateInDownRight" animationOut="fadeOut" isVisible={true}>
            <div className="home-screen-card1">
              <p className="zainy-title">
                Hiiii ZaiNY KidZZZZZ
                WelcoME 2 tha year 2003
                PlzZZZ sign IN/siGn UP
              </p>
            </div>
          </Animated>
          <Animated animationIn="rotateInUpLeft" animationOut="fadeOut" isVisible={true}>
          <div className="home-screen-card2">
            <p className="zainy-title">
              TiME to GeT yoUR ClOthez
              zzzCHairKidzzz
            </p>
          </div>
          </Animated>
          <Animated animationIn="rotateInUpRight" animationOut="fadeOut" isVisible={true}>
            <div className="home-screen-card3">
              <p className="zainy-title">
                CaLL YoUr MoM!!!!!!
              </p>
            </div>
          </Animated>
        </div>
      </div>
    )
  }

}

export default HomePage
