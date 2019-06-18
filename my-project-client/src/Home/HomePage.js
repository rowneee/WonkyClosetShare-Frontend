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
        <SampleClothes items={this.props.items}/>

      </div>
    )
  }

}

export default HomePage
