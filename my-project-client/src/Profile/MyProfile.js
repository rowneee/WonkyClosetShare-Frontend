import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import Slider from './Slider'
import MyItems from './MyItems'

class MyProfile extends React.Component {

  handleRightClick = () => {

  }

  render() {
    console.log("profile", this.props);
    return (
      <div>
        <Slider items={this.props.items}/>
      </div>
    )
  }
}

export default MyProfile
