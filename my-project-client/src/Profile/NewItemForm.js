import React from 'react'
import { Button } from 'semantic-ui-react'
require('dotenv').config();

class NewItemForm extends React.Component {

  openWidget = () => {
    window.cloudinary.createUploadWidget({
      cloudName: process.env.CLOUD_NAME,
      uploadPreset: "knqkvhmh"
    },
    (error, result) => {
      if (result && result.event === "success") {
        this.setState({
          image: `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/${result.info.path}`, uploaded: true
        })
      }
    }
  ).open()
  }

  render() {
    return (
      <>
      <Button onClick={this.openWidget} >
        Upload New Item
      </Button>
      </>
    )
  }
}

export default NewItemForm
