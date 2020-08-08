import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import './Home.css';

const Example = (props) => {
  return (
    <Container fluid className="home-margin">
      <Jumbotron className="bg-danger border border-dark text-light">
        <h1 className="display-3">Cricket Players Application</h1>
        <blockquote className="blockquote">
        <p>This application uses: <span className="text-dark"><b>MongoDB Express React and Node.js (MERN stack)</b></span></p>
        </blockquote>
        <hr className="my-2" />
        <p className="lead">This is a simple CRUD application for Creating, Reading, Updating and Deleting players</p>
        <p className="lead">
          <Button color="dark" onClick={()=>{window.open('https://www.icc-cricket.com/', '_blank') }}>Cricket News</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Example;