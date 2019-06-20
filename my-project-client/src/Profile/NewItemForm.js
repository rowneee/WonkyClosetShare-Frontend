import React from 'react'
import { Checkbox, Form, Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

export default class NewItemForm extends React.Component {


state = {
  brand: '',
  color: '',
  size: '',
  description: '',
  category: '',
  img_url: '',
  status: ''
}


handleChange = (event) => {
  // console.log(e.target.value)
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  const token = localStorage.getItem('token')
  fetch('http://localhost:3000/api/v1/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      "Authorization": `${token}`
    },
    body: JSON.stringify({
      owner_id: this.props.currentUser.id,
      brand: this.state.brand,
      color: this.state.color,
      size: this.state.size,
      description: this.state.description,
      category: this.state.category,
      img_url: this.state.img_url,
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
        img_url: `https://res.cloudinary.com/${"wonkycloud"}/image/upload/${result.info.path}`, uploaded: true
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
      <label className="label-titles">Item Brand</label>
      <input onChange={this.handleChange} name="brand" placeholder='Brand' />
    </Form.Field>
    <Form.Field>
      <label className="label-titles">Color</label>
      <input onChange={this.handleChange} name="color" placeholder='Color' />
    </Form.Field>
    <Form.Field>
      <label className="label-titles">Size</label>
      <input onChange={this.handleChange} name="size" placeholder='Size' />
    </Form.Field>
    <Form.Field>
      <label className="label-titles">Description</label>
      <input onChange={this.handleChange} name="description" placeholder='Description' />
    </Form.Field>
    <Form.Field>
      <label className="label-titles">category</label>
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
