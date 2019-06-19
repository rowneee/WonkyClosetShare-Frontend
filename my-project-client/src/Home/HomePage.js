import React from 'react'
import SampleClothes from './SampleClothes'


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
        </div>
      </div>
    )
  }

}

export default HomePage
