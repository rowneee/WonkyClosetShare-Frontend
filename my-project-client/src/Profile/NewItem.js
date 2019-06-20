import React from 'react'
import { Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import NewItemForm from './NewItemForm'
require('dotenv').config();

class NewItem extends React.Component {

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button compact onClick={this.show('blurring')} variant="contained"
        color="seconary">Add an Item</Button>
        <Modal open={open} onClose={this.close}>
          <Modal.Header>Add a New Item</Modal.Header>
          <Modal.Content >
            <NewItemForm
              handleSubmitNewItem={this.props.handleSubmitNewItem}
              currentUser={this.props.currentUser}
              />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} variant="outlined"
            color="primary">
              Cancel
              </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default NewItem
