import React from 'react'
import Player from '../player/Player'
import {getPlayer} from '../../services'
import { Container, Modal, ModalBody, ModalHeader } from 'reactstrap';
import UpdatePlayerForm from '../update-player/UpdatePlayer'

export default class ViewPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      player: {},
      modal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  componentWillMount() {
    getPlayer(this.props.match.params.id).then(res => {
      this.setState({
        player: res.data.player
      })
    })
  }

  render() {
    return (
      <Container fluid className="margin-top">
      <Player modal={this.toggleModal} view player={this.state.player}></Player>
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-class">
        <ModalHeader>Update Player</ModalHeader>
        <ModalBody>
          <UpdatePlayerForm player={this.state.player}></UpdatePlayerForm>
        </ModalBody>
      </Modal>
      </Container>
    );
  }
}