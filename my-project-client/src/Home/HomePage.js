import React from 'react'
import SampleClothes from './SampleClothes'

class HomePage extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/items')
    .then(r => r.json())
    .then(items => {
        this.setState({items})
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <SampleClothes items={this.state.items}/>
      </div>
    )
  }

}

export default HomePage
