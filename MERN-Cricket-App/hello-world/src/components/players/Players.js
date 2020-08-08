import React from 'react';
import { CardGroup, Container } from 'reactstrap';
import Player from '../player/Player';
import {getPlayers} from '../../services';
import './Players.css';

export default class Players extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      playersList: []
    }
  }

  componentWillMount() {
    getPlayers().then(res => {
      this.setState({playersList: res.data.players})
      console.log(res);
    })
  }

  render(){
    return (
      <Container fluid className="margin-top">
      <CardGroup>
        {this.state.playersList.map((plr, index) => 
          <Player key={index} player={plr}/>  
        )}
      </CardGroup>
      </Container>
    )
  }
}
