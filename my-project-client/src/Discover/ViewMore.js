import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ViewMore = (props) => {
  return (
    <Modal
      trigger={<Button>showmodal </Button>}
      onClose={()=>props.flipCardBack()}
    >
      <Modal.Header>Item Details</Modal.Header>
      <Modal.Content image>
      <Image src={props.item.img_url} />
      <Modal.Description>
      <Header>Owner: {props.item.owner.username}</Header>
      <p>Status: {props.item.status}</p>
      <p>Brand: {props.item.brand}</p>
      <p>Color: {props.item.color}</p>
      <p>Size: {props.item.size}</p>
      <p>Description: {props.item.description}</p>
      </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ViewMore
