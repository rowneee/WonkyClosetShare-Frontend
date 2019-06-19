import React from 'react'
import { Checkbox, Form, Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

export default class NewItemForm extends React.Component {


state = {
  itemBrand: '',
  itemColor: '',
  itemSize: '',
  itemDescription: '',
  itemCategory: '',
  itemIMG: ''
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
      itemBrand: this.state.itemBrand,
      itemColor: this.state.itemColor,
      itemSize: this.state.itemSize,
      itemDescription: this.state.itemDescription,
      itemCategory: this.state.itemCategory,
      itemIMG: this.state.itemIMG,
      status: "Not Borrowed"
    })
  })
    .then(resp => resp.json())
    .then((item) => {
      console.log(item)
      this.props.handleSubmitNewItem(item)
    })
}

openWidget = () => {
  window.cloudinary.createUploadWidget({
    cloudName: "wonkycloud",
    uploadPreset: "knqkvhmh"
  },
  (error, result) => {
    if (result && result.event === "success") {
      this.setState({
        image: `https://res.cloudinary.com/${"wonkycloud"}/image/upload/${result.info.path}`, uploaded: true
      })
    }
  }
).open()
}



render() {
  console.log('we in da new item modal')
  console.log(this.props)
 return (
  <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Item Brand</label>
      <input onChange={this.handleChange} name="item_name" placeholder='Brand' />
    </Form.Field>
    <Form.Field>
      <label>Color</label>
      <input onChange={this.handleChange} name="item_color" placeholder='Color' />
    </Form.Field>
    <Form.Field>
      <label>Size</label>
      <input onChange={this.handleChange} name="size" placeholder='Size' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input onChange={this.handleChange} name="description" placeholder='Description' />
    </Form.Field>
    <Form.Field>
      <label>category</label>
      <input onChange={this.handleChange} name="category" placeholder='Category (example: Tops, Bottoms...)' />
    </Form.Field>
      <Button onClick={this.openWidget} variant="outlined"
      color="primary">
        Add Photo
      </Button>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
}
}
