import React from 'react'
import SampleClothes from './SampleClothes'

class HomePage extends React.Component {
  state = {
    myVid: "Clueless.mp4"
  }
  render() {
    console.log("HOME", this.props);
    return (
      <div>
      <div class="banner">
        <div class="banner__background">
          <iframe width="1400" height="800" src="https://www.youtube.com/embed/XNDubWJU0aU?autoplay=1&loop=1&playlist=Rz-GP7uU0Fc&playsinline=1&disablekb=1&hd=1&vq=720" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video-placeholder" style={{backgroundImage: `url(require("/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/maxresdefault.jpg"))`}}></div>
          </div>
        <div class="banner__content center-box">
        <div class="center-box__body">
          <h1 class="txt-title txt-title--banner">WeLCoMe ZaINNYYYY KidZ</h1>
        </div>
      </div>
    </div>
    <pre id="window-width"></pre>
    <pre id="autoplay"></pre>
    </div>
    )
  }

}

export default HomePage
