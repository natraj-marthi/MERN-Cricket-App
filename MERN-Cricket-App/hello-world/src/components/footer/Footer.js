import React from 'react'
import {Container} from 'reactstrap'
import './Footer.css'

export default class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <Container>
          <p className="footer-text">&copy; Copyright 2018 Cricket app</p>
        </Container>
      </footer>
    );
  }
}