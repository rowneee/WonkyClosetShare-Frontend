import React from 'react'
import { Button, Checkbox, Form, Modal } from 'semantic-ui-react'

export default class NewItemForm extends React.Component {


state = {
  item_name: '',
  item_color: '',
  manufacturer: '',
  image_url: ''
}


handleChange = (event) => {
  // console.log(e.target.value)
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      item_name: this.state.item_name,
      item_color: this.state.item_color,
      manufacturer: this.state.manufacturer,
      image_url: this.state.image_url
    })
  })
    .then(resp => resp.json())
    .then((item) => {
      console.log(item)
      this.props.handleSubmitNewItem(item)
    })
}



render() {
  console.log('we in da new item modal')
  console.log(this.props)
 return (
  <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Item Name</label>
      <input onChange={this.handleChange} name="item_name" value={this.state.item_name} placeholder='Item Name' />
    </Form.Field>
    <Form.Field>
      <label>Color</label>
      <input onChange={this.handleChange} name="item_color" value={this.state.item_color}placeholder='Color' />
    </Form.Field>
    <Form.Field>
      <label>Manufacturer</label>
      <input onChange={this.handleChange} name="manufacturer" value={this.state.manufacturer} placeholder='Manufacturer' />
    </Form.Field>
    <Form.Field>
      <label>Image URL</label>
      <input onChange={this.handleChange} name="image_url" value={this.state.image_url} placeholder='Image URL' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
}
}
