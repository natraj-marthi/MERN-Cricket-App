import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import CreatePlayerForm from '../create-player/CreatePlayer'
// import {Link} from 'react-router-dom'

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleCreatePlayerModal = this.toggleCreatePlayerModal.bind(this)
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleCreatePlayerModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" fixed="top" dark expand="md">
          <NavbarBrand href="/"><img src="/assets/logo.jpg" alt="logo for cricket app" className="logo"/> Cricket App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/players">Players</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.toggleCreatePlayerModal}>
                    Create Player
                  </DropdownItem>
                  <DropdownItem onClick={()=> {window.open('https://www.cricbuzz.com', '_blank')}}>
                    Cricket News
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        <Modal isOpen={this.state.modal} toggle={this.toggleCreatePlayerModal} className="modal-class">
        <ModalHeader>Create Player</ModalHeader>
        <ModalBody>
          <CreatePlayerForm></CreatePlayerForm>
        </ModalBody>
      </Modal>
        </Navbar>
      </div>
    );
  }
}