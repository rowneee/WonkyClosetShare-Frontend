import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewItemForm from './NewItemForm'
require('dotenv').config();

class NewItem extends React.Component {

  // openWidget = () => {
  //   window.cloudinary.createUploadWidget({
  //     cloudName: process.env.CLOUD_NAME,
  //     uploadPreset: "knqkvhmh"
  //   },
  //   (error, result) => {
  //     if (result && result.event === "success") {
  //       this.setState({
  //         image: `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/${result.info.path}`, uploaded: true
  //       })
  //     }
  //   }
  // ).open()
  // }

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button compact onClick={this.show('blurring')}>Add an Item</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a New Item</Modal.Header>
          <Modal.Content >
            <NewItemForm handleSubmitNewItem={this.props.handleSubmitNewItem}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
              </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default NewItem
