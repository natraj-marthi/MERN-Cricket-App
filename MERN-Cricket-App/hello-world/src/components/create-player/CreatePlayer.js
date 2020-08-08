import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {createPlayer} from '../../services'
const playerCategories = [
  'Select Category',
  'Batsman',
  'Bowler',
  'Wicket Keeper',
  'All Rounder'
];



export default class CreatePlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        id: 0,
        name: '',
        country: '',
        category: '',
        image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.SavePlayer = this.SavePlayer.bind(this)
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  SavePlayer(event){
    event.preventDefault()
    let player = {
      id: this.state.id,
      name: this.state.name,
      country: this.state.country,
      category: this.state.category,
      image: this.state.image
    }
    createPlayer(player).then(res=> {
      alert('done!')
    })
  }


  getPlayerCategories = playerCategories.map((cat, index) =>
    <option key={index}>{cat}</option>);

  render() {
    return (
      <Form onSubmit={this.SavePlayer}>
        <FormGroup>
          <Label for="playerId">ID:</Label>
          <Input type="number" name="id" id="playerId" placeholder="Enter player ID" value={this.state.id} onChange={this.handleChange} required></Input>
        </FormGroup>
        <FormGroup>
          <Label for="playerName">Name:</Label>
          <Input type="text" name="name" id="playerName" placeholder="Enter player name" value={this.state.name} onChange={this.handleChange} required></Input>
        </FormGroup>
        <FormGroup>
          <Label for="playerCountry">Country:</Label>
          <Input type="text" name="country" id="playerCountry" placeholder="Enter player country" value={this.state.country} onChange={this.handleChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="playerCategory">Category:</Label>
          <Input type="select" name="category" id="playerCategory" value={this.state.category} onChange={this.handleChange}>
            {this.getPlayerCategories}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="playerImage">Image:</Label>
          <Input type="text" name="image" id="playerImage" placeholder="Enter player image url" value={this.state.image} onChange={this.handleChange}></Input>
        </FormGroup>
        <Button type="submit" color="danger">Save Player</Button>
      </Form>
    )
  }

}

