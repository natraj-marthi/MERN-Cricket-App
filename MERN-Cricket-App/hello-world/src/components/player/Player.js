import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import {deletePlayer} from '../../services';
import './Player.css';


const buttons = (view, id, modal) => {
  if(!view) {
    return (
      <Button color="danger" onClick={() => {window.location = `/players/${id}` }}>View Player</Button>
    )
  } else {
    return (
      <ButtonGroup>
        <Button color="outline-info" onClick={modal} >Edit Player</Button>
        <Button color="outline-danger" onClick={() => deletePlayer(id).then(res => {window.location='/players'})} >Delete Player</Button>
      </ButtonGroup>
    );
  }
}

const Example = (props) => {
  return (
    <div>
      <Card className="ml-4 Player">
        <CardImg top width="100%" src={props.player.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.player.name}</CardTitle>
          <CardSubtitle>{props.player.id}</CardSubtitle>
          <CardText>{props.player.category}, {props.player.country}</CardText>
          {buttons(props.view, props.player.id, props.modal)}
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;