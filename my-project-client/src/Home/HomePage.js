import React from 'react'
import SampleClothes from './SampleClothes'

class HomePage extends React.Component {

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
